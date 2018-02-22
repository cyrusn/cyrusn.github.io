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

<!-- MarkdownTOC -->

- [Setting](#setting)
  - [Setting for OTG mode](#setting-for-otg-mode)
  - [Add ssh public key](#add-ssh-public-key)
  - [Update and install useful command](#update-and-install-useful-command)
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
- [Sensor HAT](#sensor-hat)
- [ADC \(Analog to Digital Convertor\)](#adc-analog-to-digital-convertor)

<!-- /MarkdownTOC -->

# Setting
- [Raspberry Pi Documentation][@01]
- [VNC (Virtual Network Computing) - Raspberry Pi Documentation][@02]
- [SSH (Secure Shell) - Raspberry Pi Documentation][@03]
- [Passwordless SSH access - Raspberry Pi Documentation][@04]
- [Ethernet Gadget | Turning your Raspberry PI Zero into a USB Gadget | Adafruit Learning System][@05]

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
  + [Ethernet Tweaks | Turning your Raspberry PI Zero into a USB Gadget | Adafruit Learning System][@06]

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

## Update and install useful command

```sh
sudo apt-get update
sudo apt-get upgrade

sudo apt-get install vim zsh git
```

## Install `oh-my-zsh` and my custom theme

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

```sh
mkdir -p .zsh-custom/themes
cd .zsh-custom/themes
curl -O https://raw.githubusercontent.com/cyrusn/cyrusn-terminal-setting/master/zsh-custom/themes/cyrusn.zsh-theme
```

## Config `.zshrc`

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

- [Running A Python Script At Boot Using Cron][@07]


# Pin
![pin][@08]
![pin2][@09]


- [GPIO: Models A+, B+, Raspberry Pi 2 B and Raspberry Pi 3 B - Raspberry Pi Documentation][@10]
- [Sense HAT at Raspberry Pi GPIO Pinout][@11]
- [Raspberry Pi GPIO Pinout][@12]

# Examples
- [Project 1: GPIO Led using Python][@13]
- [Intro to Raspberry Pi GPIO - YouTube][@14]
- [Raspberry Pi For Beginners: LED Connections, Bread-boards, and Programming - YouTube][@15]
- [ModMyPi | HC-SR04 Ultrasonic Range Sensor on the Raspberry Pi][@16]

# Links
- [How to make a DIY Raspberry Pi Arcade Cabinet! - YouTube][@17]
- [PSP Raspberry PI 3 HDMI LCD RetroPie PSPi - YouTube][@18]
- [淺談電路板　micro:bit vs Arduino vs Raspberry Pi淺談電路板　micro:bit vs Arduino vs Raspberry Pi - PCM][@19]
- [USB (DWC) Enumeration ? - Raspberry Pi Forums][@20]
- [Simple guide for setting up OTG modes on the Raspberry Pi Zero][@21]
- [Raspberry Pi – Basic Setup without Monitor and Keyboard (Headless Setup)][@22]
- [5 Amazing Gadgets Built On Raspberry Pi - YouTube][@23]

# Some Projects
- [Projects | Raspberry Pi Projects][@24]
- [Top 10 Coolest Raspberry Pi Projects - YouTube][@25]
- [Top 10 Raspberry Pi Projects for Beginners][@26]
- [DIY Raspberry Pi Indoor Outdoor Webcam: 9 Steps (with Pictures)][@27]
- [Daylight IR photography - Raspberry Pi Forums][@28]
- [Plug and Play IoT with the Pi Sense HAT][@29]
- [The Simplest Way to Build A Raspberry Pi-Powered Amazon Echo][@30]
- [Raspberry Pi · alexa/alexa-avs-sample-app Wiki][@31]
- [Control Raspberry Pi GPIO With Amazon Echo and Python: 11 Steps (with Pictures)][@32]
- [MagicMirror²][@33]

# Some thoughts
"Blinking LED" is just like writing an "hello world" programme in physical computing.

# Setting brightness of Touch led
- [Raspberry Pi 7” Touchscreen Display | element14 | Raspberry Pi Accessories][@34]

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
![sensors][@35]

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
- [Resistor Color Codes | Color Codes | Electronics Textbook][@36]

# Sensor HAT
- [Home - Sense HAT][@37]
- [Sense HAT - Raspberry Pi Documentation][@38]
- [Getting started with the Sense HAT | Raspberry Pi Projects][@39]

# ADC (Analog to Digital Convertor)
- [MCP3008 | Raspberry Pi Analog to Digital Converters | Adafruit Learning System][@40]

<!-- reference links -->

[@01]: https://www.raspberrypi.org/documentation/
[@02]: https://www.raspberrypi.org/documentation/remote-access/vnc/
[@03]: https://www.raspberrypi.org/documentation/remote-access/ssh/
[@04]: https://www.raspberrypi.org/documentation/remote-access/ssh/passwordless.md
[@05]: https://learn.adafruit.com/turning-your-raspberry-pi-zero-into-a-usb-gadget/ethernet-gadget
[@06]: https://learn.adafruit.com/turning-your-raspberry-pi-zero-into-a-usb-gadget/ethernet-tweaks
[@07]: https://www.raspberrypi-spy.co.uk/2013/07/running-a-python-script-at-boot-using-cron/
[@08]: https://cdn.shopify.com/s/files/1/0176/3274/files/assembly5_large.png?9809653568685397441
[@09]: https://www.raspberrypi.org/documentation/usage/gpio-plus-and-raspi2/images/gpio-numbers-pi2.png
[@10]: https://www.raspberrypi.org/documentation/usage/gpio-plus-and-raspi2/README.md
[@11]: https://pinout.xyz/pinout/sense_hat
[@12]: https://pinout.xyz/
[@13]: http://www.thirdeyevis.com/pi-page-2.php
[@14]: https://www.youtube.com/watch?v=igvDgUnh8vg
[@15]: https://www.youtube.com/watch?v=eObSqbe9aqU
[@16]: https://www.modmypi.com/blog/hc-sr04-ultrasonic-range-sensor-on-the-raspberry-pi
[@17]: https://www.youtube.com/watch?v=NUmrwvQ0reI
[@18]: https://www.youtube.com/watch?v=Pfc031OlED8
[@19]: https://www.pcmarket.com.hk/2017/09/15/%E6%B7%BA%E8%AB%87%E9%9B%BB%E8%B7%AF%E6%9D%BF-microbit-vs-arduino-vs-raspberry-pi/
[@20]: https://www.raspberrypi.org/forums/viewtopic.php?f=72&t=61949
[@21]: https://gist.github.com/gbaman/50b6cca61dd1c3f88f41
[@22]: https://www.electronicshub.org/raspberry-pi-basic-setup-without-monitor-keyboard-headless-setup/
[@23]: https://www.youtube.com/watch?v=z_CbNqfa84Y
[@24]: https://projects.raspberrypi.org/en/
[@25]: https://www.youtube.com/watch?v=9YhTOUu06EY
[@26]: https://lifehacker.com/top-10-raspberry-pi-projects-for-beginners-1791002723
[@27]: http://www.instructables.com/id/DIY-Raspberry-Pi-Indoor-Outdoor-Webcam/?utm_source=newsletter&utm_medium=email
[@28]: https://www.raspberrypi.org/forums/viewtopic.php?f=43&t=60829
[@29]: https://www.rs-online.com/designspark/plug-and-play-iot-with-the-pi-sense-hat
[@30]: https://lifehacker.com/the-simplest-way-to-build-a-raspberry-pi-powered-amazon-1794218212
[@31]: https://github.com/alexa/alexa-avs-sample-app/wiki/Raspberry-Pi
[@32]: http://www.instructables.com/id/Control-Raspberry-Pi-GPIO-With-Amazon-Echo-and-Pyt/
[@33]: https://magicmirror.builders/
[@34]: https://www.element14.com/community/docs/DOC-78156/l/raspberry-pi-7-touchscreen-display
[@35]: https://www.jakartanotebook.com/images/products/68/181/22325/1/raspberry-pi-3-and-raspberry-pi-2-model-b-16-kinds-of-sensor-5.jpg
[@36]: http://www.instructables.com/id/Raspberry-Pi-Launch-Python-script-on-startup/
[@37]: https://pythonhosted.org/sense-hat/
[@38]: https://www.raspberrypi.org/documentation/hardware/sense-hat/
[@39]: https://projects.raspberrypi.org/en/projects/getting-started-with-the-sense-hat
[@40]: https://learn.adafruit.com/raspberry-pi-analog-to-digital-converters/mcp3008
