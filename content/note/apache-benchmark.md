---
title: "Apache Benchmark"
subtitle: ""
description:
toc: true
draft: true
katex: false
mermaid: false
abcjs: false
date: 2018-05-29T12:13:46+08:00
tags:
---

# Apache Benchmarking Tool
- [ab - Apache HTTP server benchmarking tool - Apache HTTP Server Version 2.4](https://httpd.apache.org/docs/2.4/programs/ab.html)


# Examples
```sh
# -n: 200 requests
# -c: 10 request perform at a time
# -H: custom header
ab -m"GET" -n200 -c10 -H"jwt:you.jwt-token.here" http://127.0.0.1:5000/your/link/to/api
```
