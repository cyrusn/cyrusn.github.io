---
title: Config Digital Ocean Droplet as Microservice
date: '2016-09-29 08:31:57'
tags:
  - apache
  - SSL
  - TLS
  - tmux
---

# Objective

This page is a notes for setting apache server for my digital ocean droplet

# Setting

## Apache2

- in file `/etc/hosts`
  - change `127.0.0.1 localhost` to `127.0.1.1 localhost WordPress-CaLP-LPSS`

- change Port
  - in file `/etc/apache2/port.conf`
    - add `ServerName localhost`
    - change the line `listen *:80` to `listen 127.0.0.1:4000`
    - disable other modules `<IfModule ssl_module>` and `<IfModule mod_gnutls.c>`
  - in file `/etc/apache2/site-enabled/000-default.conf`
    - change the line `<VirtualHost *:80>` to `<VirtualHost localhost:4000>`

- restart apache2
  - run `sudo /etc/init.d/apache2 restart`

## Wordpress

config WordPress to use proxy

- add the following lines in `/var/www/html/wp-config.php`

```sh
define(‘WP_PROXY_HOST’, ‘careers.liping.edu.hk’);
define(‘WP_PROXY_PORT’, ’80’);`
define('WP_PROXY_BYPASS_HOSTS', 'localhost, careers.liping.edu.hk');
define('FORCE_SSL_ADMIN', true);
```

- add the following lines in `/var/www/html/wp-content/themes/yourTheme/function.php

```sh
update_option( 'siteurl', 'http://careers.liping.edu.hk' );
update_option( 'home', 'http://careers.liping.edu.hk' );
```

## Caddy Server

```sh
careers.liping.edu.hk

proxy / localhost:4000 {
  header_upstream Host {host}
}
```

using `caddy` to run the server through `tmux`

# TODO

- [x] set `apache` only serve for `localhost`
- [x] use `caddy` to create a proxy server with `https`
- [ ] fix all Mixed Content problem
- [ ] use Goggle `oauth2` login instead
- [ ] set autostart and run in daemon with `upstart`

# Reference

- [DenBeke – Running Caddy Server as a service with Upstart][&1]
- [How To Configure the Apache Web Server on an Ubuntu or Debian VPS | DigitalOcean][&2]
- [Is TLS Fast Yet?][&3]
- [Proxy server - Wikiwand][&4]
- [Webmaster - Wikiwand][&5]

# Key Word

- reverse proxy
- Microservice
- load balancing


[&1]: https://denbeke.be/blog/servers/running-caddy-server-as-a-service/
[&2]: https://www.digitalocean.com/community/tutorials/how-to-configure-the-apache-web-server-on-an-ubuntu-or-debian-vps
[&3]: https://istlsfastyet.com/
[&4]: https://www.wikiwand.com/en/Proxy_server#/Web_proxy_servers
[&5]: https://www.wikiwand.com/en/Webmaster
