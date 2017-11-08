---
title: SSL TLS
date: '2016-09-25 21:27:54'
tags:
  - security
  - SSL
  - TLS
---

[Transport Layer Security][tls] (TLS) and its predecessor, [Secure Sockets Layer][ssl] (SSL), are cryptographic protocols designed to provide communications security over a computer network.

The authentication relied on Certificate Authorities (CA) and a public key infrastructure using [X.509][&01] certificates. The server register with a CA and sign its public key with the key of CA for a fee. The client, after receiving the public key from server, verifies it with the CA.

[File:Ssl handshake with two way authentication with certificates.png - Wikimedia Commons][&02]

OpenSSL is a toolkit for the TLS and SSL.

> see [`Open SSL`](quiver-note-url/3629018E-52DF-4158-A897-9C77C7446BE2)

- [ImperialViolet - Overclocking SSL][&03]
- [ImperialViolet - Public key pinning][&04]
- [Survival Guide - TLS/SSL and SSL (X.509) Certificates (CA-signed and Self-Signed)][&05]
- [Is TLS Fast Yet?][&06]
- [BetterCrypto⋅org][&07]
- [Rolling out Public Key Pinning with HPKP Reporting -- Google Web Updates][&08]
- [The SSL/TLS Handshake: an Overview – SSL Information and FAQ][&09]
- [SSL: it's hard to do right | The Recompiler][&10]
- [How the NSA (may have) put a backdoor in RSA's cryptography: A technical primer | Ars Technica][&11]
- [Critics slam SSL authority for minting certificate for impersonating sites | Ars Technica][&12]
- [How to obtain and install an SSL/TLS certificate, for free | Ars Technica][&13]
- [Web served, part 2: Securing things with SSL/TLS | Ars Technica][&14]


# HSTS
- [HTTP Strict Transport Security - Wikiwand][&15]: always use HTTPS
- [HSTS Preload List Submission][&15]

# SSL checkers
- [Qualys SSL Labs][&16]
- [SSL Certificate Checker - Diagnostic Tool | DigiCert.com][&17]

# Perfect Forward Secrecy (PFS)
- [SSL Enabling Forward Secrecy | DigiCert.com][&18]

# Issues

## CA

As it turns out, CA may not be trust-worthy after all. There are many instances of CA issuing fraudulent certificates (willingly or being hacked).

- [How the Comodo certificate fraud calls CA trust into question | Ars Technica][&19]
- [Google warns of unauthorized TLS certificates trusted by almost all OSes[Updated] | Ars Technica][&20] [Google Chrome will banish Chinese certificate authority for breach of trust | Ars Technica][&21]
- [Another fraudulent certificate raises the same old questions about certificate authorities | Ars Technica][&22]

## Heartbleed (2014)
- [Heartbleed Bug][&23]
- [Heartbleed – Andrew Kennedy][&24]
- [Critical crypto bug exposes Yahoo Mail, other passwords Russian roulette-style | Ars Technica][&25]
- [Coder in a World of Code: My Heart Bleeds for OpenSSL][&26]

## Renegotiation Gap (2009)
- [Truth in SOA: Really Understanding the SSL/TLS Vulnerability (Part 1)][&27]

# Let's Encrypt
- [Let's Encrypt][&28]
- [How It Works][&29]
- [Technology][&30]
- [The CA's Role in Fighting Phishing and Malware - Let's Encrypt - Free SSL/TLS Certificates][&31]
- [Rate Limits for Let's Encrypt - Documentation - Let's Encrypt Community Support][&32]
- [Let's Encrypt Demo - YouTube][&33]
- [Generate free SSL certificates with Docker and LetsEncrypt | Tit Petrič][&34]
- [How To Secure Nginx with Let's Encrypt on Ubuntu 16.04 | DigitalOcean][&35]
- [Let's Encrypt with HAProxy][&36]
- [Let's Encrypt on Raspberry Pi][&37]
- [adventures in haproxy: tcp, tls, https, ssh, openvpn][&38]
- [LetsEncrypt on Nginx][&39]
- [How to configure Nginx with free Let's Encrypt SSL certificate on Debian or Ubuntu Linux][&40]

## Clients
- [letsencrypt][&41]
- [Certbot][&42]
- [acmetool][&43]
- [diafygi/acme-tiny: A tiny script to issue and renew TLS certs from Let's Encrypt][&44]
- [Neilpang/le: Simplest shell script for LetsEncrypt free Certificate client][&45]
- [xenolf/lego: Let's Encrypt client and ACME library written in Go][&46] Used in Caddy
- [Daplie/node-letsencrypt: letsencrypt for node.js][&47]
- [DylanPiercey/auto-sni: Free, automated HTTPS for NodeJS made easy.][&48]

## Heroku
- [Announcing Heroku Free SSL Beta and Flexible Dyno Hours | Heroku][&49]
- [Let's Encrypt and Heroku [Solved] - Server - Let's Encrypt Community Support][&50]
- [Let's Encrypt with a Rails app on Heroku // Collective Idea | Crafting web and mobile software based in Holland, Michigan][&51]
- [Use Let's Encrypt TLS certificate on Heroku -- Sikachu's Blog -- Medium][&52]
- [SSL Endpoint | Heroku Dev Center][&53]
- [Set up CloudFlare's free SSL on Heroku][&54]

# Standards

- [RFC 2986 - PKCS #10: Certification Request Syntax Specification Version 1.7][&55]
- [RFC 3447 - Public-Key Cryptography Standards (PKCS) #1: RSA Cryptography Specifications Version 2.1][&56]
- [RFC 5958 - Asymmetric Key Packages][&57]
- [RFC 6101 - The Secure Sockets Layer (SSL) Protocol Version 3.0][&58]
- [RFC 7525 - Recommendations for Secure Use of Transport Layer Security (TLS) and Datagram Transport Layer Security (DTLS)][&59]
- [RFC 7292 - PKCS #12: Personal Information Exchange Syntax v1.1][&60]

[ssl]: https://www.digicert.com/ssl.htm
[tls]: http://www.wikiwand.com/en/Transport_Layer_Security
[&01]: http://www.wikiwand.com/en/X.509
[&02]: https://commons.wikimedia.org/wiki/File:Ssl_handshake_with_two_way_authentication_with_certificates.png
[&03]: https://www.imperialviolet.org/2010/06/25/overclocking-ssl.html
[&04]: https://www.imperialviolet.org/2011/05/04/pinning.html
[&05]: http://www.zytrax.com/tech/survival/ssl.html
[&06]: https://istlsfastyet.com/
[&07]: https://bettercrypto.org/
[&08]: https://developers.google.com/web/updates/2015/09/HPKP-reporting-with-chrome-46
[&09]: https://info.ssl.com/tls-handshake/
[&10]: https://recompilermag.com/issues/issue-1/ssl-its-hard-to-do-right/
[&11]: http://arstechnica.com/security/2014/01/how-the-nsa-may-have-put-a-backdoor-in-rsas-cryptography-a-technical-primer/
[&12]: http://arstechnica.com/business/2012/02/critics-slam-ssl-authority-for-minting-cert-used-to-impersonate-sites/
[&13]: http://arstechnica.com/security/2009/12/how-to-get-set-with-a-secure-sertificate-for-free/
[&14]: http://arstechnica.com/information-technology/2012/11/securing-your-web-server-with-ssltls/#p4
[&15]: http://www.wikiwand.com/en/HTTP_Strict_Transport_Security
[&15]: https://hstspreload.appspot.com/
[&16]: https://www.ssllabs.com/
[&17]: https://www.digicert.com/help/
[&18]: https://www.digicert.com/ssl-support/ssl-enabling-perfect-forward-secrecy.htm
[&19]: http://arstechnica.com/security/2011/03/how-the-comodo-certificate-fraud-calls-ca-trust-into-question/
[&20]: http://arstechnica.com/security/2015/03/google-warns-of-unauthorized-tls-certificates-trusted-by-almost-all-oses/
[&21]: http://arstechnica.com/security/2015/04/google-chrome-will-banish-chinese-certificate-authority-for-breach-of-trust/
[&22]: http://arstechnica.com/security/2011/08/earlier-this-year-an-iranian/
[&23]: http://heartbleed.com/
[&24]: http://akenn.org/blog/Heartbleed/
[&25]: http://arstechnica.com/security/2014/04/critical-crypto-bug-exposes-yahoo-mail-passwords-russian-roulette-style/
[&26]: http://coderinaworldofcode.blogspot.hk/2014/04/my-heart-bleeds-for-openssl.html
[&27]: http://soatruth.blogspot.hk/2009/12/really-understanding-ssltls.html
[&28]: https://letsencrypt.org/
[&29]: https://letsencrypt.org/howitworks/
[&30]: https://letsencrypt.org/howitworks/technology/
[&31]: https://letsencrypt.org/2015/10/29/phishing-and-malware.html
[&32]: https://community.letsencrypt.org/t/rate-limits-for-lets-encrypt/6769
[&33]: https://www.youtube.com/watch?v=Gas_sSB-5SU
[&34]: https://scene-si.org/2016/01/23/generate-free-ssl-certificates-with-docker-and-letsencrypt/
[&35]: https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04
[&36]: https://coolaj86.com/articles/lets-encrypt-with-haproxy/
[&37]: https://coolaj86.com/articles/lets-encrypt-on-raspberry-pi/
[&38]: https://coolaj86.com/articles/adventures-in-haproxy-tcp-tls-https-ssh-openvpn/
[&39]: https://tryingtobeawesome.com/letsencrypt/
[&40]: http://www.cyberciti.biz/faq/how-to-configure-nginx-with-free-lets-encrypt-ssl-certificate-on-debian-or-ubuntu-linux/
[&41]: https://github.com/letsencrypt/
[&42]: https://certbot.eff.org/
[&43]: https://hlandau.github.io/acme/
[&44]: https://github.com/diafygi/acme-tiny
[&45]: https://github.com/Neilpang/le
[&46]: https://github.com/xenolf/lego
[&47]: https://github.com/Daplie/node-letsencrypt
[&48]: https://github.com/DylanPiercey/auto-sni
[&49]: https://blog.heroku.com/archives/2016/5/18/announcing_heroku_free_ssl_beta_and_flexible_dyno_hours
[&50]: https://community.letsencrypt.org/t/lets-encrypt-and-heroku-solved/4272/18
[&51]: http://collectiveidea.com/blog/archives/2016/01/12/lets-encrypt-with-a-rails-app-on-heroku/
[&52]: https://sikac.hu/use-let-s-encrypt-tls-certificate-on-heroku-65f853870d90#.ut542pcuk
[&53]: https://devcenter.heroku.com/articles/ssl-endpoint
[&54]: https://robots.thoughtbot.com/set-up-cloudflare-free-ssl-on-heroku
[&55]: http://tools.ietf.org/html/rfc2986
[&56]: http://tools.ietf.org/html/rfc3447
[&57]: http://tools.ietf.org/html/rfc5958
[&58]: http://tools.ietf.org/html/rfc6101
[&59]: https://tools.ietf.org/html/rfc7525
[&60]: http://tools.ietf.org/html/rfc7292
