+++
title = "Update Digital Ocean Kernel"
date = "2016-10-11 21:24:17"
tags = ["digitalocean"]
+++

Check Which Kernel is Currently in Use

To display both the kernel version and your system's architecture (32-bit or 64-bit), type:
<!--more-->
```sh
uname -ir
```

# Upgrading All Packages and Using the Newest Kernel

```sh
sudo apt-get update
sudo apt-get dist-upgrade
sudo reboot

sudo apt-get install update-manager-core
sudo do-release-upgrade
```

# Reference

[How To Upgrade to Ubuntu 16.04 LTS | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-upgrade-to-ubuntu-16-04-lts)
[How To Update a DigitalOcean Server's Kernel | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-update-a-digitalocean-server-s-kernel)
