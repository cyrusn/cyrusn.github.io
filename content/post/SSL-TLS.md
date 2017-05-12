+++
title = "SSL TLS"
date = "2016-09-25 21:27:54"
tags = ["security", "SSL", "TLS"]
+++
[Transport Layer Security][tls] (TLS) and its predecessor, [Secure Sockets Layer][ssl] (SSL), are cryptographic protocols designed to provide communications security over a computer network.

The authentication relied on Certificate Authorities (CA) and a public key infrastructure using [X.509](http://www.wikiwand.com/en/X.509) certificates.
The server register with a CA and sign its public key with the key of CA for a fee. The client, after receiving the public key from server, verifies it with the CA.

[File:Ssl handshake with two way authentication with certificates.png - Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ssl_handshake_with_two_way_authentication_with_certificates.png)

OpenSSL is a toolkit for the TLS and SSL.
> see [`Open SSL`](quiver-note-url/3629018E-52DF-4158-A897-9C77C7446BE2)

[ImperialViolet - Overclocking SSL](https://www.imperialviolet.org/2010/06/25/overclocking-ssl.html)
[ImperialViolet - Public key pinning](https://www.imperialviolet.org/2011/05/04/pinning.html)
[Survival Guide - TLS/SSL and SSL (X.509) Certificates (CA-signed and Self-Signed)](http://www.zytrax.com/tech/survival/ssl.html)
[Is TLS Fast Yet?](https://istlsfastyet.com/)
[BetterCrypto⋅org](https://bettercrypto.org/)
[Rolling out Public Key Pinning with HPKP Reporting — Google Web Updates](https://developers.google.com/web/updates/2015/09/HPKP-reporting-with-chrome-46)
[The SSL/TLS Handshake: an Overview – SSL Information and FAQ](https://info.ssl.com/tls-handshake/)
[SSL: it’s hard to do right | The Recompiler](https://recompilermag.com/issues/issue-1/ssl-its-hard-to-do-right/)

[How the NSA (may have) put a backdoor in RSA’s cryptography: A technical primer | Ars Technica](http://arstechnica.com/security/2014/01/how-the-nsa-may-have-put-a-backdoor-in-rsas-cryptography-a-technical-primer/)
[Critics slam SSL authority for minting certificate for impersonating sites | Ars Technica](http://arstechnica.com/business/2012/02/critics-slam-ssl-authority-for-minting-cert-used-to-impersonate-sites/)

[How to obtain and install an SSL/TLS certificate, for free | Ars Technica](http://arstechnica.com/security/2009/12/how-to-get-set-with-a-secure-sertificate-for-free/)
[Web served, part 2: Securing things with SSL/TLS | Ars Technica](http://arstechnica.com/information-technology/2012/11/securing-your-web-server-with-ssltls/#p4)

## HSTS

[HTTP Strict Transport Security - Wikiwand](http://www.wikiwand.com/en/HTTP_Strict_Transport_Security): always use HTTPS
[HSTS Preload List Submission](https://hstspreload.appspot.com/)

## SSL checkers

[Qualys SSL Labs](https://www.ssllabs.com/)
[SSL Certificate Checker - Diagnostic Tool | DigiCert.com](https://www.digicert.com/help/)

## Perfect Forward Secrecy (PFS)

[SSL Enabling Forward Secrecy | DigiCert.com](https://www.digicert.com/ssl-support/ssl-enabling-perfect-forward-secrecy.htm)

## Issues

### CA

As it turns out, CA may not be trust-worthy after all. There are many instances of CA issuing fraudulent certificates (willingly or being hacked).

[How the Comodo certificate fraud calls CA trust into question | Ars Technica](http://arstechnica.com/security/2011/03/how-the-comodo-certificate-fraud-calls-ca-trust-into-question/)

[Google warns of unauthorized TLS certificates trusted by almost all OSes [Updated] | Ars Technica](http://arstechnica.com/security/2015/03/google-warns-of-unauthorized-tls-certificates-trusted-by-almost-all-oses/)
[Google Chrome will banish Chinese certificate authority for breach of trust | Ars Technica](http://arstechnica.com/security/2015/04/google-chrome-will-banish-chinese-certificate-authority-for-breach-of-trust/)

[Another fraudulent certificate raises the same old questions about certificate authorities | Ars Technica](http://arstechnica.com/security/2011/08/earlier-this-year-an-iranian/)

http://arstechnica.com/search/?ie=UTF-8&q=+Certificate+Authorities

### Heartbleed (2014)

[Heartbleed Bug](http://heartbleed.com/)
[Heartbleed – Andrew Kennedy](http://akenn.org/blog/Heartbleed/)
[Critical crypto bug exposes Yahoo Mail, other passwords Russian roulette-style | Ars Technica](http://arstechnica.com/security/2014/04/critical-crypto-bug-exposes-yahoo-mail-passwords-russian-roulette-style/)
[Coder in a World of Code: My Heart Bleeds for OpenSSL](http://coderinaworldofcode.blogspot.hk/2014/04/my-heart-bleeds-for-openssl.html)

### Renegotiation Gap (2009)

[Truth in SOA: Really Understanding the SSL/TLS Vulnerability (Part 1)](http://soatruth.blogspot.hk/2009/12/really-understanding-ssltls.html)

## Let's Encrypt

[Let's Encrypt](https://letsencrypt.org/)
[How It Works](https://letsencrypt.org/howitworks/)
[Technology](https://letsencrypt.org/howitworks/technology/)
[The CA's Role in Fighting Phishing and Malware - Let's Encrypt - Free SSL/TLS Certificates](https://letsencrypt.org/2015/10/29/phishing-and-malware.html)

[Rate Limits for Let's Encrypt - Documentation - Let's Encrypt Community Support](https://community.letsencrypt.org/t/rate-limits-for-lets-encrypt/6769)

[Let's Encrypt Demo - YouTube](https://www.youtube.com/watch?v=Gas_sSB-5SU)
[Generate free SSL certificates with Docker and LetsEncrypt | Tit Petrič](https://scene-si.org/2016/01/23/generate-free-ssl-certificates-with-docker-and-letsencrypt/)
[How To Secure Nginx with Let's Encrypt on Ubuntu 16.04 | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04)
[Let's Encrypt with HAProxy](https://coolaj86.com/articles/lets-encrypt-with-haproxy/)
[Let's Encrypt on Raspberry Pi](https://coolaj86.com/articles/lets-encrypt-on-raspberry-pi/)
[adventures in haproxy: tcp, tls, https, ssh, openvpn](https://coolaj86.com/articles/adventures-in-haproxy-tcp-tls-https-ssh-openvpn/)
[LetsEncrypt on Nginx](https://tryingtobeawesome.com/letsencrypt/)
[How to configure Nginx with free Let’s Encrypt SSL certificate on Debian or Ubuntu Linux](http://www.cyberciti.biz/faq/how-to-configure-nginx-with-free-lets-encrypt-ssl-certificate-on-debian-or-ubuntu-linux/)

### Clients

[letsencrypt](https://github.com/letsencrypt/)
[Certbot](https://certbot.eff.org/)
[acmetool](https://hlandau.github.io/acme/)
[diafygi/acme-tiny: A tiny script to issue and renew TLS certs from Let's Encrypt](https://github.com/diafygi/acme-tiny)
[Neilpang/le: Simplest shell script for LetsEncrypt free Certificate client](https://github.com/Neilpang/le)

[xenolf/lego: Let's Encrypt client and ACME library written in Go](https://github.com/xenolf/lego) Used in Caddy

[Daplie/node-letsencrypt: letsencrypt for node.js](https://github.com/Daplie/node-letsencrypt)
[DylanPiercey/auto-sni: Free, automated HTTPS for NodeJS made easy.](https://github.com/DylanPiercey/auto-sni)

### Heroku

[Announcing Heroku Free SSL Beta and Flexible Dyno Hours | Heroku](https://blog.heroku.com/archives/2016/5/18/announcing_heroku_free_ssl_beta_and_flexible_dyno_hours)
[Let's Encrypt and Heroku [Solved] - Server - Let's Encrypt Community Support](https://community.letsencrypt.org/t/lets-encrypt-and-heroku-solved/4272/18)
[Let's Encrypt with a Rails app on Heroku // Collective Idea | Crafting web and mobile software based in Holland, Michigan](http://collectiveidea.com/blog/archives/2016/01/12/lets-encrypt-with-a-rails-app-on-heroku/)
[Use Let’s Encrypt TLS certificate on Heroku — Sikachu’s Blog — Medium](https://sikac.hu/use-let-s-encrypt-tls-certificate-on-heroku-65f853870d90#.ut542pcuk)
[SSL Endpoint | Heroku Dev Center](https://devcenter.heroku.com/articles/ssl-endpoint)
[Set up CloudFlare's free SSL on Heroku](https://robots.thoughtbot.com/set-up-cloudflare-free-ssl-on-heroku)

## Standards

[RFC 2986 - PKCS #10: Certification Request Syntax Specification Version 1.7](http://tools.ietf.org/html/rfc2986)
[RFC 3447 - Public-Key Cryptography Standards (PKCS) #1: RSA Cryptography Specifications Version 2.1](http://tools.ietf.org/html/rfc3447)
[RFC 5958 - Asymmetric Key Packages](http://tools.ietf.org/html/rfc5958)
[RFC 6101 - The Secure Sockets Layer (SSL) Protocol Version 3.0](http://tools.ietf.org/html/rfc6101)
[RFC 7525 - Recommendations for Secure Use of Transport Layer Security (TLS) and Datagram Transport Layer Security (DTLS)](https://tools.ietf.org/html/rfc7525)
[RFC 7292 - PKCS #12: Personal Information Exchange Syntax v1.1](http://tools.ietf.org/html/rfc7292)


[tls]:http://www.wikiwand.com/en/Transport_Layer_Security
[ssl]:https://www.digicert.com/ssl.htm
