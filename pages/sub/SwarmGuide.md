---
layout: default
title: Swarm Guide
parent: Sub Pages
nav_order: 1
---

# Swarm Guide

Swarm is a module that essentially allows multiple instances of Meteor to be controlled by one instance. This allows large tasks to be completed quickly and efficiently by utilising many features of Baritone.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Table of Contents</summary>

- [Setting up a host server](#setting-up-a-host-server)
- [Connecting workers](#connecting-workers)
- [Controlling workers](#controlling-workers)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Setting up a host server

1. To set up a Swarm Host, first open the Swarm module settings from Meteor's GUI and select "Host" under the mode setting (you must be in a world/server or this won't work).
2. You can optionally choose a port for the host server to run on, but in most cases you wont need to change this.
3. Now just click the "Start" button and your host server is ready to go!

## Connecting workers

1. To connect a worker to your host server, open another instance of Minecraft (running Meteor) and join the world/server you wish for your workers to run on.
2. Next, make sure the Swarm module is enabled, open the settings page from the GUI and select "Worker" from the mode setting.
3. Now enter the ip and port that the host server is running on, in most cases these can be left default, unless you changed the port your server is running on or the host server is not running on the same network as you.
4. Once you have configured your connection details, click the "Start" button and you should see a message saying you have successfully connected to the host server.
5. Repeat this for any other worker accounts you want to add to your Swarm session.

## Controlling workers

To control workers, just use the .swarm command from the host instance, this will transmit any commands you enter to all of the workers connected to your session.