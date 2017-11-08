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
- [Some Projects](#some-projects)
- [Some thoughts](#some-thoughts)
- [Setting brightness of Touch led](#setting-brightness-of-touch-led)
- [Sensors](#sensors)
- [Others](#others)
- [Sensor HAT](#sensor-hat)
- [ADC \(Analog to Digital Convertor\)](#adc-analog-to-digital-convertor)

<!-- /MarkdownTOC -->


# Setting
- [Raspberry Pi Documentation][&01]
- [Installation - Raspberry Pi Documentation][&02]
- [VNC (Virtual Network Computing) - Raspberry Pi Documentation][&03]
- [SSH (Secure Shell) - Raspberry Pi Documentation][&04]
- [Passwordless SSH access - Raspberry Pi Documentation][&05]
- [Sense HAT at Raspberry Pi GPIO Pinout][&06]

# Links
- [5 Amazing Gadgets Built On Raspberry Pi - YouTube][&07]
- [How to make a DIY Raspberry Pi Arcade Cabinet! - YouTube][&08]
- [PSP Raspberry PI 3 HDMI LCD RetroPie PSPi - YouTube][&09]
- [Top 10 Coolest Raspberry Pi Projects - YouTube][&10]
- [Top 10 Raspberry Pi Projects for Beginners][&11]
- [L298 - Google Search][&12]
- [Raspberry Pi: Launch Python Script on Startup: 8 Steps][&13]
- [淺談電路板　micro:bit vs Arduino vs Raspberry Pi淺談電路板　micro:bit vs Arduino vs Raspberry Pi - PCM][&14]

# Pin
![pin][&15]
![pin2][&16]


- [GPIO: Models A+, B+, Raspberry Pi 2 B and Raspberry Pi 3 B - Raspberry Pi Documentation][&17]
- [Raspberry Pi GPIO Pinout][&18]

# Examples
- [Project 1: GPIO Led using Python][&19]
- [Intro to Raspberry Pi GPIO - YouTube][&20]
- [Raspberry Pi For Beginners: LED Connections, Bread-boards, and Programming - YouTube][&21]
- [ModMyPi | HC-SR04 Ultrasonic Range Sensor on the Raspberry Pi][&22]

# Some Projects
- [Plug and Play IoT with the Pi Sense HAT][&23]
- [The Simplest Way to Build A Raspberry Pi-Powered Amazon Echo][&24]
- [Raspberry Pi · alexa/alexa-avs-sample-app Wiki][&25]
- [Control Raspberry Pi GPIO With Amazon Echo and Python: 11 Steps (with Pictures)][&26]


# Some thoughts
"Blinking LED" is just like writing an "hello world" programme in physical computing.

# Setting brightness of Touch led
- [Raspberry Pi 7” Touchscreen Display | element14 | Raspberry Pi Accessories][&13]

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
![sensors][&28]

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
- [Resistor Color Codes | Color Codes | Electronics Textbook][&29]

# Sensor HAT
- [Home - Sense HAT][&30]
- [Sense HAT - Raspberry Pi Documentation][&31]
- [Getting started with the Sense HAT | Raspberry Pi Projects][&32]


# ADC (Analog to Digital Convertor)
- [MCP3008 | Raspberry Pi Analog to Digital Converters | Adafruit Learning System][&33]

<!-- References -->

[&01]: https://www.raspberrypi.org/documentation/
[&02]: https://www.raspberrypi.org/documentation/installation/
[&03]: https://www.raspberrypi.org/documentation/remote-access/vnc/
[&04]: https://www.raspberrypi.org/documentation/remote-access/ssh/
[&05]: https://www.raspberrypi.org/documentation/remote-access/ssh/passwordless.md
[&06]: https://pinout.xyz/pinout/sense_hat
[&07]: https://www.youtube.com/watch?v=z_CbNqfa84Y
[&08]: https://www.youtube.com/watch?v=NUmrwvQ0reI
[&09]: https://www.youtube.com/watch?v=Pfc031OlED8
[&10]: https://www.youtube.com/watch?v=9YhTOUu06EY
[&11]: https://lifehacker.com/top-10-raspberry-pi-projects-for-beginners-1791002723
[&12]: https://www.google.com.hk/search?newwindow=1&safe=off&q=L298&oq=L298&gs_l=psy-ab.3..0i67k1l4j0i7i30k1l2j0i67k1j0j0i67k1j0.11553.14128.0.14632.4.4.0.0.0.0.68.238.4.4.0....0...1.1.64.psy-ab..0.4.238...33i160k1j35i39k1.0.HB1FVyvf0Co
[&13]: https://www.element14.com/community/docs/DOC-78156/l/raspberry-pi-7-touchscreen-display
[&14]: https://www.pcmarket.com.hk/2017/09/15/%E6%B7%BA%E8%AB%87%E9%9B%BB%E8%B7%AF%E6%9D%BF-microbit-vs-arduino-vs-raspberry-pi/
[&15]: https://cdn.shopify.com/s/files/1/0176/3274/files/assembly5_large.png?9809653568685397441
[&16]: https://www.raspberrypi.org/documentation/usage/gpio-plus-and-raspi2/images/gpio-numbers-pi2.png
[&17]: https://www.raspberrypi.org/documentation/usage/gpio-plus-and-raspi2/README.md
[&18]: https://pinout.xyz/
[&19]: http://www.thirdeyevis.com/pi-page-2.php
[&20]: https://www.youtube.com/watch?v=igvDgUnh8vg
[&21]: https://www.youtube.com/watch?v=eObSqbe9aqU
[&22]: https://www.modmypi.com/blog/hc-sr04-ultrasonic-range-sensor-on-the-raspberry-pi
[&23]: https://www.allaboutcircuits.com/textbook/reference/chpt-2/resistor-color-codes/
[&23]: https://www.rs-online.com/designspark/plug-and-play-iot-with-the-pi-sense-hat
[&24]: https://lifehacker.com/the-simplest-way-to-build-a-raspberry-pi-powered-amazon-1794218212
[&25]: https://github.com/alexa/alexa-avs-sample-app/wiki/Raspberry-Pi
[&26]: http://www.instructables.com/id/Control-Raspberry-Pi-GPIO-With-Amazon-Echo-and-Pyt/
[&28]: https://www.jakartanotebook.com/images/products/68/181/22325/1/raspberry-pi-3-and-raspberry-pi-2-model-b-16-kinds-of-sensor-5.jpg
[&29]: http://www.instructables.com/id/Raspberry-Pi-Launch-Python-script-on-startup/
[&30]: https://pythonhosted.org/sense-hat/
[&31]: https://www.raspberrypi.org/documentation/hardware/sense-hat/
[&32]: https://projects.raspberrypi.org/en/projects/getting-started-with-the-sense-hat
[&33]: https://learn.adafruit.com/raspberry-pi-analog-to-digital-converters/mcp3008
