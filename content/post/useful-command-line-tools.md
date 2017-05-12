+++
title = "useful command line tools"
date = "2015-05-24 22:36:53"
tags = ["commandline", "terminal", "zsh"]
+++

# Basic
## Redirect operators

```sh
# pipe
echo "hello world" | sed 's/ /_/'

# redirect the standard output result to file (replace)
echo "hello world" > test.txt

# redirect the standard output result to file (append)
echo "hello world" >> test.txt

# redirect file to standard input
# e.g. replace all space to _ in text.txt and save to a new file
sed 's/ /_/g' < test.txt > test_1.txt

# line input
cat << end
heredoc> hello
heredoc> world
heredoc> end
```

# Useful Commands
## [Cheatsheet](http://floss.zoomquiet.io/data/20120129165222/index.html)
- `d` to show directory history
  - type `cd -number` or directly type the `number` to go to directory
- `!:n-m` get the attribute from n to m of last command
- `!!` to get the last command
- `!*` to get the argz of last command
- [zsh tip](http://www.zzapper.co.uk/zshtips.html)

## Links
[zsh - Table of Contents](http://www.cs.elte.hu/zsh-manual/zsh_toc.html)

## copydir
```sh
function copydir {
  pwd | tr -d "\r\n" | pbcopy
}
```

- `copydir` to copy current directory to clipboard

## qlmanage

```sh
# Quick-look a file from the command line
alias ql='qlmanage -p'`
```

## airport
```sh
    sudo ln -s /System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport /usr/sbin/airport`
```

Scan your local wireless environment from the command line

## pgrep and pkill

Find or signal a program or process by name

## shutdown

Restart the Mac
```sh
    shutdown -r now
```
## textutil

Convert between various text file formats

## Xargs

Granted, I often `xargs`  at CLI to do the looping (KYLee):

```sh
# simple use case
echo "U R L" | xargs -n1 echo

# -I may be needed for more complex use case (`mv @ @.bak`)
# however -I implies -L (takes input as line)
# so split before call
echo "U R L" | sed 's/ /\n/g' | xargs -I@ echo @

# or do with temp file
echo "U\nR\nL" > file
cat file | xargs -I@ echo @
```

## Find files and delete them

# can use * as wild card

```
find . -name “FILE-TO-FIND" -exec rm -rf {} \;
```

# Powerful tools
## ImageMagick (convert)

[ImageMagick](http://www.imagemagick.org/script/command-line-processing.php)

> Use ImageMagick to resize, flip, mirror, rotate, distort, shear and transform images, adjust image colors, apply various special effects, or draw text, lines, polygons, ellipses and Bézier curves.

```sh
convert image.jpg image.png
```

```sh
# It is sometimes convenient to resize an image as they are read. Suppose you have hundreds of large JPEG images you want to convert to a sequence of PNG thumbails:
convert '*.jpg' -resize 120x120 thumbnail%03d.png
# rename file batchly
`rename 's/\.html$/\.php/' *.html`

# create gif
convert -delay 50 *.png result.gif
mkdir resize
for IMG in *.png
do
    convert -resize 10% ${IMG} ./resize/${IMG/%.png/_small.png}
done
```

## ffmpeg

[ffmpeg](https://www.ffmpeg.org/)
A complete, cross-platform solution to record, convert and stream audio and video.

```sh
# -i mean input_file
$ ffmpeg -i input.mp4 output.avi
```

## [http-server](https://www.npmjs.com/package/http-server)
> http-server is a simple, zero-configuration command-line http server. It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development, and learning.

## [youtube-dl](http://rg3.github.io/youtube-dl/)
- youtube-dl is a small command-line program to download videos from YouTube.com and a few more sites.

## [Platinum Searcher](https://github.com/monochromegane/the_platinum_searcher)
- A code search tool similar to ack and the_silver_searcher(ag). It supports multi platforms and multi encodings.

## [Pandoc](http://johnmacfarlane.net/pandoc/index.html)
- [examples](http://johnmacfarlane.net/pandoc/demos.html)
- a universal document converter

## osx metadata

[mac OS X mdfind, mdutil, mdls, mdimport. file metadata utilities](http://real-world-systems.com/docs/mdfind.1.html)

## [HTTPie – command line HTTP client](https://httpie.org/)
```sh
# install
brew install httpie
```

## [jq](https://stedolan.github.io/jq/)
- `http -b url | jq .name`
- jq 可以響cli 做到lodash 嘅嘢

