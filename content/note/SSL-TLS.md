---
title: SSL TLS
date: '2016-09-25 21:27:54'
tags:
  - security
  - SSL
  - TLS
---

[Transport Layer Security][@01] (TLS) and its predecessor, [Secure Sockets Layer][@02] (SSL), are cryptographic protocols designed to provide communications security over a computer network.

The authentication relied on Certificate Authorities (CA) and a public key infrastructure using [X.509][@03] certificates. The server register with a CA and sign its public key with the key of CA for a fee. The client, after receiving the public key from server, verifies it with the CA.

[File:Ssl handshake with two way authentication with certificates.png - Wikimedia Commons][@04]

OpenSSL is a toolkit for the TLS and SSL.

> see [`Open SSL`][@05]

- [ImperialViolet - Overclocking SSL][@06]
- [ImperialViolet - Public key pinning][@07]
- [Survival Guide - TLS/SSL and SSL (X.509) Certificates (CA-signed and Self-Signed)][@08]
- [Is TLS Fast Yet?][@09]
- [BetterCrypto⋅org][@10]
- [Rolling out Public Key Pinning with HPKP Reporting -- Google Web Updates][@11]
- [The SSL/TLS Handshake: an Overview – SSL Information and FAQ][@12]
- [SSL: it's hard to do right | The Recompiler][@13]
- [How the NSA (may have) put a backdoor in RSA's cryptography: A technical primer | Ars Technica][@14]
- [Critics slam SSL authority for minting certificate for impersonating sites | Ars Technica][@15]
- [How to obtain and install an SSL/TLS certificate, for free | Ars Technica][@16]
- [Web served, part 2: Securing things with SSL/TLS | Ars Technica][@17]


# HSTS
- [HTTP Strict Transport Security - Wikiwand][@18]: always use HTTPS
- [HSTS Preload List Submission][@19]

# SSL checkers
- [Qualys SSL Labs][@20]
- [SSL Certificate Checker - Diagnostic Tool | DigiCert.com][@21]

# Perfect Forward Secrecy (PFS)
- [SSL Enabling Forward Secrecy | DigiCert.com][@22]

# Issues

## CA

As it turns out, CA may not be trust-worthy after all. There are many instances of CA issuing fraudulent certificates (willingly or being hacked).

- [How the Comodo certificate fraud calls CA trust into question | Ars Technica][@23]
- [Google warns of unauthorized TLS certificates trusted by almost all OSes[Updated] | Ars Technica][@24] [Google Chrome will banish Chinese certificate authority for breach of trust | Ars Technica][@25]
- [Another fraudulent certificate raises the same old questions about certificate authorities | Ars Technica][@26]

## Heartbleed (2014)
- [Heartbleed Bug][@27]
- [Heartbleed – Andrew Kennedy][@28]
- [Critical crypto bug exposes Yahoo Mail, other passwords Russian roulette-style | Ars Technica][@29]
- [Coder in a World of Code: My Heart Bleeds for OpenSSL][@30]

## Renegotiation Gap (2009)
- [Truth in SOA: Really Understanding the SSL/TLS Vulnerability (Part 1)][@31]

# Let's Encrypt
- [Let's Encrypt][@32]
- [How It Works][@33]
- [Technology][@34]
- [The CA's Role in Fighting Phishing and Malware - Let's Encrypt - Free SSL/TLS Certificates][@35]
- [Rate Limits for Let's Encrypt - Documentation - Let's Encrypt Community Support][@36]
- [Let's Encrypt Demo - YouTube][@37]
- [Generate free SSL certificates with Docker and LetsEncrypt | Tit Petrič][@38]
- [How To Secure Nginx with Let's Encrypt on Ubuntu 16.04 | DigitalOcean][@39]
- [Let's Encrypt with HAProxy][@40]
- [Let's Encrypt on Raspberry Pi][@41]
- [adventures in haproxy: tcp, tls, https, ssh, openvpn][@42]
- [LetsEncrypt on Nginx][@43]
- [How to configure Nginx with free Let's Encrypt SSL certificate on Debian or Ubuntu Linux][@44]

## Clients
- [letsencrypt][@45]
- [Certbot][@46]
- [acmetool][@47]
- [diafygi/acme-tiny: A tiny script to issue and renew TLS certs from Let's Encrypt][@48]
- [Neilpang/le: Simplest shell script for LetsEncrypt free Certificate client][@49]
- [xenolf/lego: Let's Encrypt client and ACME library written in Go][@50] Used in Caddy
- [Daplie/node-letsencrypt: letsencrypt for node.js][@51]
- [DylanPiercey/auto-sni: Free, automated HTTPS for NodeJS made easy.][@52]

## Heroku
- [Announcing Heroku Free SSL Beta and Flexible Dyno Hours | Heroku][@53]
- [Let's Encrypt and Heroku [Solved] - Server - Let's Encrypt Community Support][@54]
- [Let's Encrypt with a Rails app on Heroku // Collective Idea | Crafting web and mobile software based in Holland, Michigan][@55]
- [Use Let's Encrypt TLS certificate on Heroku -- Sikachu's Blog -- Medium][@56]
- [SSL Endpoint | Heroku Dev Center][@57]
- [Set up CloudFlare's free SSL on Heroku][@58]

# Standards

- [RFC 2986 - PKCS #10: Certification Request Syntax Specification Version 1.7][@59]
- [RFC 3447 - Public-Key Cryptography Standards (PKCS) #1: RSA Cryptography Specifications Version 2.1][@60]
- [RFC 5958 - Asymmetric Key Packages][@61]
- [RFC 6101 - The Secure Sockets Layer (SSL) Protocol Version 3.0][@62]
- [RFC 7525 - Recommendations for Secure Use of Transport Layer Security (TLS) and Datagram Transport Layer Security (DTLS)][@63]
- [RFC 7292 - PKCS #12: Personal Information Exchange Syntax v1.1][@64]

<!-- reference links -->

[@01]: http://www.wikiwand.com/en/Transport_Layer_Security
[@02]: https://www.digicert.com/ssl.htm
[@03]: http://www.wikiwand.com/en/X.509
[@04]: https://commons.wikimedia.org/wiki/File:Ssl_handshake_with_two_way_authentication_with_certificates.png
[@05]: quiver-note-url/3629018E-52DF-4158-A897-9C77C7446BE2
[@06]: https://www.imperialviolet.org/2010/06/25/overclocking-ssl.html
[@07]: https://www.imperialviolet.org/2011/05/04/pinning.html
[@08]: http://www.zytrax.com/tech/survival/ssl.html
[@09]: https://istlsfastyet.com/
[@10]: https://bettercrypto.org/
[@11]: https://developers.google.com/web/updates/2015/09/HPKP-reporting-with-chrome-46
[@12]: https://info.ssl.com/tls-handshake/
[@13]: https://recompilermag.com/issues/issue-1/ssl-its-hard-to-do-right/
[@14]: http://arstechnica.com/security/2014/01/how-the-nsa-may-have-put-a-backdoor-in-rsas-cryptography-a-technical-primer/
[@15]: http://arstechnica.com/business/2012/02/critics-slam-ssl-authority-for-minting-cert-used-to-impersonate-sites/
[@16]: http://arstechnica.com/security/2009/12/how-to-get-set-with-a-secure-sertificate-for-free/
[@17]: http://arstechnica.com/information-technology/2012/11/securing-your-web-server-with-ssltls/#p4
[@18]: http://www.wikiwand.com/en/HTTP_Strict_Transport_Security
[@19]: http://www.wikiwand.com/en/HTTP_Strict_Transport_Security
[@20]: https://www.ssllabs.com/
[@21]: https://www.digicert.com/help/
[@22]: https://www.digicert.com/ssl-support/ssl-enabling-perfect-forward-secrecy.htm
[@23]: http://arstechnica.com/security/2011/03/how-the-comodo-certificate-fraud-calls-ca-trust-into-question/
[@24]: http://arstechnica.com/security/2015/03/google-warns-of-unauthorized-tls-certificates-trusted-by-almost-all-oses/
[@25]: http://arstechnica.com/security/2015/04/google-chrome-will-banish-chinese-certificate-authority-for-breach-of-trust/
[@26]: http://arstechnica.com/security/2011/08/earlier-this-year-an-iranian/
[@27]: http://heartbleed.com/
[@28]: http://akenn.org/blog/Heartbleed/
[@29]: http://arstechnica.com/security/2014/04/critical-crypto-bug-exposes-yahoo-mail-passwords-russian-roulette-style/
[@30]: http://coderinaworldofcode.blogspot.hk/2014/04/my-heart-bleeds-for-openssl.html
[@31]: http://soatruth.blogspot.hk/2009/12/really-understanding-ssltls.html
[@32]: https://letsencrypt.org/
[@33]: https://letsencrypt.org/howitworks/
[@34]: https://letsencrypt.org/howitworks/technology/
[@35]: https://letsencrypt.org/2015/10/29/phishing-and-malware.html
[@36]: https://community.letsencrypt.org/t/rate-limits-for-lets-encrypt/6769
[@37]: https://www.youtube.com/watch?v=Gas_sSB-5SU
[@38]: https://scene-si.org/2016/01/23/generate-free-ssl-certificates-with-docker-and-letsencrypt/
[@39]: https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04
[@40]: https://coolaj86.com/articles/lets-encrypt-with-haproxy/
[@41]: https://coolaj86.com/articles/lets-encrypt-on-raspberry-pi/
[@42]: https://coolaj86.com/articles/adventures-in-haproxy-tcp-tls-https-ssh-openvpn/
[@43]: https://tryingtobeawesome.com/letsencrypt/
[@44]: http://www.cyberciti.biz/faq/how-to-configure-nginx-with-free-lets-encrypt-ssl-certificate-on-debian-or-ubuntu-linux/
[@45]: https://github.com/letsencrypt/
[@46]: https://certbot.eff.org/
[@47]: https://hlandau.github.io/acme/
[@48]: https://github.com/diafygi/acme-tiny
[@49]: https://github.com/Neilpang/le
[@50]: https://github.com/xenolf/lego
[@51]: https://github.com/Daplie/node-letsencrypt
[@52]: https://github.com/DylanPiercey/auto-sni
[@53]: https://blog.heroku.com/archives/2016/5/18/announcing_heroku_free_ssl_beta_and_flexible_dyno_hours
[@54]: https://community.letsencrypt.org/t/lets-encrypt-and-heroku-solved/4272/18
[@55]: http://collectiveidea.com/blog/archives/2016/01/12/lets-encrypt-with-a-rails-app-on-heroku/
[@56]: https://sikac.hu/use-let-s-encrypt-tls-certificate-on-heroku-65f853870d90#.ut542pcuk
[@57]: https://devcenter.heroku.com/articles/ssl-endpoint
[@58]: https://robots.thoughtbot.com/set-up-cloudflare-free-ssl-on-heroku
[@59]: http://tools.ietf.org/html/rfc2986
[@60]: http://tools.ietf.org/html/rfc3447
[@61]: http://tools.ietf.org/html/rfc5958
[@62]: http://tools.ietf.org/html/rfc6101
[@63]: https://tools.ietf.org/html/rfc7525
[@64]: http://tools.ietf.org/html/rfc7292
