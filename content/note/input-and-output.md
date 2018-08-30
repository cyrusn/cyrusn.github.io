---
title: "Input and Output"
subtitle: ""
description:
katex: false
mermaid: false
abcjs: false
date: 2018-07-16T21:08:06+08:00
tags:
  - stem
  - sensor
  - i2c
  - bmp280
  - mpu6050
---

# ADC 
- [Analog to Digital Conversion - learn.sparkfun.com][@01]

## MCP3008
- [MCP3008 | Raspberry Pi Analog to Digital Converters | Adafruit Learning System][@02]
- [14. API - SPI Devices — Gpiozero 1.4.1 Documentation][@03]
- [Raspberry Pi ADC: MCP3008 Analog to Digital Converter][@04]

# I2C sensors
- [I2C - learn.sparkfun.com][@08]

## MPU6050 (Gyroscope)
- [MCP3008 | Raspberry Pi Analog to Digital Converters | Adafruit Learning System][@02]
- [GY-521 MPU6050模块 三维角度传感器6DOF 三轴加速度计电子陀螺仪-tmall.com天猫][@06]
- [GitHub - Tijndagamer/mpu6050: A Python module for accessing the MPU-6050 digital accelerometer and gyroscope on a Raspberry Pi.][@07]

## BMP280 (Temperature, Pressure and Altitude)
- [GY-BMP280-3.3 高精度大气压强传感器模块 高度计传感器-tmall.com天猫][@09]
- [GitHub - adafruit/Adafruit_CircuitPython_BMP280: CircuitPython driver for the BMP280][@10]

``` py
# Example
import board
import digitalio
import busio
import time
from adafruit_bmp280 import adafruit_bmp280

# Create library object using our Bus I2C port
i2c = busio.I2C(board.SCL, board.SDA)
bmp280 = adafruit_bmp280.Adafruit_BMP280_I2C(i2c, address=0x68)

bmp280.seaLevelhPa = 1013.25

while True:
    print("\nTemperature: %0.1f C" % bmp280.temperature)
    print("Pressure: %0.1f hPa" % bmp280.pressure)
    print("Altitude = %0.2f meters" % bmp280.altitude)
    time.sleep(2)
```

# SPI
- [Serial Peripheral Interface (SPI) - learn.sparkfun.com][@11]


# Others
- [Joint University Programmes Admissions System][@12]


<!-- reference links -->

[@01]: https://learn.sparkfun.com/tutorials/analog-to-digital-conversion
[@02]: https://learn.adafruit.com/raspberry-pi-analog-to-digital-converters/mcp3008
[@03]: https://gpiozero.readthedocs.io/en/stable/api_spi.html
[@04]: https://pimylifeup.com/raspberry-pi-adc/
[@05]: https://learn.adafruit.com/raspberry-pi-analog-to-digital-converters/mcp3008
[@06]: https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-16538328900.32.6e1c3d6ckNlXbG&id=41337720621&rn=ed13268584dfdfc4a99f55bd720c5083&abbucket=19
[@07]: https://github.com/Tijndagamer/mpu6050
[@08]: https://learn.sparkfun.com/tutorials/i2c
[@09]: https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-16538328900.33.6e1c3d6cOy9p9v&id=536632725681&rn=19d390f543aaed82ccfdbfbc49aa836e&abbucket=19
[@10]: https://github.com/adafruit/Adafruit_CircuitPython_BMP280
[@11]: https://learn.sparkfun.com/tutorials/serial-peripheral-interface-spi
[@12]: https://app.jupas.edu.hk/JUPAS4_SCHOOL/?x=*A1JOiUoxK0eTbbCyrJUTg
