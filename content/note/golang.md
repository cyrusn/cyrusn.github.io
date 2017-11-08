---
title: Golang Notes
date: '2015-05-10 00:46:38'
tags:
  - golang
---

# Useful commands
- update all packages `go get -u all`

# Feautre

- [Embedding][&01]

# Understanding Goroutine

- [Is golang goroutine a coroutine?][&02]
- [Coroutine vs Continuation vs Generator][&03]
- [Comparison with generators][&04]

# MongoDB

- [mgo][&05]
- [Painless Data Storage with MongoDB and Go][&06]
- [Connecting to MongoDB with mgo and golang][&07]

# Router

- [mux - Gorilla, the golang web toolkit][&08]

  # Middleware

- [justinas/alice: Painless middleware chaining for Go][&09]

# SQL Database

- [Go database/sql tutorial][&10]
- [Practical Persistence in Go: Organising Database Access][&11]
- [Practical Persistence in Go: SQL Databases][&12]

# Authentication

- [dgrijalva/jwt-go: Golang implementation of JSON Web Tokens (JWT)][&13]
- [Golang Authentication Using JSON Web Tokens][&14]

# Useful Package

- [PuerkitoBio/goquery: A little like that j-thing, only in Go.][&15]
- [bcrypt - GoDoc][&16]

# Useful Resources
- [The factory method pattern in Go. – Matthew Brown][&17]
- [Practical Persistence in Go: Organising Database Access][&18]
- ["go build" became very slow after installing a new version of Go - Stack Overflow][&19]
- [Contexts & Dependency Injection][&20]



[&01]: https://golang.org/doc/effective_go.html#embedding
[&02]: http://stackoverflow.com/questions/18058164/is-/golang-goroutine-a-coroutine
[&03]: http://stackoverflow.com/questions/715758/coroutine-vs-continuation-vs-generator
[&04]: http://en.wikipedia.org/wiki/CoroutineComparison_with_generators
[&05]: https://labix.org/mgo
[&06]: http://spf13.com/presentation/MongoDB-and-Go/
[&07]: https://docs.compose.io/languages/golang.html
[&08]: http://www.gorillatoolkit.org/pkg/mux
[&09]: https://github.com/justinas/alice
[&10]: http://go-database-sql.org/
[&11]: http://www.alexedwards.net/blog/organising-database-access
[&12]: http://www.alexedwards.net/blog/practical-persistence-sql
[&13]: https://github.com/dgrijalva/jwt-go
[&14]: https://dinosaurscode.xyz/go/2016/06/17/golang-jwt-authentication/
[&15]: https://github.com/PuerkitoBio/goquery
[&16]: https://godoc.org/golang.org/x/crypto/bcrypt
[&17]: http://matthewbrown.io/2016/01/23/factory-pattern-in-golang/
[&18]: http://www.alexedwards.net/blog/organising-database-access
[&19]: https://stackoverflow.com/questions/24341654/go-build-became-very-slow-after-installing-a-new-version-of-go
[&20]: https://paddy.io/posts/contexts-and-dependency-injection/
