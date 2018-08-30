---
title: "Raspberry Pi Setup"
subtitle: "A guide for setup a new raspberry pi"
description:
toc: true
katex: false
mermaid: false
abcjs: false
date: 2018-06-26T21:10:39+08:00
tags:
  - stem
  - raspberry pi
  - linux
---

# Setup for a new Pi

Download the latest version of [Raspbian Stretch][@1] and download [Etcher app][@2] to flash the raspbian image to SD card. Plug the flashed SD card to your raspberry and power it on.

# Update and upgrade

Open terminal app and run the following command to update and upgrade the packages and OS.

```sh
sudo apt-get update
sudo apt-get upgrade
```

# Config the localisation options

Run `sudo raspi-config` for changing the following settings.
- locale (zh-HK UTF, english UTF)
- time zone
- keyboard layout (English US)
- wifi country

# Change username

``` sh
# add user
sudo adduser username

# add user to sudo group
sudo adduser username sudo

# logout
sudo reboot

# ... login with new username

# remove pi user and its home folder
sudo deluser --remove-home pi
```

# Installation of packages

Here is the list of useful packages suggested to install to your pi

- vim
- git
- zsh

```sh
sudo apt-get install vim zsh git
```

# Basic `zsh` config

## Install `oh-my-zsh`

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
## Custom theme

```sh
mkdir -p ~/.zsh-custom/themes && cd "$_"
curl -O https://raw.githubusercontent.com/cyrusn/cyrusn-terminal-setting/master/zsh-custom/themes/cyrusn.zsh-theme 
```

## Setting in `.zshrc`

``` sh
ZSH_THEME="cyrusn"
export UPDATE_ZSH_DAYS=13
plugins=(
  git
  z
)

ZSH_CUSTOM=/$HOME/.zsh-custom

alias ls='ls --classify -ahNF --group-directories-first --color=auto --time-style=+"%e/%m/%y %T"'
```

# Setting for Touch led

## Rotation

```sh
# lcd_rotate=0 Normal 
# lcd_rotate=1 90 degrees 
# lcd_rotate=2 180 degrees 
# lcd_rotate=3 270 degrees 
# ask sh to run the string as programme
sudo sh -c 'echo "lcd_rotate=2" >> /boot/config.txt'

# or rotate for hdmi display
sudo sh -c 'echo "display_rotate=2" >> /boot/config.txt'
```

## brightness 

``` sh
# turn it on
echo 0 > /sys/class/backlight/rpi_backlight/bl_power

# and off
echo 1 > /sys/class/backlight/rpi_backlight/bl_power

# where n is some value between 0 and 255
echo n > /sys/class/backlight/rpi_backlight/brightness
```

# Using openbox

Using openbox to maximise and undecorate the application window by default.

Use text editor to open `~/.config/openbox/lxde-pi-rc.xml`. Scroll to bottom and add the following code within `<applications></applications>` tag.

``` xml
<!-- 
  This is an example to let LXTerminal open with undecorated mode
  and maximize the screen by default
-->
<application name='lxterminal'>
  <decor>no</decor>
  <maximized>yes</maximized>
</application>
```

# Install chinese input method

- [The Cangjie Input Method][@3]

``` sh
sudo apt-get install scim scim-gtk2-immodule scim-tables-zh
```

Now you can run scim-setup and configure SCIM after reboot.

# Install the text editor

- [How to install Mu on a Raspberry Pi][@5]

# References

<!-- reference links -->

[@1]: https://www.raspberrypi.org/downloads/raspbian/
[@2]: https://etcher.io/?ref=etcher_update
[@3]: http://www.robos.org/sections/chinese/cangjie.html#install
[@4]: https://medium.com/@melzoghbi/install-visual-studio-code-on-raspbian-eedc566c616d
[@5]: https://codewith.mu/en/howto/install_raspberry_pi
