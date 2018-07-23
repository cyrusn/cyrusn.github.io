---
title: Useful Command Line Tools
date: '2015-05-24 22:36:53'
toc: true
tags:
  - commandline
  - httpie
  - jq
  - kill
  - pt
  - redirect
  - terminal
  - tmux
  - top
  - wild card
  - xargs
  - youtube-dl
  - zsh
---

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

## Create multiple files or folders
```sh
mkdir sa{1..50}

# -p, --parents
#        no error if existing, make parent directories as needed
mkdir -p sa{1..50}/sax{1..50}
mkdir {a-z}12345 
mkdir {1,2,3}
mkdir test{01..10}
mkdir -p `date '+%y%m%d'`/{1,2,3} 
mkdir -p $USER/{1,2,3} 
```

# Useful Commands

## zsh
- [Cheatsheet][@01]
- `d` to show directory history
  - type `cd -number` or directly type the `number` to go to directory
- `!:n-m` get the attribute from n to m of last command
- `!!` to get the last command
- `!*` to get the argz of last command
- [zsh tip][@02]
- [zsh - Table of Contents][@03]
- [Customizing your shell prompt][@04]
- [man page zshmisc section 1](http://www.manpagez.com/man/1/zshmisc/)

## tr

> translate or delete characters

```sh
# replace "space character" to "+"
echo "hello world" | tr "[:blank:]" "+"
```

## copydir
> Custom Command: `copydir` to copy current directory to clipboard

```sh
function copydir {
  pwd | tr -d "\r\n" | pbcopy
}
```


## qlmanage
```sh
# Quick-look a file from the command line
alias ql='qlmanage -p'
```

## airport

```sh
sudo ln -s /System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport /usr/sbin/airport
```

Scan your local wireless environment from the command line

## pgrep and pkill
Find or signal a program or process by name

## shutdown
Restart the Mac

```sh
shutdown -r now
# or

reboot
```

## textutil

Convert between various text file formats

## xargs
Granted, I often `xargs` at CLI to do the looping (KYLee):
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
``` sh
$ find . -name "FILE-TO-FIND" -exec rm -rf {} \;
```

## tmux
> tmux is a terminal multiplexer. It lets you switch easily between several programs in one terminal, detach them (they keep running in the background) and reattach them to a different terminal. 


```sh
# list all session
tmux ls

# attach to session
tmux attach -t sessionName

# create new session
tmux new -s sessionName

# kill session
tmux kill-session -t sessionName
```

### navigate in tmux

- `Ctrl-b` then `[` then you can use your normal navigation keys to scroll around (eg. Up Arrow or PgDn).
- Press `q` to quit scroll mode.

- just quit terminal for exit the session


## ImageMagick (convert)
> Use [ImageMagick][@06] to resize, flip, mirror, rotate, distort, shear and transform images, adjust image colors, apply various special effects, or draw text, lines, polygons, ellipses and Bézier curves.

```sh
# Example 1: convert image's format
convert image.jpg image.png
```

```sh
# Example 2: resize an image
# It is sometimes convenient to resize an image as they are read.
# Suppose you have hundreds of large JPEG images you want to convert
# to a sequence of PNG thumbails:
convert '*.jpg' -resize 120x120 thumbnail%03d.png
# rename file batchly

$ rename 's/\.html$/\.php/' *.html
```

```sh
# Example 3: convert images to gif
# convert 1.jpg, 2.jpg, 3.jpg, 4.jpg, and 5.jpg
# in your current directory to a GIF animation.
magick *.jpg images.gif
```

## ffmpeg
> [ffmpeg][@07] A complete, cross-platform solution to record, convert and stream audio and video.

```sh
# -i mean input_file
$ ffmpeg -i input.mp4 output.avi
```

## http-server
> [http-server][@08] is a simple, zero-configuration command-line http server. It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development, and learning.

## youtube-dl
> [youtube-dl][@09] is a small command-line program to download videos from YouTube.com and a few more sites.
>
> - [Example | Download YouTube in batch][@10]

## pt
> A code search tool similar to ack and the_silver_searcher(ag). It supports multi platforms and multi encodings.
>
> - [Platinum Searcher][@11]

## Pandoc
- [Pandoc][@12]
- [examples][@13]
- a universal document converter

## http
> [HTTPie – command line HTTP client][@14]

```sh
# install
brew install httpie
```

## caddy
> [caddy][@15] is the HTTP/2 web server with automatic HTTPS.
> 
> ### features
> - proxy server
> - websocket server
> - redirect address

## jq
> Command-line JSON processor. It's also very handy tool to parse JSON like `lodash`

- [jq][@16]
- `echo '{"name": "CyrusN"}'| jq .name`
- `http` is commandline version of [postman][@17]

## top
> using `top` command to kill running process

## osx metadata
- [mac OS X mdfind, mdutil, mdls, mdimport. file metadata utilities][@18]

<!-- reference links -->

[@01]: http://floss.zoomquiet.io/data/20120129165222/index.html
[@02]: http://www.zzapper.co.uk/zshtips.html
[@03]: http://www.cs.elte.hu/zsh-manual/zsh_toc.html
[@04]: http://www.nparikh.org/unix/prompt.php
[@06]: http://www.imagemagick.org/script/command-line-processing.php
[@07]: https://www.ffmpeg.org/
[@08]: https://www.npmjs.com/package/http-server
[@09]: http://rg3.github.io/youtube-dl/
[@10]: {{< ref "post/download-youtube-in-batch" >}}
[@11]: https://github.com/monochromegane/the_platinum_searcher
[@12]: http://johnmacfarlane.net/pandoc/index.html
[@13]: http://johnmacfarlane.net/pandoc/demos.html
[@14]: https://httpie.org/
[@15]: https://caddyserver.com/
[@16]: https://stedolan.github.io/jq/
[@17]: https://www.getpostman.com/
[@18]: http://real-world-systems.com/docs/mdfind.1.html
