# Meteor FAQs

A rewritten and more detailed FAQ page for those that find the [original FAQ](https://meteorclient.com/faq) page unhelpful.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Table of Contents</summary>

- [How do I use the client?](#how-do-i-use-the-client)
  - [How do I open the GUI?](#how-do-i-open-the-gui)
  - [How do I use the HUD?](#how-do-i-use-the-hud)
  - [How to prevent people noticing me use Meteor?](#how-to-prevent-people-noticing-me-use-meteor)
- [How to use meteor on 1.12.2/1.16.5/1.17 (older versions)](#how-to-use-meteor-on-11221165117-older-versions)
  - [I want to connect to an old server!](#i-want-to-connect-to-an-old-server)
  - [My other mods aren't on 1.17.1](#my-other-mods-arent-on-1171)
- [How to use Meteor with Optifine?](#how-to-use-meteor-with-optifine)
- [How to use Meteor with Baritone?](#how-to-use-meteor-with-baritone)
- [How to dupe with this client?](#how-to-dupe-with-this-client)
- [How to use notebot](#how-to-use-notebot)
  - [Loading songs](#loading-songs)
  - [Supported formats](#supported-formats)
  - [Previewing](#previewing)
  - [Playing](#playing)
  - [Recording](#recording)
- [Why can't I talk in the Meteor Discord?](#why-cant-i-talk-in-the-meteor-discord)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

*Click on the answers for more details.*

## How do I use the client?


### How do I open the GUI?

<details>
  <summary><kbd>Right Shift</kbd> (default)</summary>
  
  The default keybinding for opening the GUI is right shift, but you can change that in `pause menu > options > controls`.

  Inside the gui, you left click to toggle a module and right click to configure that module. 
</details>
  
### How do I use the HUD?

<details>
  <summary>Turn on the HUD Module</summary>
  
  - Activate the HUD Module in the render category.
  - Go to the HUD tab (the top of your screen)

  ![image](https://user-images.githubusercontent.com/72693226/129832108-683ea81a-028c-4d96-8419-4a5dfde5f527.png)

  - If the hud elements are red, that indicates that they are **off**. To toggle them simply left click and right click to configure (scale and other attributes).
</details>

### How to prevent people noticing me use Meteor?

<details>
  <summary>Stop cheating</summary>
  
  We **highly discourage** usage of Meteor on servers (such as hypixel) that forbid usage of utility clients like Meteor.
  Meteor is built for anarchy servers, where usage of utility clients like meteor and alike are allowed (and encouraged).

  If you insist, **nobody will help you in doing so**
</details>

## How to use meteor on 1.12.2/1.16.5/1.17 (older versions)


### I want to connect to an old server!

<details>
  <summary>Use multiconnect</summary>
  
  Your only choice is to use multiconnect as older versions of meteor are unsupported.
 
  Download [multiconnect](https://www.curseforge.com/minecraft/mc-mods/multiconnect) and put it in your mods folder alongside meteor.
  
  Your mods folder should look something like this
  
  ![image](https://user-images.githubusercontent.com/72693226/129830229-51108c71-ea20-4172-b5c5-f9102e021b8d.png)
  
  Launch fabric **for 1.17.1**.
  
  ![image](https://user-images.githubusercontent.com/72693226/129830462-b2167e40-1afd-4948-9c3e-fdb507bde839.png)
  
  **Don't launch fabric for an older version, that is not how multiconnect works.**
  
  </p>
  
  Multiconnect allows you to connect to older version servers (e.g. 1.12.2) while you are playing minecraft 1.17.1 with meteor.
</details>

### My other mods aren't on 1.17.1

<details>
  <summary>That is quite saddening.</summary>

  If that mod is sodium, you are one of the many who didn't know sodium is **already** on 1.17.1. 
  You can get it [here](https://modrinth.org/mod/sodium)

  Otherwise, sadly you can't use latest version of meteor. 
  Meteor relies on Circle CI, and storage on Circle CI isn't infinite. So older versions can't be kept. 
  We **highly discourage** usage of older versions as it lacks better code, features and bug fixes that newer versions offer.

  There exists an [archive](https://github.com/AntiCope/meteor-archive) of historic meteor versions, 
  however, if you wish to use it, be aware that **if you experience bugs or issues with it, no one will help you fix it**
</details>

## How to use Meteor with Optifine?

<details>
  <summary>You simply don't</summary>
  
  Optifine is and never will be supported by Meteor. We recommend using these instead,

  - [Sodium](https://modrinth.org/mod/sodium) | Performance improvements (better than Optifine)
  - [Lithium](https://www.curseforge.com/minecraft/mc-mods/lithium) | Server optimizations
  - [Phosphor](https://modrinth.com/mod/phosphor) | Lighting engine improvements

  More alternatives and the reason why its not supported [here](https://gist.github.com/LambdAurora/1f6a4a99af374ce500f250c6b42e8754).
  **We recommend you read [this](/MeteorAdditionals.md) list of Meteor Addons too**
</details>

## How to use Meteor with Baritone?

<details>
  <summary>Use the built-in baritone</summary>
  
  Meteor comes with Baritone built in, you don't need to download a standalone baritone.
  Baritone's default command prefix is `#` or you can use the Meteor command `.b`.
  You can view all of Baritone's commands [here](https://github.com/cabaletta/baritone/blob/master/USAGE.md) 
  and settings [here](https://baritone.leijurv.com/baritone/api/Settings.html).
</details>

## How to dupe with this client?

<details>
  <summary>Use meteor addons</summary>
  
  Finding dupes isn't an easy task. Public dupes get patched very quickly so alot of dupes are kept private.
  You can check out the duping section of [this](/MeteorAddons.md) list of Meteor Addons.
  Some might work, and some may not.
</details>

## How to use notebot

### Loading songs

<details>
  <summary>Insert notebot files into notebot folder</summary>

  To load songs you need to put a file with supported format inside folder located in `.minecraft/meteor-client/notebot` *(Create it, if it doesn't exist)*.

</details>

### Supported formats

<details>
  <summary>Classic Nbs, OpenNbs v5, .txt</summary>
  
  - Classic `.nbs` files <a href="https://www.stuffbydavid.com/mcnbs/format" class="btn fs-1">specification</a>
  - OpenNBS v5 `.nbs` files  <a href="https://opennbs.org/songs" class="btn fs-1">song downloads</a> <a href="https://opennbs.org/nbs" class="btn fs-1">specification</a>
  - .txt files using format `<tick>:<note>` <a href="https://github.com/BleachDrinker420/BH-resources/raw/main/notebot/songs.zip" class="btn fs-1">song downloads</a>

</details>

### Previewing

<details>
  <summary>Use the <kbd>Preview</kbd> button</summary>

Before playing songs you can preview them. To preview a song you can either:
- Press the <kbd>Preview</kbd> button next to the song you want to preview
- Use the `.notebot preview <song>` command

</details>

### Playing

<details>
  <summary><code>.notebot play</code></summary>

To play a song you can either:
-  place noteblocks around you in a 5 block radius
-  hold noteblocks in your hotbar and let the module do all the work

To start playing a song you can press the <kbd>Load</kbd> button next to the song you want to load or use the `.notebot play <song>` command

</details>

### Recording

<details>
  <summary><code>.notebot record</code></summary>

You can also record in-game sound to play them back later.
1. Run `.notebot record start` to start recording
2. Stand next to some noteblocks
3. Run `.notebot record save <name>`

After that you will see your new recording inside the list of recordings

</details>

## Why can't I talk in the Meteor Discord?

<details>
  <summary>Either you broke a rule or don't have an account</summary>
  
  You may have broken one of the rules in the [#rules](https://discord.com/channels/689197705683140636/816501672477720626/) channel 
  and have been muted by staff.

  If you did not break a rule, then [this](https://discord.com/channels/689197705683140636/689198722097348624/870066829622652989) might explain why.
  Due to the amount of users in the discord server increasing, public channels have been closed to only users who have roles. 

  You can get a role by creating an account [here](https://meteorclient.com/account).
</details>
