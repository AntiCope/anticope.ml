---
layout: default
title: NoteBot Guide
parent: Sub Pages
nav_order: 2
---

# NoteBot Guide

A guide on how to use notebot.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Table of Contents</summary>

- [Loading songs](#loading-songs)
- [Supported formats](#supported-formats)
- [Previewing](#previewing)
- [Playing](#playing)
- [Recording](#recording)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- I have no idea how the TOC thingy works, just adding this incase it does -->

## Loading songs

To load songs you need to put a file with supported format inside folder located in `.minecraft/meteor-client/notebot` *(Create it, if it doesn't exist)*.

## Supported formats

- Classic `.nbs` files <a href="https://www.stuffbydavid.com/mcnbs/format" class="btn fs-1">specification</a>
- OpenNBS v5 `.nbs` files  <a href="https://opennbs.org/songs" class="btn fs-1">song downloads</a> <a href="https://opennbs.org/nbs" class="btn fs-1">specification</a>
- .txt files using format `<tick>:<note>` <a href="https://github.com/BleachDrinker420/BH-resources/raw/main/notebot/songs.zip" class="btn fs-1">song downloads</a>

## Previewing

Before playing songs you can preview them. To preview a song you can either:
- Press the <kbd>Preview</kbd> button next to the song you want to preview
- Use the `.notebot preview <song>` command

## Playing

To play a song you can either:
-  place noteblocks around you in a 5 block radius
-  hold noteblocks in your hotbar and let the module do all the work

To start playing a song you can press the <kbd>Load</kbd> button next to the song you want to load or use the `.notebot play <song>` command

## Recording

You can also record in-game sound to play them back later.
1. Run `.notebot record start` to start recording
2. Stand next to some noteblocks
3. Run `.notebot record save <name>`

After that you will see your new recording inside the list of recordings
