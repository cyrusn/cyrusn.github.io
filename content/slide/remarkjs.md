---
title: "My RemarkJS CSS"
subtitle: ""
description:
draft: true
remarkOption: 
  ratio: 16:9
date: 2018-05-24T19:59:24+08:00
tags:

---
class: center middle bg-primary text-light
# RemarkJS - CSS Guide
<hr class="bg-light">
## CyrusN

---
# Background

- `class: center middle bg-primary text-light` 

---
# Center list
.blockquote-info[
> ### Guide
> Use `.fit-content.mx-auto` to create a centered list
]

.center[
# Example
.fit-content.mx-auto[
- apple
- orange
- pear
]
]


---
class: center
# This is normal image
But the image is too **big**
![image][@1]

---
class: center

# `img-100` class to set max width to 100%
.img-100[![image][@1]]

---
class: center

# `img-75` class to set max width to 75%
.img-75[![image][@1]]

---
# Also available on ...
- `img-50`
- `img-25`

---
class: center

# `overflow` can make the image overflow

Use together with `.img-100` and `h-75` can produce a better overflow image

.img-100.overflow.h-75[
![image][@1]
]

---
# Blockquote

Using `.blockquote-primary` can  

.blockquote-primary[
> ### blockquote
> This is primary blockquote's content.
]

# Syntax
``` md
.blockquote-primary[
> this is primary blockquote
]
```

Other available color: `primary`, `secondary`, `success`, `info`, `warning`, `danger`, `light`, `dark`

---
# Two Column
.row[
.col-6[
- This is column 1
  + apple
  + orange
]

.col-6[
- This is column 2
  + alpha
  + beta
  + see syntax on next page
]
]
---
# Syntax for two column
``` md
.row[
.col-6[
- This is column 1
  + apple
  + orange
]

.col-6[
- This is column 2
  + alpha
  + beta
]
]
```

---
class: row

.col-3.bg-light.sidebar[
### Sidebar
- alpha
- beta
- gammer
]

.col-9[
## Syntax 

```md
class: row

.col-3.bg-light.sidebar[
### Sidebar
- alpha
- beta
- gammer
]

.col-9[
This is the syntax 
...
]
```
]

---
# Footnote

This is example.sup[1] of footnote.sup[2], here is google.com.sup[3]
.footnote[
1. Hello! World.
2. see syntax on next page
3. https://google.com
]

## Syntax
``` md
This is example of footnote.sup[1] .footnote[1: see syntax on next page]
```
 
---
class: center middle bg-info text-light

# .text-danger[♥] Thanks .text-danger[♥]

<!-- reference links -->

[@1]: https://www.globallandscapesforum.org/wp-content/uploads/2017/11/situgunung-flipped-1600.jpg
