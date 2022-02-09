---
layout: default
title: Meteor Addons
has_children: true
nav_order: 1
---

# Meteor Addons

A list to help newcomers discover addons.
This repo might not stay for long as an addon marketplace system is being planned.

If you are looking for other fabric mods to be used alongside Meteor, check [this](/MeteorAdditionals.md) list out

*If you looking to get your addon verified, open [a new issue](https://github.com/AntiCope/anticope.ml/issues/new/choose) or dm `SByte#7574` or `Cloudburst#7680` on discord*

Note: Latest dev build recently got updated to 1.18, many addons have not updated to the latest changes yet.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Table of Contents</summary>

  - [Sidenote](#sidenote)
  - [Status](#status)
  - [Official Addons](#official-addons)
  - [Community Addons](#community-addons)
      - [General utilities](#general-utilities)
      - [Specialized utilities](#specialized-utilities)
      - [Duping](#duping)
      - [Uncategorized](#uncategorized)
  - [Addon Templates](#addon-templates)
- [Untested Addons](#untested-addons)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Sidenote

If an addon has multiple `.jar` files avaliable for download, do not use files ending with `-dev.jar` or `-sources.jar` as they won't work.

## Status
- 💡 Available for latest dev build
- ✔️ Available for latest release
- ❌ Unavailable for latest release
- 📦 Repo archived

## Official Addons

These addons are made and maintained by the official [Meteor Development Team](https://github.com/MeteorDevelopment).

| Icon | Name | Description | Link | Status |
| --- | ---- | ----------- | -------- | :---: |
|<img src="https://github.com/MeteorDevelopment/meteor-mbd-addon/blob/main/src/main/resources/assets/mbd/icon.png?raw=true" width="32px">| Auto Mount Bypass Dupe | Adds the AutoMountBypass Dupe | [Repository](https://github.com/MeteorDevelopment/meteor-mbd-addon) | ❌ |
|<img src="https://github.com/MeteorDevelopment/meteor-book-dupe-addon/blob/main/src/main/resources/assets/bookdupe/icon.png?raw=true" width="32px">| Book Dupe Addon | Adds the book dupe | [Repository](https://github.com/MeteorDevelopment/meteor-book-dupe-addon) | ❌ 📦 |

## Community Addons

These addons are made and maintained by developers from Meteor's community.
Each were manually checked for code quality and safety.

#### General utilities
| Icon | Name | Description | Link | Authors | Status |
| --- | ---- | ----------- | ---- | ------- | :---: |
|<img src='https://github.com/AntiCope/meteor-rejects/blob/master/src/main/resources/assets/rejects/icon.png?raw=true' width="32px">| Meteor Rejects | Various modules and commands | [Repository](https://github.com/AntiCope/meteor-rejects) | Cloudburst & StormyBytes | ✔️ 💡 |
|<img src='https://github.com/AntiCope/orion/raw/master/src/main/resources/assets/orion/icon.png?raw=true' width="32px">| Orion | A combat based pvp addon | [Repository](https://github.com/AntiCope/orion) | Cloudburst & StormyBytes (Formerly GhostTypes) | ✔️ 💡 |
|<img src='https://github.com/AntiCope/tanuki/raw/master/src/main/resources/assets/tanuki/icon.png?raw=true' width="32px">| Tanuki | Port of tanuki client | [Repository](https://github.com/AntiCope/tanuki) | Cloudburst (Formerly Walaryne) | ✔️ 💡 |
|<img src='https://github.com/Declipsonator/Meteor-Tweaks/blob/main/src/main/resources/assets/meteortweaks/icon.png?raw=true' width="32px">| Meteor Tweaks | Tweaks to modules and settings. | [Repository](https://github.com/Declipsonator/Meteor-Tweaks) | Declipsonator | ✔️ 💡 |
|<img src='https://github.com/AntiCope/meteor-lists/raw/master/resources/unknown_icon.png?raw=true' width="32px">| Meteor Additions | Addons partially based off Wurst | [Repository](https://github.com/JFronny/MeteorAdditions) | JFronny | ✔️ 💡 |
|<img src='https://raw.githubusercontent.com/cally72jhb/cally72jhb/main/assets/icon.png' width="32px">| Vector Addon | An open-source addon | [Repository](https://github.com/cally72jhb/vector-addon) | cally72jhb | ✔️ 💡 |
|<img src='https://github.com/kkllffaa/meteor-utils/blob/master/src/main/resources/assets/meteor-utils/icon.png?raw=true' width="32px">| Meteor Utils | Adds some modules & commands | [Repository](https://github.com/kkllffaa/meteor-utils) | kkllffaa | ✔️ 💡 |

#### Specialized utilities
| Icon | Name | Description | Link | Authors | Status |
| --- | ---- | ----------- | ---- | ------- | :---: |
|<img src='https://github.com/Wide-Cat/meteor-crash-addon/blob/main/src/main/resources/assets/meteorcrashaddon/icon.png?raw=true' width="32px">| Crash Addon | Adds various server crashing methods | [Repository](https://github.com/Wide-Cat/meteor-crash-addon) | Wide-Cat | ❌ |
|<img src='https://github.com/AntiCope/meteor-python-addon/blob/master/src/main/resources/assets/pythonaddon/icon.png?raw=true' width="32px">| Python Addon | An addon for creating modules and commands in python | [Repository](https://github.com/AntiCope/meteor-python-addon) | Cloudburst | ✔️ 💡  |
|<img src='https://github.com/kkllffaa/meteor-litematica-printer/blob/main/src/main/resources/assets/meteor_litematica_printer/icon.png?raw=true' width="32px">| Litematica Printer | Building litematica schematics | [Repository](https://github.com/kkllffaa/meteor-litematica-printer) | kkllffaa | ✔️ 💡 |
|<img src='https://github.com/SIMULATAN/meteor-notifications-addon/blob/main/src/main/resources/assets/notifications/icon.png?raw=true' width="32px">| Notifications Addon | Displaying notifications in the HUD | [Repository](https://github.com/SIMULATAN/meteor-notifications-addon) | SIMULATAN | ✔️ 💡 |
|<img src='https://github.com/maxsupermanhd/meteor-villager-roller/blob/main/src/main/resources/assets/template/icon.png?raw=true' width="32px">| Villager Roller | Module that continiously breaks and places work block of villager until it has desired trade | [Repository](https://github.com/maxsupermanhd/meteor-villager-roller) | maxsupermanhd | ✔️ 💡 |


#### Duping
| Icon | Name | Description | Link | Authors | Status |
| --- | ---- | ----------- | ---- | ------- | :-------: |
|<img src='https://github.com/timoreo22/auto-anvil-dupe/blob/main/src/main/resources/assets/autodupe/icon.png?raw=true' width="32px">| Auto Anvil Dupe | An addon for the anvil dupe | [Repository](https://github.com/timoreo22/auto-anvil-dupe) | timoreo22 | ❌ |
|<img src='https://github.com/Wide-Cat/item-frame-dupe-addon/blob/main/src/main/resources/assets/template/icon.png?raw=true' width="32px">| Item Frame Dupe | An addon for the item frame dupe in OpenAnarchy.org | [Repository](https://github.com/Wide-Cat/item-frame-dupe-addon) | Wide-Cat | ❌ |

#### Uncategorized
| Icon | Name | Description | Link | Authors | Status |
| --- | ---- | ----------- | ---- | ------- | :---: |
|<img src='https://github.com/AntiCope/meteor-e621-integration/blob/master/src/main/resources/assets/e621/icon.jpg?raw=true' width="32px">| E621 | Admire great artworks from the comfort of Meteor Client <img src="https://user-images.githubusercontent.com/18114966/153202568-ff9ff7a9-702a-4ad5-9dbc-91d47895cbbc.png" width="24px" alt=":troll:"> | [Repository](https://github.com/AntiCope/meteor-e621-integration) | AntiCope | ✔️ 💡 |
|<img src='https://github.com/Declipsonator/Troll-Addon/blob/main/src/main/resources/assets/BananaPlus.png?raw=true' width="32px">| Troll-Addon | The wonderful troll addon to Meteor Client. | [Repository](https://github.com/Declipsonator/Troll-Addon) | Declipsonator |

## Addon Templates

Addon templates for those of you who want to develop your own meteor addon.

- [official, java](https://github.com/MeteorDevelopment/meteor-addon-template)


# Untested Addons
Addons directly scraped from Github

<div class="text-yellow-200">
⚠ These addons where not manually or automatically checked for code quality, malware or content. This means that some of these addons might crash your game, steal or delete your data. Remember to screen each addon before using
</div>

[Untested Addons](addons/UnverifiedAddons.md)
