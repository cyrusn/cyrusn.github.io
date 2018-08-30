---
date: 2017-10-16T16:05:23+08:00
title: "Blink Led"
subtitle: ""
tags:
  - raspberry
  - pi
  - raspberrypi
  - stem
---

# Introduction
Making Blinking LED is just like writing a hello world programme in engineering.


# Setting

![setting][@1]

# Python Code

``` python
import RPi.GPIO as GPIO
import time

LED = 18
GPIO.setmode(GPIO.BCM)
GPIO.set(LED, GPIO.OUT)
GPIO.setwarnings(False)

print("Programme start.")
GPIO.output(LED, True)
time.sleep(0.5)
GPIO.output(LED, False)
time.sleep(0.5)
print("Programme closed.")
```

[@1]: ./simple-led-setting.png
