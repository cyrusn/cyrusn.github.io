---
title: Open SSL
date: '2016-09-25 21:27:54'
---

[OpenSSL](https://www.openssl.org/) is a toolkit for the TLS and SSL. [The Most Common OpenSSL Commands](https://www.sslshopper.com/article-most-common-openssl-commands.html) <!-- more -->

# key/cert types

[X.509 - Wikiwand](https://www.wikiwand.com/en/X.509) [DER vs. CRT vs. CER vs. PEM Certificates and How To Convert Them](http://info.ssl.com/article.aspx?id=12149) `.pem` == `.crt` == X.509? probably `.key` == `.csr` == DER? probably not, `.csr` can be converted to `.crt` `.pfx`/`.p12` == PKCS#12

key: no meta data, just the prime numbers and moduluses cert: with meta data

# cert generation

[How to create a .pfx/.p12 certificate file using OpenSSL – SSL Information and FAQ](https://info.ssl.com/how-to-create-a-pfx-p12-certificate-file-using-openssl/) [HOWTO: Generate a CSR for OpenSSL – (see tools.ssl.com) – SSL Information and FAQ](https://info.ssl.com/howto-generate-a-csr-for-openssl-see-tools-ssl-com/) [ssl - How to create a self-signed certificate with openssl? - Stack Overflow](http://stackoverflow.com/questions/10175812/how-to-create-a-self-signed-certificate-with-openssl) [OpenSSL CSR Tool - Create Your CSR Faster | DigiCert.com](https://www.digicert.com/easy-csr/openssl.htm)

[How To Create a Self-Signed SSL Certificate for Nginx in Ubuntu 16.04 | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-nginx-in-ubuntu-16-04)

```sh
# new private key and Certificate Signing Request
openssl req -nodes -new -newkey rsa:2048 -keyout privateKey.key -out CSR.csr
# then sign SSH certificate (.crt) with csr

openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout selfsigned.key -out selfsigned.crt

openssl genrsa -out privatekey.pem 2048 # key
openssl req -new -key privatekey.pem -x509 -days 7300 -out certificate.pem

openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048
openssl rsa -pubout -in private_key.pem -out public_key.pem
```

# query cert

[How to examine the metadata of an SSL (HTTPS/TLS) cert](https://coolaj86.com/articles/how-to-examine-an-ssl-https-tls-cert/) [SSL Certificate Tools](https://www.sslshopper.com/ssl-certificate-tools.html)

```sh
# X.509
openssl x509 -text -noout -in certificate.pem
openssl x509 -text -noout -in certificate.cert

# DER
openssl req -text -noout -in certificate.csr

# PKCS#12 (.pfx or .p12)
openssl pkcs12 -info -in key.p12
```

# conversion

[SSL Converter - Convert SSL Certificates to different formats](https://www.sslshopper.com/ssl-converter.html)

```sh
# DER (.crt .cer .der) -> PEM
openssl x509 -inform der -in certificate.cer -out certificate.pem
# PEM -> DER
openssl x509 -outform der -in certificate.pem -out certificate.der
# PKCS#12 -> PEM
openssl pkcs12 -in keyStore.pfx -out keyStore.pem -nodes
#  You can add -nocerts to only output the private key or add -nokeys to only output the certificates.
# PEM -> PKCS#12
openssl pkcs12 -export -out certificate.pfx -inkey privateKey.key -in certificate.crt -certfile CACert.crt
```

# troubleshooting

```sh
sudo su
sudo tcpdump -vvv -s 0 -nni <interface> -w <file> host <host> and port <port> &
openssl s_client -connect <host>:<port> -state -msg

# e.g.
sudo su
sudo tcpdump -vvv -s 0 -nni eno1 -w internal.cap host 10.6.64.170 and port 443 &
openssl s_client -connect 10.6.64.170:443 -state -msg
```

[SOL15475 - Troubleshooting SSL/TLS renegotiation](https://support.f5.com/kb/en-us/solutions/public/15000/400/sol15475.html) [SOL15292 - Troubleshooting SSL/TLS handshake failures](https://support.f5.com/kb/en-us/solutions/public/15000/200/sol15292.html) [SOL10209 - Overview of packet tracing with the ssldump utility](https://support.f5.com/kb/en-us/solutions/public/10000/200/sol10209.html)
