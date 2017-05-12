+++
title = "Note to Ocean Digital"
date = "2016-03-26 12:31:11"
tags = ["do"]
+++
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
<!--more-->

# perpare ssh key
- [How To Use SSH Keys with DigitalOcean Droplets | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-ssh-keys-with-digitalocean-droplets)

# achieve
- Save a snapshot and delete droplet
- restore droplet by the snapshot

# using tmux

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

## navigate in tmux
- `Ctrl-b` then `[` then you can use your normal navigation keys to scroll around (eg. Up Arrow or PgDn).
- Press `q` to quit scroll mode.

- just quit terminal for exit the session

# Update Server's Kernel

[How To Update a DigitalOcean Server's Kernel | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-update-a-digitalocean-server-s-kernel)
