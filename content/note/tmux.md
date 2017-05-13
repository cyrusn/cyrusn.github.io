---
date: 2017-05-12T13:43:00.000Z
subtitle: ''
tags:
  - tmux
title: tmux Notes
---

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
