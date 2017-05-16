---
title: Batch Download YouTube
date: '2016-10-07 23:14:04'
---

# Using `youtube-dl` and `xargs`

```sh
cat << EOF | xargs -I@ youtube-dl https://www.youtube.com/watch?v=@
YouTubeVideoID-1
YouTubeVideoID-2
YouTubeVideoID-3
EOF
```

# Useful options

- `--extract-audio` for download audio only
- `--audio-format mp3` choose the audio format
- `--audio-quality 2` set the audio quality, 0(best)-9(worst), (default 5)
