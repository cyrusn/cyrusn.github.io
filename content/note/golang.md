---
title: Golang Notes
date: '2015-05-10 00:46:38'
tags:
  - golang
  - websocket
---

# Useful commands
- update all packages `go get -u all`

# Feautre

- [Embedding][@01]

# Understanding Goroutine

- [Is golang goroutine a coroutine?][@02]
- [Coroutine vs Continuation vs Generator][@03]
- [Comparison with generators][@04]

# MongoDB

- [mgo][@05]
- [Painless Data Storage with MongoDB and Go][@06]
- [Connecting to MongoDB with mgo and golang][@07]

# Router

- [mux - Gorilla, the golang web toolkit][@08]

  # Middleware

- [justinas/alice: Painless middleware chaining for Go][@09]

# Database Model Architecture

- [Go database/sql tutorial][@10]
- [Practical Persistence in Go: Organising Database Access][@11]
- [Practical Persistence in Go: SQL Databases][@12]
- [How to use databases with Golang – Hacker Noon][@13]
- [Architecture for a Golang Web App - Larry Price][@14]
- [Trying Clean Architecture on Golang – Hacker Noon][@15]
- [Applying The Clean Architecture to Go applications » The Log Book of Manuel Kiessling][@16]


# Authentication

- [dgrijalva/jwt-go: Golang implementation of JSON Web Tokens (JWT)][@17]
- [Golang Authentication Using JSON Web Tokens][@18]

# Useful Package

- [PuerkitoBio/goquery: A little like that j-thing, only in Go.][@19]
- [bcrypt - GoDoc][@20]
- [websocket - Gorilla, the golang web toolkit][@21]

# Useful Resources
- [The factory method pattern in Go. – Matthew Brown][@22]
- [Practical Persistence in Go: Organising Database Access][@11]
- ["go build" became very slow after installing a new version of Go - Stack Overflow][@24]
- [Contexts & Dependency Injection][@25]
- [Context keys in Go – Medium][@26]


# Websocket
- [Build a Realtime Chat Server With Go and WebSockets ― Scotch][@27]
- [Playing with websockets in Go - Jonathan Petitcolas][@28]

<!-- reference links -->

[@01]: https://golang.org/doc/effective_go.html#embedding
[@02]: http://stackoverflow.com/questions/18058164/is-/golang-goroutine-a-coroutine
[@03]: http://stackoverflow.com/questions/715758/coroutine-vs-continuation-vs-generator
[@04]: http://en.wikipedia.org/wiki/CoroutineComparison_with_generators
[@05]: https://labix.org/mgo
[@06]: http://spf13.com/presentation/MongoDB-and-Go/
[@07]: https://docs.compose.io/languages/golang.html
[@08]: http://www.gorillatoolkit.org/pkg/mux
[@09]: https://github.com/justinas/alice
[@10]: http://go-database-sql.org/
[@11]: http://www.alexedwards.net/blog/organising-database-access
[@12]: http://www.alexedwards.net/blog/practical-persistence-sql
[@13]: https://hackernoon.com/how-to-work-with-databases-in-golang-33b002aa8c47
[@14]: https://larry-price.com/blog/2015/06/25/architecture-for-a-golang-web-app/
[@15]: https://hackernoon.com/golang-clean-archithecture-efd6d7c43047
[@16]: http://manuel.kiessling.net/2012/09/28/applying-the-clean-architecture-to-go-applications/
[@17]: https://github.com/dgrijalva/jwt-go
[@18]: https://dinosaurscode.xyz/go/2016/06/17/golang-jwt-authentication/
[@19]: https://github.com/PuerkitoBio/goquery
[@20]: https://godoc.org/golang.org/x/crypto/bcrypt
[@21]: http://www.gorillatoolkit.org/pkg/websocket
[@22]: http://matthewbrown.io/2016/01/23/factory-pattern-in-golang/
[@23]: http://www.alexedwards.net/blog/organising-database-access
[@24]: https://stackoverflow.com/questions/24341654/go-build-became-very-slow-after-installing-a-new-version-of-go
[@25]: https://paddy.io/posts/contexts-and-dependency-injection/
[@26]: https://medium.com/@matryer/context-keys-in-go-5312346a868d
[@27]: https://scotch.io/bar-talk/build-a-realtime-chat-server-with-go-and-websockets
[@28]: https://www.jonathan-petitcolas.com/2015/01/27/playing-with-websockets-in-go.html
