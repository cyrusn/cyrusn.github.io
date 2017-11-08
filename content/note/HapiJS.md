---
title: HapiJS
date: '2015-05-10 00:58:17'
tags:
  - hapijs
---

# HapiJS

- [hapi.js][&01]
- [Tutorials][&02]
- [Example: Hapi Mongoose Angular][&03]

# Plugin

- [Plugin][&04]
- [hapi-auth-basic][&05]
- [hapi-session-mongo][&06]
- [hapi-auth-cookie][&07]
- [Best Practice Project Structure · Issue #2479 · hapijs/hapi][&08]

# Reference

- [hapi-playground][&09]

# My Notes

- [How to set CORS][&10]

```javascript
// set CORS enable for all routes
server.connection({
  routes: {
    cors: {
      headers: [true],
        credentials: true
    }
  }
});
```


[&01]: http://hapijs.com/
[&02]: http://hapijs.com/tutorials
[&03]: http://cronj.com/blog/hapi-mongoose/
[&04]: http://hapijs.com/plugins
[&05]: https://github.com/hapijs/hapi-auth-basic
[&06]: https://github.com/Mkoopajr/hapi-session-mongo
[&07]: https://github.com/hapijs/hapi-auth-cookie
[&08]: https://github.com/hapijs/hapi/issues/2479
[&09]: https://github.com/leesei/hapi-playground
[&10]: http://hapijs.com/api#route-options
