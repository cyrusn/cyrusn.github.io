---
title: How to convert images to gif
date: '2016-09-26 07:46:28'
tags:
  - imagemagick
  - productivity
  - gif
  - convert
---

# install `imagemagick` through homebrew

```sh
$ brew install imagemagick
```

# convert pngs to gif with 2 second per frame

```sh
$ convert -delay 200 *.png converted.gif
```
