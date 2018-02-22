---
title: "Auth in Golang"
subtitle: "Some examples about authentication in Golang with JWTs"
description:
draft: false
katex: false
mermaid: false
abcjs: false
date: 2017-12-12T11:51:54+08:00
tags:
  - golang
  - auth
  - login
---

<!-- MarkdownTOC -->

- [Concept](#concept)
- [Example](#example)
  - [Example of using middleware](#example-of-using-middleware)
- [Reference](#reference)

<!-- /MarkdownTOC -->

# Concept
JWT have 3 session, `header`, `payload` and `signature`. Information are stored in payload session which can be read 
without authentication, therefore no secret information should be stored there. Server parses JWT token stored in header in every 
http request for authenticated.

In server side, using middelware for `http.Handler` function if the request are involved with authentication. System can also store
user information like username and scope in JWT payload session further usage.

Client should store the given JWT token (return by login or auth request from server side) in header, so that server can validate
JWT token in header for authentication.

# Example

## Example of using middleware
Using middleware on http.handler with [**gorilla multiplexer**][@1]

``` go
package main

import "github.com/gorilla/mux"

func main() {
  r := mux.NewRouter()

  // api that not need to get authentication
  r.Handle("/", HomeHandler).Methods("GET")

  // api that need to get authentication
  r.Handle("/path/need/authentication", AuthMiddleware(SomeHandler)).Methods("GET")

  srv := &http.Server{
    Handler:      r,
    Addr:         "127.0.0.1:8000",
    // Good practice: enforce timeouts for servers you create!
    WriteTimeout: 15 * time.Second,
    ReadTimeout:  15 * time.Second,
  }

  log.Fatal(srv.ListenAndServe())
}

func AuthMiddleware(next http.Handler) http.Handler {
  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    token := r.Header.Get("jwt-token")  // any key that client used to store jwt token

    err := SomeCodeValidateJWTToken(token)
    if err != nil {
      fmt.Fprint(w, "Unauthorized request")
    } else {
      next.ServeHTTP(w, r) // ServeHTTP run execute next handler
    }
  })
}

func HomeHandler(w http.ResponseWriter, r *http.Request) {
  // some code ...
}

func SomeHandler(w http.ResponseWriter, r *http.Request) {
  // some code ...
}
```

# Reference
- [JSON Web Tokens - jwt.io][@2]
- [mux - Gorilla, the golang web toolkit][@3]
- [Authentication in Golang with JWTs][@4]
- How to use mddleware in golang `http.Handler` - [A Recap of Request Handling in Go][@5]

<!-- reference links -->

[@1]: http://www.gorillatoolkit.org/pkg/mux
[@2]: https://jwt.io/
[@3]: http://www.gorillatoolkit.org/pkg/mux
[@4]: https://auth0.com/blog/authentication-in-golang/
[@5]: http://www.alexedwards.net/blog/a-recap-of-request-handling
