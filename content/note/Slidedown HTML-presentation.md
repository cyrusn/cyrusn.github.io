---
title: Slidedown HTML presentation
date: '2015-05-10 00:47:45'
tags:
  - slidedown
---

# Slide Down

- [example][&1]
- [github][&2]

# RevealJS

- [RevealJS][&3]
- [Pandoc][&4]

```sh
# pandoc convert md to RevealJS html
pandoc -s --mathjax -i -t revealjs SLIDES.md -o example.html
```


[&1]: http://cyrusn.github.io/slidedown/
[&2]: http://github.com/cyrusn/slidedown/
[&3]: http://lab.hakim.se/reveal-js/#/
[&4]: http://johnmacfarlane.net/pandoc/demo/example9/producing-slide-shows-with-pandoc.html
