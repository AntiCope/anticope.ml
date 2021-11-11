import requests
import json
from os import getenv
import re
from datetime import datetime

GH_TOKEN = getenv("GH_TOKEN")
repo_regex = re.compile("https://github.com/[\w\.@\:\-~]+/[\w\.@\:\-~]+")

# create list of verified addons
verified = repo_regex.findall(open("pages/MeteorAddons.md", "r", encoding='utf-8').read())
verified = set(verified)
# count addons (minus some links)
addon_count = len(verified) - 5
total_addon_count = addon_count
print(f"Found verified addons: {addon_count}")

# get templates size & name
template_names = []
template_sizes = []
r = requests.get("https://api.github.com/repos/MeteorDevelopment/meteor-addon-template")
repo = r.json()
template_names.append(repo["name"])
template_sizes.append(repo["size"])
r = requests.get("https://api.github.com/repos/ChaotenHG/meteor-kotlin-addon-template")
repo = r.json()
template_names.append(repo["name"])
template_sizes.append(repo["size"])
del repo

# function that formats repos contents to exclute private and verified repos and repos which are just unmodified templates and add code size property
def parse_repo(repo):
    if repo['private']:
        return None
    if repo['html_url'] in verified:
        return None
    if repo['name'] in template_names:
        return None
    r = requests.get(repo['url'])
    repo.update(r.json())
    if repo['size'] in template_sizes:
        return None
    return repo

# Request all code snippets in java extending MeteorAddon class
r = requests.get("https://api.github.com/search/code?q=extends+MeteorAddon+language:java+in:file+fork:true&per_page=100", headers={"Authorization": f"token {GH_TOKEN}"})
repos = None
try:
    repos = r.json()['items']
except KeyError:
    if r.status_code != 200:
        print(r.json())
    raise KeyError
repos = [repo['repository'] for repo in repos]

# Request all forks of templates because some people cant click generate
r = requests.get("https://api.github.com/repos/MeteorDevelopment/meteor-addon-template/forks?per_page=100")
repos.extend(r.json())
r = requests.get("https://api.github.com/repos/ChaotenHG/meteor-kotlin-addon-template/forks?per_page=100")
repos.extend(r.json())

# load repos

repos = [parse_repo(repo) for repo in repos]
repos = list(filter(bool, repos))
repos.sort(key=lambda x: x['size'], reverse=True)

# create markdown file, write template to it
file = open("pages/addons/UnverifiedAddons.md", 'w+', encoding='utf-8')
template = open("resources/Unverifiedaddons.template.md", "r", encoding='utf-8').read()
template = template.split("<!-- START TEMPLATE -->")[1]
if template[-1] == '\n': # fuck you github editor
    template = template[:-1]
template = template.replace("{{ date }}", datetime.utcnow().strftime('%Y-%m-%d %H:%M (UTC)'))
file.write(template)

# add a line for each repo
def parse_timestamp(matchobj:re.Match):
    return datetime.strptime(" ".join(matchobj.groups()), "%Y %m %d").strftime("%d %b %Y")
for repo in repos:
    print(f"Adding: {repo['full_name']}")
    total_addon_count += 1
    last_pushed_timestamp = re.sub(
        r'([0-9]+)-([0-9]+)-([0-9]+)T[0-9:]+Z', parse_timestamp, repo['pushed_at'])  # Date only
    file.write(f"\n| {repo['name']} | {repo['description']} | [Repo]({repo['html_url']}) | {last_pushed_timestamp} | {repo['owner']['login']} |")

file.close()

# update counter in README
file = open("README.md", "r+")
content = file.read()
file.seek(0)
content = re.sub(
    "https://img\.shields\.io/badge/Verified%20Addons-[0-9]+-blue",
    f"https://img.shields.io/badge/Verified%20Addons-{addon_count}-blue",
    content
    )
content = re.sub(
    "https://img\.shields\.io/badge/Total%20Addons-[0-9]+-blueviolet",
    f"https://img.shields.io/badge/Total%20Addons-{total_addon_count}-blueviolet",
    content
    )
file.write(content)
file.truncate()
file.close()
