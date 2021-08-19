import requests
import json
from os import getenv
import re
from datetime import datetime

GH_TOKEN = getenv("GH_TOKEN")
repo_regex = re.compile("https://github.com/[\w\.@\:\-~]+/[\w\.@\:\-~]+")

# create list of verified addons
verified = repo_regex.findall(open("pages/main/MeteorAddons.md", "r", encoding='utf-8').read())
verified = set(verified)
print(f"Found verified addons: {len(verified)}")
# count addons (-1 bc of MeteorDevelopment/meteor-addon-template)
addon_count = len(verified) - 1
total_addon_count = addon_count

# get template size & name
r = requests.get("https://api.github.com/repos/MeteorDevelopment/meteor-addon-template")
repo = r.json()
template_name = repo["name"]
template_size = repo["size"]
del repo

# function that formats repos contents to exclute private and verified repos and repos which are just unmodified templates and add code size property
def parse_repo(repo):
    if repo['private']:
        return None
    if repo['html_url'] in verified:
        return None
    if repo['name'] == template_name:
        return None
    r = requests.get(repo['url'])
    repo.update(r.json())
    if repo['size'] == template_size:
        return None
    return repo

# Request all code snippets in java extending MeteorAddon class
r = requests.get(f"https://api.github.com/search/code?q=extends+MeteorAddon+language:java+in:file+fork:true&per_page=100&access_token={GH_TOKEN}")
repos = r.json()['items']
repos = [repo['repository'] for repo in repos]

# Request all forks of meteor-addon-template because some people cant click generate
r = requests.get("https://api.github.com/repos/MeteorDevelopment/meteor-addon-template/forks?per_page=100")
repos.extend(r.json())

# load repos

repos = [parse_repo(repo) for repo in repos]
repos = list(filter(bool, repos))
repos.sort(key=lambda x: x['size'], reverse=True)

# create markdown file, write template to it
file = open("pages/sub/UnverifiedAddons.md", 'w+', encoding='utf-8')
template = open("resources/UnverifiedAddons.template.md", "r", encoding='utf-8').read()
template = template.split("<!-- START TEMPLATE -->")[1]
template = template.replace("{{ date }}", datetime.utcnow().strftime('%Y-%m-%d %H:%M (UTC)'))
file.write(template)

# add a line for each repo
for repo in repos:
    print(f"Adding: {repo['full_name']}")
    total_addon_count += 1
    file.write(f"\n| {repo['name']} | {repo['description']} | [Repository]({repo['html_url']}) | {repo['owner']['login']} |")

file.close()

# update counter in README
file = open("README.md", "r+")
content = file.read()
file.seek(0)
content = re.sub(
    "https://img\.shields\.io/badge/Verified-Addons-[0-9]+-blue",
    f"https://img.shields.io/badge/Verified-Addons-{addon_count}-blue",
    content
    )
content = re.sub(
    "https://img\.shields\.io/badge/Total-Addons-[0-9]+-blueviolet",
    f"https://img.shields.io/badge/Total-Addons-{total_addon_count}-blueviolet",
    content
    )
file.write(content)
file.truncate()
file.close()
