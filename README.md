# Plex WebUI Light

Changes the Plex Media Servers Web UI to a more lighter experience with an Chrome/Opera extension.

It uses a small Javascript to inject the CSS file into the header because of the way Chrome/Opera handles CSS as content scripts. Otherwise all rules had to have ``!important`` which isn't very usable in this scenario.

Let's just say I got a bit bored of the darkness.

## Usage

### Requirements

Tested on Plex Media Server 0.9.15.6 with Chrome 48.0.2564.116+ and Opera 35.0.2066.92+ on Windows 10.

I currently don't own a Plex Pass so specific sections for Plex Pass might look weird.

### Installation

At the current state you need to use it as an *uncompressed extension in Chrome or Opera*. If you don't know how, this extension is probably not for you just yet.

## State of the extension

The list contains the parts that are done to the best of my knowledge.

* Channels
* Dropdowns
* Help
* Home
* Logs
* Messages
* Modals
* Play
* Sections
* Settings
* Status
* Playlists

### Needing attention

Mostly general check for consistency (which it probably is not at the moment).

## Disclaimer

Plex is a registered trademark, this extension is not affiliated with Plex.
