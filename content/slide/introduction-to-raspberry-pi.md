---
date: 2017-11-03T11:17:14+08:00
title: "Introduction to Raspberry Pi"
markup: mmark
RemarkOption:
    ratio: "16:9"
tags:
    - raspberry
    - pi
---

class: center middle bg-dark text-light

# Introduction to Raspberry-Pi

---
# Agenda

<!-- MarkdownTOC depth=1 autolink=false -->

- Raspberry Pi
- What is Raspberry-Pi
- Raspberry-Pi vs Audrino vs Microbit
- What is GPIO?
- Setup
- Introduction to 16 common sensors
- e.g. Blinking LED
- e.g. Blinking LED cont...
- Similar code in Scratch2?
- Programming Learning
- Top 10 Raspberry Pi Projects for Beginners
- Reference
- Thanks

<!-- /MarkdownTOC -->



---
class: center
# Raspberry Pi

| RASPBERRY PI 3 MODEL B | RASPBERRY PI ZERO W |
|:-----------------------|:--------------------|
| ![model3][@01]         | ![zero][@02]        |
| More Powerful          | Much Lighter        |

---
# What is Raspberry-Pi

.blockquote-info[
>  A small and affordable computer that you can use to learn programming
]

- Linux base .text-danger[**Single Board Computer**] with `wifi`, `bluebooth`, `LAN`, `HDMI` etc ...
- All files in Pi are store in a microSD card.
- Programme with  `Python`, `Scratch`, `JavaScript`, `Golang`...
- Run in Raspbian OS

---

class: center
# Raspberry-Pi vs Audrino vs Microbit

|          | Raspberry-Pi          | Audrino                          | Micro:Bit                                |
|:---------|:----------------------|:---------------------------------|:-----------------------------------------|
| Type     | Single Board Computer | Micro-Controller                 | Micro-Controller                         |
| Price    | ¥269.00 (Model 3)     | ¥87.00 (UNO R3)                  | ¥108.00                                  |
| Language | Python<br>Scratch     | C / C++                          | JavaScript<br>MicroPython<br>BlockEditor |
| Pin      | 40 Digital Pin        | Digital Pin: 14<br>Analog Pin: 6 | 20 Pin (6 With ADC).sup[[1][@03]]        |


.footnote[
- [micro:bit : BBC micro:bit pins][@04]
]

---
# What is GPIO?
- General-Purpose Input/output (GPIO).sup[[1][@05]]

.footnote[
* [Raspberry Pi GPIO Pinout][@06]
]

---
class: center
# Setup

<iframe width="640" height="480" src="https://www.youtube.com/embed/gbJB3387xUw" frameborder="0" allowfullscreen></iframe>

---
class: center

# Introduction to 16 common sensors

.w-50.mx-auto[
![16sensors][@07]
]

---
class: center
# e.g. Blinking LED

.mh-75.mx-auto[
![blink_led][@08]
]

---
# e.g. Blinking LED cont...

``` python
import RPi.GPIO as GPIO # import GPIO library
import time # import time library

LED = 18 # define the pin as LED
GPIO.setmode(GPIO.BCM) # set GPIO Pin Mode
GPIO.setwarnings(False) # disable warning

GPIO.set(LED, GPIO.OUT) # set LED Pin as an ouput pin

print("Programme start.") # print() print statement to console

for i in range(10): # iterate the following code 10 times
    GPIO.output(LED, True) # set the LED Pin to high Voltage
    time.sleep(0.5) # Wait 0.5s
    GPIO.output(LED, False) # set the LED Pin to low Voltage
    time.sleep(0.5) # Wait 0.5s

print("Programme closed.")
```

---
class: center
# Similar code in Scratch2?

.overflow.h-75[
![scratch_example][@09]
]

---
# Programming Learning

## The 5 Basic Concepts of any Programming Language
.footnote[
- [Programming Elements][@10]
]

--

- Variable
--

- Control Flow
--

- Input / Output
--

- Subroutines and functions
--

- Library / Community   


---
class: center middle
# Top 10 Raspberry Pi Projects for Beginners

.footnote[[Top 10 Raspberry Pi Projects for Beginners][@11]]


---
# Reference



---
class: center middle
# Thanks

## 👏👏👏


[@01]: ./Raspberry-Pi-3-462x322.jpg
[@02]: ./Pi-Zero-W-Tilt-462x322.jpg
[@03]: https://www.microbit.co.uk/device/pins
[@04]: https://www.microbit.co.uk/device/pins
[@05]: https://pinout.xyz/
[@06]: https://pinout.xyz/
[@07]: https://www.jakartanotebook.com/images/products/68/181/22325/1/raspberry-pi-3-and-raspberry-pi-2-model-b-16-kinds-of-sensor-5.jpg
[@08]: https://www.raspinews.com/wp-content/uploads/2017/06/Blinking-LED-Raspberry-Pi-Wiring-768x597-1.png
[@09]: ./scratch_example.png
[@10]: http://theory.uwinnipeg.ca/programming/node3.html
[@11]: https://lifehacker.com/top-10-raspberry-pi-projects-for-beginners-1791002723
