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
- locale
- time zone
- keyboard layout (US Internation)
- wifi country

# Change username

1. set root password `sudo passwd root`
2. set boot option to ***console*** in `sudo raspi-config`
3. login with root user and password you just set in step 1
4. `usermod -l newname pi`
5. `usermod -m -d /home/newname newname` <- rename home folder
6. set password for newname `sudo passwd newname`
7. set boot option to *Desktop (auto login)* in `sudo raspi-config`
8. `reboot`

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

<!-- reference links -->

[@1]: https://www.raspberrypi.org/downloads/raspbian/
[@2]: https://etcher.io/?ref=etcher_update
[@3]: https://www.element14.com/community/docs/DOC-78156/l/raspberry-pi-7-touchscreen-display
