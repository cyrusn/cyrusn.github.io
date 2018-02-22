---
title: Download YouTube in batch
date: '2017-04-27 23:14:04'
---

# Table of Content

<!-- MarkdownTOC -->

- [`youtube-dl`](#youtube-dl)
- [Homebrew - The missing package manager for macOS](#homebrew)
- [How to navigate in terminal?](#how-to-navigate-in-terminal)
  - [Example:](#example)
- [Using the `youtube-dl` command](#using-the-youtube-dl-command)
- [Conclusion](#conclusion)
- [TL;DR](#tldr)
  - [Useful options](#useful-options)

<!-- /MarkdownTOC -->


# `youtube-dl`
Sometime I have to download many YouTube videos or songs, if you are using mac or linux,
`youtube-dl` would be a very handy and useful tool to get the job done. `youtube-dl` 
is a command-line interface application which the plain text environment may deter you to
give a try, but once you can get used to it, you will find that using command-line 
application somehow are much easier than GUI  (Graphical User Interface) application.
As I am a mac user, so this tutorial are only use mac’s command-line as an example.

# [Homebrew](https://brew.sh/) <small>- The missing package manager for macOS</small>{#homebrew}
Unlike linux, macOS didn’t ship with package manager but you can download it, many 
command-line apps can be downloaded and installed through `homebrew`.

Installation of `homebrew` is easy, first open your `spotlight` in macOS and search for
`terminal` app, copy and paste the following code in `terminal` app and press `enter`, then wait for the installation finish.

``` sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

To test the installation completed successfully, you may type `brew -v` in terminal which will
show the version of `homebrew` you just downloaded, keeping in latest release is important, 
you may use the command `brew update` to update to the latest version and also the
latest `formulaes` (the latest version of applications which you can download through 
`homebrew`), you may also use `brew -help` to list the homebrew commands.

Once you download and installed `homebrew`, next we will use `homebrew` to download `youtube-dl`
for our goal.

Using `brew search` command to see if you can download `youtube-dl`, once you success, 
the terminal will return the success message (a ✔ next to `youtube-dl`).

``` sh
brew search youtube-dl
```

Next, you can install `youtube-dl` by using `brew install` command.

``` sh
brew install youtube-dl
```

# How to navigate in terminal?

Before we move to the next step, we should get a bit familiar with the command-line 
environment first, I would like to introduce 3 simple commands first to make you feel 
better to move on to the next stage.

- `ls` are used to list all files in your current folder.
- `cd` command mean change directory, you can navigate to folder by typing `cd FOLDER_NAME`,
we often use this command together with `ls`.
- `open` are used to open the files or folder, let’s say you want to open the current location in 
macOS Finder App, then you can type `open .` the dot notation after open means current location.

## Example:
type `cd ~` to go to HOME directory then type `ls` to list all files and folder in your
HOME directory.

```
Documents    Dropbox     Music     Public    Applications
Desktop      Downloads   Movies    Pictures
```

you can go to your Desktop folder by this command `cd` Desktop and open Desktop in Finder 
by `open .` .

To simply the actions, you can use `cd ~/Desktop`, which have exactly same result to 
the following commands.

``` sh
cd ~
cd Desktop  
```

# Using the `youtube-dl` command
Now, let’s move on to youtube-dl command, assuming that you would like to download a video
from YouTube, i.e. https://www.youtube.com/watch?v=JNEnzNHTkd8, then you just have to type the 
link followed by `youtube-dl` command, in case you would like to download the video to your 
desktop, then you can use cd command to go to desktop directory first, like this.

``` sh
cd ~/Desktop
youtube-dl https://www.youtube.com/watch?v=JNEnzNHTkd8
```

In case you just want to grab the audio output from a video, then you can flag the 
`--extract-audio` and use `--audio-format=FORMAT_YOU_WANT`, here is the example.

``` sh
youtube-dl --extract-audio --audio-format=m4a  https://www.youtube.com/watch\?v\=JNEnzNHTkd8
```

# Conclusion
Today I introduced several command-line commands, first, we have `cd` command to change the 
directory, `ls` command to list all the files in current directory, `open .` command to open 
current directory, besides, after install `homebrew` and `youtube-dl`, you can download YouTube
video or audio source just through your finger tips.

# TL;DR
If you want to download YouTube Video in batch, you can use the snippet below.

``` sh
cat << EOF | xargs -I@ youtube-dl https://www.youtube.com/watch?v=@
YouTubeVideoID-1
YouTubeVideoID-2
YouTubeVideoID-3
EOF
```

## Useful options

- `--extract-audio` for download audio only
- `--audio-format mp3` choose the audio format
- `--audio-quality 2` set the audio quality, 0(best)-9(worst), (default 5)

