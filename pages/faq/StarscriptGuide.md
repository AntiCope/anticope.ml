---
layout: default
title: Starscript Guide
parent: Meteor FAQ
nav_order: 3
---

# Starscript
[Starscript](https://github.com/MeteorDevelopment/starscript) is the formatting language currently used in Discord Presence and .say command.  
Full syntax can be found [here](https://github.com/MeteorDevelopment/starscript/wiki).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Table of Contents</summary>

- [Variables](#variables)
  - [General](#general)
  - [Player](#player)
  - [Crosshair target](#crosshair-target)
  - [Server](#server)
- [Objects](#objects)
  - [Item](#item)
  - [Block](#block)
  - [Entity](#entity)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Variables
A list of standard variables can be found [here](https://github.com/MeteorDevelopment/starscript/wiki#standard-variables).

### General
- `version`: Meteor version.
- `mc_version`: Minecraft version.
- `fps`: Current FPS.

### Player
- `player`: Username.
- `player.health`: Player's health.
- `player.hunger`: Player's hunger.
- `player.speed`: Speed in blocks per second.
- `player.pos`: Player's position formatted as `X: 0 Y: 0 Z: 0`.
- `player.pos.x`: Player's X position.
- `player.pos.y`: Player's Y position.
- `player.pos.z`: Player's Z position.
- `player.yaw`: Player's yaw rotation.
- `player.pitch`: Player's pitch rotation.
- `player.hand`: Player’s main held item. See [Item](#item).
- `player.offhand`: Player’s offhand held item. See [Item](#item).
- `player.get_item(slot)`: Item in the specified slot. See [Item](#item).
- `player.count_items(id)`: Number of items in the entire inventory.

### Crosshair target
- `crosshair_target.type`: Either `miss`, `block` or `entity` string.
- `crosshair_target.value`: Either empty string, [Block](#block) or [Entity](#entity).

### Server
- `server`: Server name.
- `server.tps`: Server's TPS.
- `server.time`: Server's time formatted as `16:00`.
- `server.difficulty`: Server's difficulty.
- `server.player_count`: Server's player count.

## Objects
Various variables and functions can return more complex objects which fields can be accessed using `.`. An empty ` ` means the object iself and not accessing any field.

### Item
- ` `: Item's name formatted as `Stone 32x` or just `Stone` if count is 1.
- `name`: Item's name.
- `count`: Number of items.

### Block
- ` `: Block's name.
- `pos`: Block's position formatted as `X: 0 Y: 0 Z: 0`.
- `pos.x`: Block's X position.
- `pos.y`: Block's Y position.
- `pos.z`: Block's Z position.

### Entity
- ` `: Entity's name.
- `health`: Entity's health or 0 if the entitiy doesn't have health.
- `pos`: Entity's position formatted as `X: 0 Y: 0 Z: 0`.
- `pos.x`: Entity's X position.
- `pos.y`: Entity's Y position.
- `pos.z`: Entity's Z position.
