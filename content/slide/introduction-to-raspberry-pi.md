---
date: 2017-11-03T11:17:14+08:00
title: "Introduction to Raspberry Pi"
subtitle: ""
tags:
    - raspberry
    - pi
RemarkOption:
    ratio: "16:9"
---

class: center middle

# Introdution to Raspberry-Pi
---
# Agenda

<!-- MarkdownTOC autolink=false depth=1 -->

- Raspberry Pi
- What is Raspberry-Pi
- Raspberry-Pi vs Audrino vs Microbit
- What is GPIO?
- Setup
- Introduction to 16 common sensors
- e.g. Blinking LED
- e.g. Blinking LED cont...
- Python Script
- Top 10 Raspberry Pi Projects for Beginners
- Thanks

<!-- /MarkdownTOC -->


---
class: center middle
# Raspberry Pi

| RASPBERRY PI 3 MODEL B | RASPBERRY PI ZERO W |
|------------------------|---------------------|
| ![model3][&1]          | ![zero][&2]         |
| More Powerful          | Much Lighter        |

---
# What is Raspberry-Pi

> A small and affordable computer that you can use to learn programming

- Linux base .red[**Single Board Computer**] with `wifi`, `bluebooth`, `LAN`, `HDMI` etc ...
- All files in Pi are store in a microSD card.
- Programme with  `Python`, `Scratch`, `JavaScript`, `Golang`...
- Run in Raspbian OS

---

class: center
# Raspberry-Pi vs Audrino vs Microbit

|          |      Raspberry-Pi     |             Audrino              |                Micro:Bit                 |
|----------|-----------------------|----------------------------------|------------------------------------------|
| Type     | Single Board Computer | Micro-Controller                 | Micro-Controller                         |
| Price    | ¥269.00 (Model 3)     | ¥87.00 (UNO R3)                  | ¥108.00                                  |
| Language | Python<br>Scratch     | C / C++                          | JavaScript<br>MicroPython<br>BlockEditor |
| Pin      | 40 Digital Pin        | Digital Pin: 14<br>Analog Pin: 6 | 20 Pin (6 With ADC)                      |


.footnote[

- [micro:bit : BBC micro:bit pins](https://www.microbit.co.uk/device/pins)
]

---
# What is GPIO?
- General-Purpose Input/output (GPIO)<sup>[[1]][&3]</sup>

.footnote[
* [Raspberry Pi GPIO Pinout][&3]
]

---
class: center
# Setup

<iframe width="560" height="315" src="https://www.youtube.com/embed/gbJB3387xUw" frameborder="0" allowfullscreen></iframe>

---
class: center

# Introduction to 16 common sensors

[![16sensors][&5]][&5]

---
# e.g. Blinking LED
![blink_led][&7]

---
# e.g. Blinking LED cont...

``` python
import RPi.GPIO as GPIO # import GPIO library
import time # import time library

LED = 18 # define the pin as LED
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




---
# Python Script

``` python
import RPi.GPIO as GPIO
...
```


---
class: center middle
# Top 10 Raspberry Pi Projects for Beginners

.footnote[[Top 10 Raspberry Pi Projects for Beginners][&6]]


---
class: center middle
# Thanks

## 👏👏👏

[&1]: https://www.raspberrypi.org/app/uploads/2017/05/Raspberry-Pi-3-462x322.jpg
[&2]: https://www.raspberrypi.org/app/uploads/2017/05/Pi-Zero-W-Tilt-462x322.jpg
[&3]: https://pinout.xyz/
[&5]: https://www.jakartanotebook.com/images/products/68/181/22325/1/raspberry-pi-3-and-raspberry-pi-2-model-b-16-kinds-of-sensor-5.jpg
[&6]: https://lifehacker.com/top-10-raspberry-pi-projects-for-beginners-1791002723
[&7]: https://www.raspinews.com/wp-content/uploads/2017/06/Blinking-LED-Raspberry-Pi-Wiring-768x597-1.png