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


# [Using RPi IR-Cut Camera][@8]
> RPi IR-CUT Camera默认工作在常规模式。 执行命令：`sudo nano /boot/config.txt`，在最后一行加入`disable_camera_led=1`，保存并重启树莓派后Camera将工作在夜视模式。 如需恢复到常规模式，只需删除`disable_camera_led=1`，保存并重启树莓派即可。 如需灵活控制显示模式，可通过树莓派的GPIO接口连接到以下位置，通过改变GPIO的电平来切换不同的模式（高电平为常规模式，低电平为夜视模式）。

<!-- reference links -->

[@1]: https://www.raspberrypi.org/products/raspberry-pi-zero-w/
[@2]: https://www.raspberrypi.org/products/camera-module-v2/
[@3]: https://www.raspberrypi.org/products/pi-noir-camera-v2/
[@4]: https://www.raspberrypi.org/products/raspberry-pi-zero-case/
[@5]: http://www.waveshare.net/wiki/RPi_IR-CUT_Camera
[@6]: https://pimylifeup.com/raspberry-pi-camera-vs-noir-camera/
[@7]: https://elinux.org/RPi-Cam-Web-Interface
[@8]: http://www.waveshare.net/wiki/RPi_IR-CUT_Camera
