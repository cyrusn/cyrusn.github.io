---
title: Create Startup Script in Linux
date: '2016-10-21 12:43:34'
toc: true
tags:
  - linux
  - startup
---

Create a new script in /etc/init.d/myscript.

```sh
vi /etc/init.d/myscript
```

(Obviously it doesn't have to be called "myscript".) In this script, do whatever you want to do. Perhaps just run the script you mentioned.
<!-- more -->

```sh
#!/bin/sh
/path/to/my/script.sh
```

Make it executable.

```sh
chmod 755 /etc/init.d/myscript
```

Configure the init system to run this script at startup.

```sh
update-rc.d myscript defaults
```

ystem to run this script at startup.

```sh
update-rc.d myscript defaults
```
