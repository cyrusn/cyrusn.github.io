---
date: 2017-09-19T09:44:09+08:00
title: "Raspberry Pi"
tags:
  - iot
  - stem
  - linux
  - raspberry
  - pi
---

<!-- MarkdownTOC autolink=true -->

- [Setting](#setting)
  - [Setup for a new Pi 3 model B](#setup-for-a-new-pi-3-model-b)
  - [Setting for OTG mode](#setting-for-otg-mode)
  - [Add ssh public key](#add-ssh-public-key)
- [Recommanded software packages](#recommanded-software-packages)
  - [Installation](#installation)
  - [Configuration of `zsh`](#configuration-of-zsh)
    - [Install `oh-my-zsh` and my custom theme](#install-oh-my-zsh-and-my-custom-theme)
    - [Config `.zshrc`](#config-zshrc)
- [Autostart](#autostart)
- [Pin](#pin)
- [Examples](#examples)
- [Links](#links)
- [Some Projects](#some-projects)
- [Some thoughts](#some-thoughts)
- [Setting brightness of Touch led](#setting-brightness-of-touch-led)
- [Sensors](#sensors)
- [Others](#others)
  - [Using Raspberry Pi to control servo](#using-raspberry-pi-to-control-servo)
- [Sensor HAT](#sensor-hat)
- [ADC \(Analog to Digital Convertor\)](#adc-analog-to-digital-convertor)

<!-- /MarkdownTOC -->


# Setting
- [Raspberry Pi Documentation][@01]
- [VNC (Virtual Network Computing) - Raspberry Pi Documentation][@02]
- [SSH (Secure Shell) - Raspberry Pi Documentation][@03]
- [Passwordless SSH access - Raspberry Pi Documentation][@04]
- [Ethernet Gadget | Turning your Raspberry PI Zero into a USB Gadget | Adafruit Learning System][@05]

## Setup for a new Pi 3 model B
First, you have to follow the installation guide written by raspberrypi.org, 
here is the [link][@06]. After installation of Raspbian OS, the pi is basically
set, run `sudo apt-get upgrade` in terminal to keep all availabe packages and
OS up to date. See [Recommanded Software Packages](#recommanded-software-packages) session

## Setting for OTG mode

1. add the following text to `/boot/config.txt`
```sh
# Enable OTG mode
dtoverlay=dwc2
```

2. Save the config.txt file as plain text and then open up cmdline.txt After `rootwait` (the last word on the first line) add a space and then `modules-load=dwc2,g_ether`

3. Create an empty file named as `ssh.txt` in `/boot`

4. connect to your pi through ssh
``` sh
# default password is raspberrypi
ssh pi@raspberrypi.local
```

5. Setup for locale, add following text in `/etc/default/locale`
```sh
LC_CTYPE=en_US.UTF-8
LC_ALL=en_US.UTF-8
```

6. Change password, Setup localization, interface option, network naming ...
  + using command `sudo raspi-config` to setup raspberry pi zero.

7. Setup wifi sharing, copy the following code to `/etc/network/interfaces`
``` sh
auto lo usb0
allow-hotplug usb0
iface usb0 inet manual
```
  + [Ethernet Tweaks | Turning your Raspberry PI Zero into a USB Gadget | Adafruit Learning System][@07]

8. Connect wifi without using `sudo raspi-config` command
Since the `/boot` partition is accessible by any computer with an SD card reader,
wifi configuration is now much simpler.

A typical wpa_supplicant.conf file is:

```sh
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=«your_ISO-3166-1_two-letter_country_code»

network={
    ssid="«your_SSID»"
    psk="«your_PSK»"
    key_mgmt=WPA-PSK
}
```

## Add ssh public key
- `mkdir ~/.ssh & cd ~/.ssh & touch authorized_keys`
- create `authorized_keys` file
- paste the ssh public key to `authorized_keys` (mostly the key store in `~/.ssh/id_rsa.pub` )

# Recommanded software packages
Before the installation, first run the following command to update and upgrade the
packages and OS

```sh
sudo apt-get update
sudo apt-get upgrade
```

## Installation
Here is the list of useful software packages suggested to install to your PI

- vim
- git
- zsh

```sh
sudo apt-get install vim zsh git
```

## Configuration of `zsh` 

### Install `oh-my-zsh` and my custom theme

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

```sh
mkdir -p .zsh-custom/themes
cd .zsh-custom/themes
curl -O https://raw.githubusercontent.com/cyrusn/cyrusn-terminal-setting/master/zsh-custom/themes/cyrusn.zsh-theme
```

### Config `.zshrc`

``` sh
ZSH_THEME="cyrusn"
export UPDATE_ZSH_DAYS=13
plugins=(
  git
  z
)

ZSH_CUSTOM=/$HOME/.zsh-custom

alias ls='ls --classify -ahNF --group-directories-first --color=auto --time-style=+"%e/%m/%y %T" --group-directories-first'
```


# Autostart
Use `sudo crontab -e` to set autostart programme


```sh
@reboot python /home/pi/MyScript.py &
```

This tells Cron that every boot (or reboot or start-up) we want to run Python with the script MyScript.py.
The “&” at the end of the line means the command is run in the background and it won’t stop the system booting up as before.

To kill the job

```sh
ps aux | grep /home/pi/MyScript.py
```

`sudo kill pid_show_in_ps`

- [Running A Python Script At Boot Using Cron][@08]


# Pin
![pin][@09]
![pin2][@10]


- [GPIO: Models A+, B+, Raspberry Pi 2 B and Raspberry Pi 3 B - Raspberry Pi Documentation][@11]
- [Sense HAT at Raspberry Pi GPIO Pinout][@12]
- [Raspberry Pi GPIO Pinout][@13]

# Examples
- [Project 1: GPIO Led using Python][@14]
- [Intro to Raspberry Pi GPIO - YouTube][@15]
- [Raspberry Pi For Beginners: LED Connections, Bread-boards, and Programming - YouTube][@16]
- [ModMyPi | HC-SR04 Ultrasonic Range Sensor on the Raspberry Pi][@17]

# Links
- [How to make a DIY Raspberry Pi Arcade Cabinet! - YouTube][@18]
- [PSP Raspberry PI 3 HDMI LCD RetroPie PSPi - YouTube][@19]
- [淺談電路板　micro:bit vs Arduino vs Raspberry Pi淺談電路板　micro:bit vs Arduino vs Raspberry Pi - PCM][@20]
- [USB (DWC) Enumeration ? - Raspberry Pi Forums][@21]
- [Simple guide for setting up OTG modes on the Raspberry Pi Zero][@22]
- [Raspberry Pi – Basic Setup without Monitor and Keyboard (Headless Setup)][@23]
- [5 Amazing Gadgets Built On Raspberry Pi - YouTube][@24]

# Some Projects
- [Projects | Raspberry Pi Projects][@25]
- [Top 10 Coolest Raspberry Pi Projects - YouTube][@26]
- [Top 10 Raspberry Pi Projects for Beginners][@27]
- [DIY Raspberry Pi Indoor Outdoor Webcam: 9 Steps (with Picturesres)][@28]
- [Daylight IR photography - Raspberry Pi Forums][@29]
- [Plug and Play IoT with the Pi Sense HAT][@30]
- [The Simplest Way to Build A Raspberry Pi-Powered Amazon Echo][@31]
- [Raspberry Pi · alexa/alexa-avs-sample-app Wiki][@32]
- [Control Raspberry Pi GPIO With Amazon Echo and Python: 11 Steps (with Pictures)][@33]
- [MagicMirror²][@34]
- [Raspberry Pi Based Line Follower Robot with Python Code](https://circuitdigest.com/microcontroller-projects/raspberry-pi-line-follower-robot)
- [RetroPie](/note/retropie)


# Some thoughts
"Blinking LED" is just like writing an "hello world" programme in physical computing.

# Setting brightness of Touch led
- [Raspberry Pi 7” Touchscreen Display | element14 | Raspberry Pi Accessories][@35]

``` sh
# and to turn it off:
echo 0 > /sys/class/backlight/rpi_backlight/bl_power
```

``` sh
# the brightness can be adjusted using:
echo 1 > /sys/class/backlight/rpi_backlight/bl_power
```

``` sh
# where n is some value between 0 and 255.
echo n > /sys/class/backlight/rpi_backlight/brightness
```

# Sensors
![sensors][@36]

``` Python
import RPi.GPIO as GPIO
import time
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.setup(11, GPIO.IN)         #Read output from PIR motion sensor
GPIO.setup(18, GPIO.OUT)         #LED output pin
while True:
       i=GPIO.input(11)
       if i==0:                 #When output from motion sensor is LOW
             print "No intruders",i
             GPIO.output(18, 0)  #Turn OFF LED
             time.sleep(0.1)
       elif i==1:               #When output from motion sensor is HIGH
             print "Intruder detected",i
             GPIO.output(18, 1)  #Turn ON LED
             time.sleep(0.1)
```

# Others
- [Resistor Color Codes | Color Codes | Electronics Textbook][@37]

## Using Raspberry Pi to control servo
- Usng Pulse modulation to control a servo
- [Servo control using Raspberry Pi. - YouTube][@38]
- [RPi.GPIO 0.5.2a now has software PWM – How to use it – RasPi.TV][@39]
- [Pulse Width Modulation Used for Motor Control][@40]

# Sensor HAT
- [Home - Sense HAT][@41]
- [Sense HAT - Raspberry Pi Documentation][@42]
- [Getting started with the Sense HAT | Raspberry Pi Projects][@43]

# ADC (Analog to Digital Convertor)
- [MCP3008 | Raspberry Pi Analog to Digital Converters | Adafruit Learning System][@44]

<!-- reference links -->

[@01]: https://www.raspberrypi.org/documentation/
[@02]: https://www.raspberrypi.org/documentation/remote-access/vnc/
[@03]: https://www.raspberrypi.org/documentation/remote-access/ssh/
[@04]: https://www.raspberrypi.org/documentation/remote-access/ssh/passwordless.md
[@05]: https://learn.adafruit.com/turning-your-raspberry-pi-zero-into-a-usb-gadget/ethernet-gadget
[@06]: https://www.raspberrypi.org/documentation/installation/installing-images/README.md
[@07]: https://learn.adafruit.com/turning-your-raspberry-pi-zero-into-a-usb-gadget/ethernet-tweaks
[@08]: https://www.raspberrypi-spy.co.uk/2013/07/running-a-python-script-at-boot-using-cron/
[@09]: https://cdn.shopify.com/s/files/1/0176/3274/files/assembly5_large.png?9809653568685397441
[@10]: https://www.raspberrypi.org/documentation/usage/gpio-plus-and-raspi2/images/gpio-numbers-pi2.png
[@11]: https://www.raspberrypi.org/documentation/usage/gpio-plus-and-raspi2/README.md
[@12]: https://pinout.xyz/pinout/sense_hat
[@13]: https://pinout.xyz/
[@14]: http://www.thirdeyevis.com/pi-page-2.php
[@15]: https://www.youtube.com/watch?v=igvDgUnh8vg
[@16]: https://www.youtube.com/watch?v=eObSqbe9aqU
[@17]: https://www.modmypi.com/blog/hc-sr04-ultrasonic-range-sensor-on-the-raspberry-pi
[@18]: https://www.youtube.com/watch?v=NUmrwvQ0reI
[@19]: https://www.youtube.com/watch?v=Pfc031OlED8
[@20]: https://www.pcmarket.com.hk/2017/09/15/%E6%B7%BA%E8%AB%87%E9%9B%BB%E8%B7%AF%E6%9D%BF-microbit-vs-arduino-vs-raspberry-pi/
[@21]: https://www.raspberrypi.org/forums/viewtopic.php?f=72&t=61949
[@22]: https://gist.github.com/gbaman/50b6cca61dd1c3f88f41
[@23]: https://www.electronicshub.org/raspberry-pi-basic-setup-without-monitor-keyboard-headless-setup/
[@24]: https://www.youtube.com/watch?v=z_CbNqfa84Y
[@25]: https://projects.raspberrypi.org/en/
[@26]: https://www.youtube.com/watch?v=9YhTOUu06EY
[@27]: https://lifehacker.com/top-10-raspberry-pi-projects-for-beginners-1791002723
[@28]: http://www.instructables.com/id/DIY-Raspberry-Pi-Indoor-Outdoor-Webcam/?utm_source=newsletter&utm_medium=email
[@29]: https://www.raspberrypi.org/forums/viewtopic.php?f=43&t=60829
[@30]: https://www.rs-online.com/designspark/plug-and-play-iot-with-the-pi-sense-hat
[@31]: https://lifehacker.com/the-simplest-way-to-build-a-raspberry-pi-powered-amazon-1794218212
[@32]: https://github.com/alexa/alexa-avs-sample-app/wiki/Raspberry-Pi
[@33]: http://www.instructables.com/id/Control-Raspberry-Pi-GPIO-With-Amazon-Echo-and-Pyt/
[@34]: https://magicmirror.builders/
[@35]: https://www.element14.com/community/docs/DOC-78156/l/raspberry-pi-7-touchscreen-display
[@36]: https://www.jakartanotebook.com/images/products/68/181/22325/1/raspberry-pi-3-and-raspberry-pi-2-model-b-16-kinds-of-sensor-5.jpg
[@37]: http://www.instructables.com/id/Raspberry-Pi-Launch-Python-script-on-startup/
[@38]: https://www.youtube.com/watch?v=N5QmZ92uvUo
[@39]: http://raspi.tv/2013/rpi-gpio-0-5-2a-now-has-software-pwm-how-to-use-it
[@40]: https://www.electronics-tutorials.ws/blog/pulse-width-modulation.html
[@41]: https://pythonhosted.org/sense-hat/
[@42]: https://www.raspberrypi.org/documentation/hardware/sense-hat/
[@43]: https://projects.raspberrypi.org/en/projects/getting-started-with-the-sense-hat
[@44]: https://learn.adafruit.com/raspberry-pi-analog-to-digital-converters/mcp3008
