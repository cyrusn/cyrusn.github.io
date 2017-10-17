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
- [Links](#links)
- [Pin](#pin)
- [Examples](#examples)
- [Some thoughts](#some-thoughts)
- [Setting brightness of Touch led](#setting-brightness-of-touch-led)
- [Sensors](#sensors)
- [Others](#others)

<!-- /MarkdownTOC -->

# Setting
- [Raspberry Pi Documentation][21]
- [Installation - Raspberry Pi Documentation][1]
- [VNC (Virtual Network Computing) - Raspberry Pi Documentation][2]
- [SSH (Secure Shell) - Raspberry Pi Documentation][3]
- [Passwordless SSH access - Raspberry Pi Documentation][20]

# Links
- [Top 10 Raspberry Pi Projects for Beginners][4]
- [PSP Raspberry PI 3 HDMI LCD RetroPie PSPi - YouTube][5]
- [5 Amazing Gadgets Built On Raspberry Pi - YouTube][6]
- [Top 10 Coolest Raspberry Pi Projects - YouTube][7]
- [How to make a DIY Raspberry Pi Arcade Cabinet! - YouTube][8]

# Pin
![pin][9]
![pin2][10]

- [GPIO: Models A+, B+, Raspberry Pi 2 B and Raspberry Pi 3 B - Raspberry Pi Documentation][11]
- [Raspberry Pi GPIO Pinout][12]

# Examples
- [Project 1: GPIO Led using Python][13]
- [Intro to Raspberry Pi GPIO - YouTube][14]
- [Raspberry Pi For Beginners: LED Connections, Bread-boards, and Programming - YouTube][15]
- [ModMyPi | HC-SR04 Ultrasonic Range Sensor on the Raspberry Pi][16]

# Some thoughts
"Blinking LED" is just like writing an "hello world" programme in physical computing.

# Setting brightness of Touch led

- [Raspberry Pi 7” Touchscreen Display | element14 | Raspberry Pi Accessories][17]

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
![sensors][18]

``` python
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
- [Resistor Color Codes | Color Codes | Electronics Textbook][19]

[1]: https://www.raspberrypi.org/documentation/installation/
[2]: https://www.raspberrypi.org/documentation/remote-access/vnc/
[3]: https://www.raspberrypi.org/documentation/remote-access/ssh/
[4]: https://lifehacker.com/top-10-raspberry-pi-projects-for-beginners-1791002723
[5]: https://www.youtube.com/watch?v=Pfc031OlED8
[6]: https://www.youtube.com/watch?v=z_CbNqfa84Y
[7]: https://www.youtube.com/watch?v=9YhTOUu06EY
[8]: https://www.youtube.com/watch?v=NUmrwvQ0reI
[9]: https://cdn.shopify.com/s/files/1/0176/3274/files/assembly5_large.png?9809653568685397441
[10]: https://www.raspberrypi.org/documentation/usage/gpio-plus-and-raspi2/images/gpio-numbers-pi2.png
[11]: https://www.raspberrypi.org/documentation/usage/gpio-plus-and-raspi2/README.md
[12]: https://pinout.xyz/
[13]: http://www.thirdeyevis.com/pi-page-2.php
[14]: https://www.youtube.com/watch?v=igvDgUnh8vg
[15]: https://www.youtube.com/watch?v=eObSqbe9aqU
[16]: https://www.modmypi.com/blog/hc-sr04-ultrasonic-range-sensor-on-the-raspberry-pi
[17]: https://www.element14.com/community/docs/DOC-78156/l/raspberry-pi-7-touchscreen-display
[18]: https://www.jakartanotebook.com/images/products/68/181/22325/1/raspberry-pi-3-and-raspberry-pi-2-model-b-16-kinds-of-sensor-5.jpg
[19]: https://www.allaboutcircuits.com/textbook/reference/chpt-2/resistor-color-codes/
[20]: https://www.raspberrypi.org/documentation/remote-access/ssh/passwordless.md
[21]: https://www.raspberrypi.org/documentation/
