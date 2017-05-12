+++
title = "HapiJS"
date = "2015-05-10 00:58:17"
tags = ["hapijs"]
+++
# HapiJS
- [hapi.js](http://hapijs.com/)
- [Tutorials](http://hapijs.com/tutorials)
- [Example: Hapi Mongoose Angular](http://cronj.com/blog/hapi-mongoose/)


# Plugin
- [Plugin](http://hapijs.com/plugins)
- [hapi-auth-basic](https://github.com/hapijs/hapi-auth-basic)
- [hapi-session-mongo](https://github.com/Mkoopajr/hapi-session-mongo)
- [hapi-auth-cookie](https://github.com/hapijs/hapi-auth-cookie)
- [Best Practice Project Structure · Issue #2479 · hapijs/hapi](https://github.com/hapijs/hapi/issues/2479)

# Reference
- [hapi-playground](https://github.com/leesei/hapi-playground)

# My Notes
- [How to set CORS](http://hapijs.com/api#route-options)

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
