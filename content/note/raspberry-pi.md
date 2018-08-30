---
date: 2017-09-19T09:44:09+08:00
toc: true
title: "Raspberry Pi"
tags:
  - iot
  - stem
  - linux
  - raspberry
  - pi
---

# Basic setting
- [Setup guide for raspberry pi](/note/raspberry-pi-setup)


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

- [Running A Python Script At Boot Using Cron](https://www.raspberrypi-spy.co.uk/2013/07/running-a-python-script-at-boot-using-cron/)

# Python library
- [gpiozero — Gpiozero 1.4.1 Documentation](https://gpiozero.readthedocs.io/en/stable/)

# Pin
![pin](https://cdn.shopify.com/s/files/1/0176/3274/files/assembly5_large.png?9809653568685397441)
![pin2](https://www.raspberrypi.org/documentation/usage/gpio-plus-and-raspi2/images/gpio-numbers-pi2.png)

- [GPIO: Models A+, B+, Raspberry Pi 2 B and Raspberry Pi 3 B - Raspberry Pi Documentation](https://www.raspberrypi.org/documentation/usage/gpio-plus-and-raspi2/README.md)
- [Sense HAT at Raspberry Pi GPIO Pinout](https://pinout.xyz/pinout/sense_hat)
- [Raspberry Pi GPIO Pinout](https://pinout.xyz/)

# Examples
- [Project 1: GPIO Led using Python](http://www.thirdeyevis.com/pi-page-2.php)
- [Intro to Raspberry Pi GPIO - YouTube](https://www.youtube.com/watch?v=igvDgUnh8vg)
- [Raspberry Pi For Beginners: LED Connections, Bread-boards, and Programming - YouTube](https://www.youtube.com/watch?v=eObSqbe9aqU)
- [ModMyPi | HC-SR04 Ultrasonic Range Sensor on the Raspberry Pi](https://www.modmypi.com/blog/hc-sr04-ultrasonic-range-sensor-on-the-raspberry-pi)

# Links
- [How to make a DIY Raspberry Pi Arcade Cabinet! - YouTube](https://www.youtube.com/watch?v=NUmrwvQ0reI)
- [PSP Raspberry PI 3 HDMI LCD RetroPie PSPi - YouTube](https://www.youtube.com/watch?v=Pfc031OlED8)
- [淺談電路板　micro:bit vs Arduino vs Raspberry Pi淺談電路板　micro:bit vs Arduino vs Raspberry Pi - PCM](https://www.pcmarket.com.hk/2017/09/15/%E6%B7%BA%E8%AB%87%E9%9B%BB%E8%B7%AF%E6%9D%BF-microbit-vs-arduino-vs-raspberry-pi/)
- [USB (DWC) Enumeration ? - Raspberry Pi Forums](https://www.raspberrypi.org/forums/viewtopic.php?f=72&t=61949)
- [Simple guide for setting up OTG modes on the Raspberry Pi Zero](https://gist.github.com/gbaman/50b6cca61dd1c3f88f41)
- [Raspberry Pi – Basic Setup without Monitor and Keyboard (Headless Setup)](https://www.electronicshub.org/raspberry-pi-basic-setup-without-monitor-keyboard-headless-setup/)
- [5 Amazing Gadgets Built On Raspberry Pi - YouTube](https://www.youtube.com/watch?v=z_CbNqfa84Y)

# Some Projects
- [Projects | Raspberry Pi Projects](https://projects.raspberrypi.org/en/)
- [Top 10 Coolest Raspberry Pi Projects - YouTube](https://www.youtube.com/watch?v=9YhTOUu06EY)
- [Top 10 Raspberry Pi Projects for Beginners](https://lifehacker.com/top-10-raspberry-pi-projects-for-beginners-1791002723)
- [DIY Raspberry Pi Indoor Outdoor Webcam: 9 Steps (with Picturesres)](http://www.instructables.com/id/DIY-Raspberry-Pi-Indoor-Outdoor-Webcam/?utm_source=newsletter&utm_medium=email)
- [Daylight IR photography - Raspberry Pi Forums](https://www.raspberrypi.org/forums/viewtopic.php?f=43&t=60829)
- [Plug and Play IoT with the Pi Sense HAT](https://www.rs-online.com/designspark/plug-and-play-iot-with-the-pi-sense-hat)
- [The Simplest Way to Build A Raspberry Pi-Powered Amazon Echo](https://lifehacker.com/the-simplest-way-to-build-a-raspberry-pi-powered-amazon-1794218212)
- [Raspberry Pi · alexa/alexa-avs-sample-app Wiki](https://github.com/alexa/alexa-avs-sample-app/wiki/Raspberry-Pi)
- [Control Raspberry Pi GPIO With Amazon Echo and Python: 11 Steps (with Pictures)](http://www.instructables.com/id/Control-Raspberry-Pi-GPIO-With-Amazon-Echo-and-Pyt/)
- [MagicMirror²](https://magicmirror.builders/)
- [Raspberry Pi Based Line Follower Robot with Python Code](https://circuitdigest.com/microcontroller-projects/raspberry-pi-line-follower-robot)
- [RetroPie](/note/retropie)
- [A fun, hands-on deep learning project for beginners, students, and hobbyists - PyImageSearch](https://www.pyimagesearch.com/2018/04/30/a-fun-hands-on-deep-learning-project-for-beginners-students-and-hobbyists/)
- [Top 8 IDEs for Raspberry Pi - Open Source For You](https://opensourceforu.com/2017/06/top-ides-raspberry-pi/)
- [Build Actuator app for controlling Illumination with Raspberry Pi 3 | Packt Hub](https://hub.packtpub.com/build-actuator-application-with-raspberry-pi-3/)
- [piPrint: Raspberry Pi 3D Printer - YouTube](https://www.youtube.com/watch?v=JW6yJvLF7Jk)
- [10+ Classic Games You Can Run on Raspberry Pi Without Emulators](https://www.makeuseof.com/tag/classic-games-raspberry-pi-without-emulators/)
- [STICKY: GAMES LIST: Games That Work On The Pi - Raspberry Pi Forums](https://www.raspberrypi.org/forums/viewtopic.php?t=51794)
- 避開emulator, apt-get 到通常licence 都okay, 可以去project homepage 睇睇
- recommend Pydance, DOOM/Quake
- [Raspberry Pi - Blynk - YouTube](https://www.youtube.com/watch?v=O6q7soSepeU)


# Some thoughts
"Blinking LED" is just like writing an "hello world" programme in physical computing.


# Sensors
![sensors](https://www.jakartanotebook.com/images/products/68/181/22325/1/raspberry-pi-3-and-raspberry-pi-2-model-b-16-kinds-of-sensor-5.jpg)

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
- [Resistor Color Codes | Color Codes | Electronics Textbook](http://www.instructables.com/id/Raspberry-Pi-Launch-Python-script-on-startup/)

## Using Raspberry Pi to control servo
- Usng Pulse modulation to control a servo
- [Servo control using Raspberry Pi. - YouTube](https://www.youtube.com/watch?v=N5QmZ92uvUo)
- [RPi.GPIO 0.5.2a now has software PWM – How to use it – RasPi.TV](http://raspi.tv/2013/rpi-gpio-0-5-2a-now-has-software-pwm-how-to-use-it)
- [Pulse Width Modulation Used for Motor Control](https://www.electronics-tutorials.ws/blog/pulse-width-modulation.html)

# Sensor HAT
- [Home - Sense HAT](https://pythonhosted.org/sense-hat/)
- [Sense HAT - Raspberry Pi Documentation](https://www.raspberrypi.org/documentation/hardware/sense-hat/)
- [Getting started with the Sense HAT | Raspberry Pi Projects](https://projects.raspberrypi.org/en/projects/getting-started-with-the-sense-hat)

# ADC (Analog to Digital Convertor)
- [MCP3008 | Raspberry Pi Analog to Digital Converters | Adafruit Learning System](https://learn.adafruit.com/raspberry-pi-analog-to-digital-converters/mcp3008)

# Reference
- [用Raspberry Pi學GPIO - 自己做遊戲機](https://www.slideshare.net/raspberrypi-tw/gpio-gameconsolestarterkit)
- [Raspberry Pi Documentation](https://www.raspberrypi.org/documentation/)
- [VNC (Virtual Network Computing) - Raspberry Pi Documentation](https://www.raspberrypi.org/documentation/remote-access/vnc/)
- [SSH (Secure Shell) - Raspberry Pi Documentation](https://www.raspberrypi.org/documentation/remote-access/ssh/)
- [Passwordless SSH access - Raspberry Pi Documentation](https://www.raspberrypi.org/documentation/remote-access/ssh/passwordless.md)
- [Ethernet Gadget | Turning your Raspberry PI Zero into a USB Gadget | Adafruit Learning System](https://learn.adafruit.com/turning-your-raspberry-pi-zero-into-a-usb-gadget/ethernet-gadget)
