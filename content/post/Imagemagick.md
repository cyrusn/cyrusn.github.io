+++
title = "Imagemagick"
date = "2016-09-26 07:46:28"
tags = ["imagemagick", "productivity"]
+++

## Convert Command

[imagemagick](http://www.imagemagick.org/)
<!--more-->
```sh
convert rose.jpg -resize 50% rose.png
```

## convert pngs to gif with 2 second per frame
```sh
convert -delay 200 *.png converted.gif
```
