---
title: "Raspberry Pi Zero OTG Mode"
subtitle: ""
description:
date: 2018-08-23T14:11:49+08:00
tags:
  - otg
  - stem
---

# Setting for OTG mode for pi zero
## Instruction

1. add the following text to `/boot/config.txt`
```sh
# Enable OTG mode
dtoverlay=dwc2
```

2. Save the config.txt file as plain text and then open up cmdline.txt After `rootwait` (the last word on the first line) add a space and then `modules-load=dwc2,g_ether`

3. Create an empty file named as `ssh.txt` in `/boot`

4. connect to your pi through ssh
``` sh
# default password is raspberry
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
  + [Ethernet Tweaks | Turning your Raspberry PI Zero into a USB Gadget | Adafruit Learning System](https://learn.adafruit.com/turning-your-raspberry-pi-zero-into-a-usb-gadget/ethernet-tweaks)
  + Enable internet sharing to pi

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
