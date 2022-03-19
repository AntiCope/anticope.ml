import requests
import json
from os import getenv
import re

VERIFIED = json.load(open('verified.json', "r+", encoding='utf-8'))
INJECT = json.load(open('inject.json', "r+", encoding='utf-8'))
GH_TOKEN = getenv("GH_TOKEN")
HEADERS = {"Authorization": f"token {GH_TOKEN}", "Accept": "application/vnd.github.v3+json"}
FEATURE_RE = re.compile("(?:add\(new )([^(]+)(?:\(\)\))")
INVITE_RE = re.compile("((?:https?:\/\/)?(?:www.)?(?:discord.(?:gg|io|me|li|com)|discordapp.com\/invite|dsc.gg)\/[a-zA-z0-9-\/]+)")

# Fetch all repo names that extend MeteorAddon
repos = set()
incomplete = True
page = 0
while incomplete:
    print(f"Fetching page {page}")
    try:
        r = requests.get(
            f"https://api.github.com/search/code?q=extends+MeteorAddon+language:java+in:file&per_page=100&page={page}", headers=HEADERS).json()
        for file in r['items']:
            repo = file['repository']
            if repo['private']:
                continue
            repos.add(repo['full_name'])
            continue
        incomplete = r["incomplete_results"]
    except Exception:
        print("error. ignoring...")
    page += 1
    if page > 500: # fallback
        break

# Request all forks of templates because some people cant click generate
r = requests.get("https://api.github.com/repos/MeteorDevelopment/meteor-addon-template/forks?per_page=100", headers=HEADERS).json()
for fork in r:
    try:
        repos.add(fork['full_name'])
    except Exception:
        print("error. ignoring...")
        
# filter templates
repos = list(filter(lambda x: "-addon-template" not in x.lower(), repos))

def parse_repo(name):
    print(f"parsing: {name}")
    repo = requests.get(f"https://api.github.com/repos/{name}", headers=HEADERS).json()
    fabric = requests.get(f"https://raw.githubusercontent.com/{name}/{repo['default_branch']}/src/main/resources/fabric.mod.json").json()
    authors = []
    for author in fabric['authors']:
        if type(author) == str:
            authors.append(author)
    if len(authors) == 0:
        authors.append(repo['owner']['login'])
    links = {"github": repo['html_url']}
    icon = None
    summary = ""
    try:
        summary = repo['description']
        if not summary:
            summary = fabric['description']
    except Exception:
        print("error. ignoring...")
    try:
        icon = f"https://raw.githubusercontent.com/{name}/{repo['default_branch']}/src/main/resources/{fabric['icon']}"
        if requests.head(icon).status_code%100 == 4:
            print("missing icon")
            icon = None
    except Exception:
        print("error. ignoring...")
    try:
        readme = requests.get(f"https://raw.githubusercontent.com/{name}/{repo['default_branch']}/README.md").text
        invites = INVITE_RE.findall(readme)
        if len(invites) == 0:
            invites = INVITE_RE.findall(str(fabric))
        if len(invites) > 0:
            if requests.head(invites[0]).status_code%100 != 4:
                links["discord"] = invites[0]
    except Exception:
        0/0
        print("error. ignoring...")
    features = []
    try:
        entrypoint = requests.get(f"https://raw.githubusercontent.com/{name}/{repo['default_branch']}/src/main/java/{fabric['entrypoints']['meteor'][0].replace('.', '/')}.java").text
        features.extend([str(x) for x in FEATURE_RE.findall(entrypoint)])
    except Exception:
        print("error. ignoring...")
    result = {
        "authors": authors,
        "features": features,
        "icon": icon,
        "id": repo['full_name'],
        "links": links,
        "name": fabric['name'],
        "stars": repo['stargazers_count'],
        "last-update": repo['updated_at'],
        "status": {
            "archived": repo['archived'],
            "devbuild": False,
            "release": False
        },
        "verified": (repo['full_name'] in VERIFIED),
        "summary": summary
    }
    result.update(INJECT.get(repo['full_name'], {}))
    return result
    
verified_json = []
unverified_json = []
for repo in repos:
    if repo in VERIFIED:
        try:
            verified_json.append(parse_repo(repo))
        except Exception:
            print("error. ignoring...")
    else:
        try:
            unverified_json.append(parse_repo(repo))
        except Exception:
            print("error. ignoring...")
            
json.dump(verified_json, open("addons-ver.json", "w+", encoding='utf-8'), indent=None)
json.dump(unverified_json, open("addons-unver.json", "w+", encoding='utf-8'), indent=None)