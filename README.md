# Plex WebUI Light

Changes the Plex Media Servers Web UI to a more lighter experience with an Chrome/Opera extension. 

It uses a small Javascript to inject the CSS file into the header because of the way Chrome/Opera handles CSS as content scripts. Otherwise most rules would have to have ``!important`` added, which isn't very usable in this scenario.

I currently don't own a Plex Pass so specific sections for Plex Pass might look weird.

Let's just say I got a bit bored of the darkness.

## Usage

### Requirements

Tested on Plex Media Server 0.9.15.6 with Chrome 48.0.2564.116+ and Opera 35.0.2066.92+ on Windows 10.

### Installation

At the current state you need to use it as an *uncompressed extension in Chrome or Opera*. If you don't know how, this extension is probably not for you just yet.

## Why not use Stylish instead?

Why not [Stylish](https://userstyles.org/) rules you ask? Well, let's just say I felt more comfortable with this approach and it's easier to maintain in my book. 

## License

Released under the [Apache 2.0 license](http://www.apache.org/licenses/LICENSE-2.0.html).

## Disclaimer

Plex is a registered trademark, this extension is not affiliated with Plex.
