---
title: "Create Spy Camera With Raspberry Pi Zero W"
subtitle: ""
description:
draft: true
katex: false
mermaid: false
abcjs: false
date: 2018-02-13T18:51:28+08:00
tags:
---

# Table of Content

<!-- MarkdownTOC -->

- [Ingredient](#ingredient)
  - [Difference between Camera and NoIR Camera](#difference-between-camera-and-noir-camera)
- [Using `RPi-Cam-Web-Interface` package](#using-rpi-cam-web-interface-package)

<!-- /MarkdownTOC -->


# Ingredient
- [Raspberry Pi Zero W][@1]
- [Camera][@2] / [NoIR Camera][@3]
- [Raspberry Pi Zero Case][@4]
- SD Card (16G)
- USB Data Cable

## Difference between Camera and NoIR Camera
It is nearly the same but the IR filter, mean that NoIR can perform better in night but
the image will look weired in day light. There are some camera can switch the IR filter
on / off by providing voltage, like [this][@5].
. Programming on such devices is beyond our tutorial.

- [Raspberry Pi Camera vs NOIR Camera - Pi My Life Up][@6]

# Using `RPi-Cam-Web-Interface` package
- [RPi-Cam-Web-Interface - eLinux.org][@7]

<!-- reference links -->

[@1]: https://www.raspberrypi.org/products/raspberry-pi-zero-w/
[@2]: https://www.raspberrypi.org/products/camera-module-v2/
[@3]: https://www.raspberrypi.org/products/pi-noir-camera-v2/
[@4]: https://www.raspberrypi.org/products/raspberry-pi-zero-case/
[@5]: http://www.waveshare.net/wiki/RPi_IR-CUT_Camera
[@6]: https://pimylifeup.com/raspberry-pi-camera-vs-noir-camera/
[@7]: https://elinux.org/RPi-Cam-Web-Interface
