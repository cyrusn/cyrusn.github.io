---
title: Digital Ocean Notes
date: '2016-03-26 12:31:11'
toc: true
tags:
  - do
  - scp
---

# connect to console
```sh
# prepare ssh keys first

# login droplet
ssh root@ip.of.the.droplet

# to copy a file from B to A while logged into B
scp /path/to/file username@a:/path/to/destination

# to copy a file from B to A while logged into A
scp username@b:/path/to/file /path/to/destination
```

# perpare ssh key

- [How To Use SSH Keys with DigitalOcean Droplets | DigitalOcean][@1]

# achieve
- Save a snapshot and delete droplet
- restore droplet by the snapshot

# Update Server's Kernel
- [How To Update a DigitalOcean Server's Kernel | DigitalOcean][@2] 

<!-- reference links -->

[@1]: https://www.digitalocean.com/community/tutorials/how-to-use-ssh-keys-with-digitalocean-droplets
[@2]: https://www.digitalocean.com/community/tutorials/how-to-update-a-digitalocean-server-s-kernel