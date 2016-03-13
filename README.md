# Plex WebUI Light

Changes the Plex Media Servers Web UI to a more lighter experience with an Chrome extension.

It uses a small Javascript to inject the CSS file into the header because of the way Chrome handles CSS as content scripts. Otherwise all rules had to have ``!important`` which isn't very usable in this scenario.

Let's just say I got a bit bored of the darkness.

## Usage

### Requirements

Tested on Plex Media Server 0.9.15.6 with Chrome 48.0.2564.116+ on Windows 10.
You also need [Open Sans Light](https://www.google.com/fonts#QuickUsePlace:quickUse) installed on your machine since it isn't used of the bat with the servers and not currently included in my build either.

I currently don't own a Plex Pass so specific sections for Plex Pass might look weird.

### Installation

At the current state you need to use it as an *uncompressed extension in Chrome*. If you don't know how, this extension is probably not for you just yet.

## Fixed

The list contains the parts that are done to the best of my knowledge.

* Channels
* Dropdowns
* Home
* Sections
* Status
* Playlists

## Partially fixed

Needs some fixer-upers here and there.

* Help
* Modals
* Messages
* Settings

## Remaining

* Play

## Disclaimer

Plex is a registered trademark, this extension is not affiliated with Plex.
