---
title: Web Authentication
date: '2016-10-05 00:23:42'
tags:
  - authentication
  - jwt
  - security
  - web-token
---

# Notes

- [Authentication in Golang with JWTs][@001]
- [Cookies vs Tokens: The Definitive Guide][@002]
- [The Ins and Outs of Token Based Authentication | Scotch][@003] <!-- more -->
- [Enterprise APIs and OAuth: Have it All][@004]
- [Secure your users' passwords from the browser on][@005]

## Authentication Protocols

- [Basic access authentication - Wikiwand][@006]
- [Digest access authentication - Wikiwand][@007]
- [Secure Remote Password protocol - Wikiwand][@008]

- [Anatomy of a zero-knowledge web application - Clipperz, register your creations on the blockchain][@009]

`Access-Control-Allow-Origin: *` does not allow requests to supply credentials like HTTP authentication, client-side SSL certificates, or cookies. ?

## Server Based

Server generates session token and send to client via cookie. The session token acts as a bearer token and is used to look up login/session info in memory or datastore.

- [On Securing Web Session Ids | hueniverse][@010]
- [expressjs/session: Simple session middleware for Express][@011]


## Asymmetric Key

- [BrowserAuth.net][@012] using asymmetric-key for web

- [substack/trust-log: manage trust over time][@013]
- [mafintosh/ghsign: Sign/verify data using your local ssh private key and your public key from Github][@014]

## Token Based

> "Server Based" and "Token Based" could be a misnomer. Some articles says server-based auth bind a client to a specific server but this is not actually true. We can setup a in-memory datastore shared by a bunch of app servers to look up the token upon a client request. And tokens in token-based auth may as well be stored in cookies. It's just that all session info are embedded in the token in token-based auth.

- [The Ins and Outs of Token Based Authentication | Scotch][@003]
- [Best practices for token-based authentication in REST API - Google Groups.desktop][@016]
- [Token Based Authentication for Single Page Apps (SPAs) - Stormpath User Management API][@017]
- [Token-Based Authentication With AngularJS & NodeJS - Tuts+ Code Tutorial][@018]
- [Cookies are bad for you: Improving web application security - sitr.us][@019]
- [Cookies vs Tokens. Getting auth right with Angular.JS][@020]
- [10 Things You Should Know about Tokens][@021]
- [Stop using JWT for sessions - joepie91's Ramblings][@022]
- [Stop using JWT for sessions, part 2: Why your solution doesn't work - joepie91's Ramblings][@023]
- [A Token Walks into a SPA - YouTube][@024]
- [hapijs/hapi-auth-cookie: Cookie authentication plugin][@025] is actually a token based authentication
- [roblevintennis-passport-api-tokens · GitHub][@026]
- [Goodbye Short Sessions: a proposal for using service-workers to improve cookie management on the web | Web Updates - Google Developers][@027]

There are three ways to send your access token in a request.

- In an HTTP Authorization header (always works)
- In the URL query string (only works with GET requests)
- In the request body (only works for POST & PUT when body is URL-encoded)

### Bearer token clients

- [angular-token-auth/auth.client.js at master · auth0-blog/angular-token-auth][@028]
- [talis/bearhug-angular: Response interceptor for elegant bearer-token handling for angular's $http service][@029]
- [AuthorizationServer/callback.cshtml at master · IdentityModel/AuthorizationServer][@030]
- [sahat/satellizer: Token-based AngularJS Authentication][@031]

### Questions

Token based auth allows for RBAC (Role-Based Access Control), but other method can support RBAC as well (with a session lookup)

replay attack with bearer token [OAuth 2.0 (without Signatures) is Bad for the Web | hueniverse][@032]
- [OAuth Bearer Tokens are a Terrible Idea | hueniverse][@033]
- [auth0/node-auth0: Node.js client library for the Auth0 platform.][@034]
- [node-auth0/examples/nodejs-regular-webapp at master · auth0/node-auth0][@035]
- [node-auth0/examples/nodejs-api at master · auth0/node-auth0][@036]
- [auth0/cookie-jwt-auth][@037] why store back to cookie?
- [auth0/spa-jwt-authentication-tutorial - JavaScript][@038]
- [Adding authentication to your React Flux app][@039]
- [repo][@040]
- [Critical vulnerabilities in JSON Web Token libraries][@041]

#### vs OAuth

OAuth vs JWT vs OpenID OAuth2 token is opaque, JWT can be used  [JWT: 2 years later][@042]
- [OAuth 2 VS JSON Web Tokens: How to secure an API - Seedbox Technologies | Les Technologies Seedbox][@043]
- [谈谈OAuth1,OAuth2异同 | Litten的博客][@044]
- [兔子，胡萝卜与OAuth的故事 | Litten的博客][@045]

### Single Sing On (SSO)

- [Implement Single Sign On Authentication][@046]
- [Lock: Single Sign On & Token Based Authentication - Auth0][@047]

- [auth0/lock - CSS][@048]
- [auth0/lock-passwordless][@049]

### OAuth1

- [The OAuth Bible][@050]
- [OAuth | hueniverse][@051] 
- 1.0 [RFC 5849 - The OAuth 1.0 Protocol][@052]

- [OAuth and OAuth WRAP: defeating the password anti-pattern | Ars Technica][@053] Deprecated for 2.0

### OAuth2

- [OAuth - Wikiwand][@054]
- [The OAuth Bible][@050]
- [OAuth / FrontPage][@056]
- [OAuth Community Site][@057]
- [RFC 6749 - The OAuth 2.0 Authorization Framework][@058]
- [RFC 6750 - The OAuth 2.0 Authorization Framework: Bearer Token Usage][@059]
- [Egor Homakov: OAuth2: One access_token To Rule Them All][@060]
- [OpenID | hueniverse][@061]
- [OAuth | hueniverse][@062]
- [Designing a Secure REST (Web) API without OAuth][@063] 
- upload client public key (securely) to server (kind of like passwordless SSH)
- [dogeared/OZorkAuth][@064]

#### In the Wild

- [OAuth | GitHub Developer Guide][@065]
- [Using OAuth 2.0 to Access Google APIs | Google Identity Platform | Google Developers][@066]
- [Using OAuth 2.0 for Google APIs | 9bit Studios][@067]

#### boo OAuth2

- [RealtimeConf - "OAuth 2.0 - Looking Back and Moving On" by Eran Hammer on Vimeo][@068]
- [OAuth 2.0 and the Road to Hell | hueniverse][@069]
- [On Leaving OAuth | hueniverse][@070]
- [The problem with OAuth for Authentication. | Thread Safe][@071]

#### Libraries

- [prose-gatekeeper · GitHub][@072] passport hapi-bell

And much more...

### JWT

- [JWT][@073] is the spec for how a _non-opaque token_ should be created. This allows token receiver to parse the token and receive meta without database query.
- [JSON Web Token - Wikiwand][@074]
- [RFC 7515 - JSON Web Signature (JWS)][@075]
- [RFC 7516 - JSON Web Encryption (JWE)][@076]
- [RFC 7517 - JSON Web Key (JWK)][@077]
- [RFC 7518 - JSON Web Algorithms (JWA)][@078]
- [RFC 7519 - JSON Web Token (JWT)][@079]
- [RFC 7520 - JOSE Cookbook][@080]

JWT = `header.claim.signature`

```javascript
var myHeaders = {
    "alg": "HS256", //denotes the algorithm (shorthand alg) used for the  signature is HMAC SHA-256
    "typ": "JWT" //denotes the type (shorthand typ) of token this is
}

var myClaims = {
    "sub": "tom@stormpath.com",
    "name": "Tom Abbott",
    "role": "user"
}

var headers = base64URLencode(myHeaders);
var claims = base64URLencode(myClaims);
var payload = header + "." + claims;

var signature = base64URLencode(HMACSHA256(payload, secret));

var encodedJWT = payload + "." + signature;
```

- [MNUG 2014.08.13 - Lightning talk: JWT: JSON Web Token - YouTube][@081]
- [Introduction to JWT (JSON Web Token) - Securing apps & services - YouTube][@082]

- [NodeJS Tutorial | APIs Strike Back: The Rise of JSON Web Tokens - YouTube][@083]

# Demo with Express

- [Using JSON Web Tokens as API Keys][@084]
- [Blacklisting JSON Web Token API Keys][@085]
- [Refresh Tokens][@086]
- [auth0/node-jsonwebtoken][@087]
- [auth0/nginx-jwt][@088]
- [auth0/jwt-as-api-keys][@089]
- [JSON Web Token Tutorial: Example using AngularJS & Laravel | Toptal][@090] JWT primer, comparison with server based authentication [ttkalec/laravel5-angular-jwt: Simple Laravel 5/Angular app that shows how to use the most basic JWT authentication][@091]

- [dwyl/learn-json-web-tokens][@092]
- [The Anatomy of a JSON Web Token | Scotch][@093]
- [Authenticate a Node.js API with JSON Web Tokens | Scotch][@094]
- [Authentication with Node.js, JWTs, and Oracle Database | JavaScript and Oracle][@095]
- [Securing node.js RESTful services with JWT Tokens | Richard Astbury's Blog][@096]

- [Use JWT The Right Way! - Stormpath User Management API][@097]

# JWT primer, tips for security 
- [Build Secure User Interfaces Using JSON Web Tokens (JWTs) - Stormpath User Management API][@098]
- [Using Stormpath for OAuth 2.0 and Access/Refresh Token Management - Stormpath][@099]

- [Where to Store your JWTs - Cookies vs HTML5 Web Storage - Stormpath User Identity API][@100] JWT primer, tips for storage and CSURF **Conclusion**: Store the JWT in `HttpOnly; Secure` cookie. Add `xsrfToken` to JWT for CSURF protection.

### Oz

- [Auth to See the Wizard | hueniverse][@101]
- [hueniverse/oz: Web Authorization Protocol][@102]
- [hueniverse/hawk][@103]
- [What's Hawk and how to use it?][@104]
- [geek/OAuth][@105]
- [geek/oz: Web Authorization Protocol][@106]

<!-- reference links -->

[@001]: https://auth0.com/blog/authentication-in-golang/
[@002]: https://auth0.com/blog/cookies-vs-tokens-definitive-guide/
[@003]: https://scotch.io/tutorials/the-ins-and-outs-of-token-based-authentication
[@004]: http://news.sys-con.com/node/2275857/print
[@005]: https://coolaj86.com/articles/secure-your-users-passwords-from-the-browser-on/
[@006]: http://www.wikiwand.com/en/Basic_access_authentication
[@007]: http://www.wikiwand.com/en/Digest_access_authentication
[@008]: http://www.wikiwand.com/en/Secure_Remote_Password_protocol
[@009]: https://clipperz.is/blog/2007/08/24/anatomy_zero_knowledge_web_application/
[@010]: http://hueniverse.com/2015/07/08/on-securing-web-session-ids/
[@011]: https://github.com/expressjs/session
[@012]: http://www.browserauth.net/
[@013]: https://github.com/substack/trust-log
[@014]: https://github.com/mafintosh/ghsign
[@015]: https://scotch.io/tutorials/the-ins-and-outs-of-token-based-authentication
[@016]: https://groups.google.com/forum/#!topic/nodejs/2zCXZ10jFbg
[@017]: https://stormpath.com/blog/token-auth-spa/
[@018]: http://code.tutsplus.com/tutorials/token-based-authentication-with-angularjs-nodejs--cms-22543
[@019]: http://sitr.us/2011/08/26/cookies-are-bad-for-you.html
[@020]: https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/
[@021]: https://auth0.com/blog/2014/01/27/ten-things-you-should-know-about-tokens-and-cookies/
[@022]: http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/
[@023]: http://cryto.net/~joepie91/blog/2016/06/19/stop-using-jwt-for-sessions-part-2-why-your-solution-doesnt-work/
[@024]: https://www.youtube.com/watch?list=PLQrl6x_e_AZG0RdzIYVns4eGFxUEF61Lw&v=-usz7XqZikM
[@025]: https://github.com/hapijs/hapi-auth-cookie
[@026]: https://github.com/roblevintennis/passport-api-tokens
[@027]: https://developers.google.com/web/updates/2016/06/2-cookie-handoff?hl=en
[@028]: https://github.com/auth0-blog/angular-token-auth/blob/master/auth.client.js
[@029]: https://github.com/talis/bearhug-angular
[@030]: https://github.com/IdentityModel/AuthorizationServer/blob/master/samples/Flows
[@031]: https://github.com/sahat/satellizer
[@032]: http://hueniverse.com/2010/09/15/oauth-2-0-without-signatures-is-bad-for-the-web/
[@033]: http://hueniverse.com/2010/09/29/oauth-bearer-tokens-are-a-terrible-idea/
[@034]: https://github.com/auth0/node-auth0
[@035]: https://github.com/auth0/node-auth0/tree/master/examples/nodejs-regular-webapp
[@036]: https://github.com/auth0/node-auth0/tree/master/examples/nodejs-api
[@037]: https://github.com/auth0/cookie-jwt-auth
[@038]: https://github.com/auth0/spa-jwt-authentication-tutorial
[@039]: https://auth0.com/blog/2015/04/09/adding-authentication-to-your-react-flux-app/
[@040]: https://github.com/auth0/react-flux-jwt-authentication-sample
[@041]: https://auth0.com/blog/2015/03/31/critical-vulnerabilities-in-json-web-token-libraries/
[@042]: https://auth0.com/blog/2015/07/21/jwt-json-webtoken-logo/
[@043]: http://www.seedbox.com/en/blog/2015/06/05/oauth-2-vs-json-web-tokens-comment-securiser-un-api/
[@044]: http://litten.github.io/2013/08/11/brief-oauth/
[@045]: http://litten.github.io/2013/08/20/oauth-rabbit/
[@046]: https://auth0.com/learn/how-to-implement-single-sign-on
[@047]: https://auth0.com/lock
[@048]: https://github.com/auth0/lock
[@049]: https://github.com/auth0/lock-passwordless
[@050]: http://oauthbible.com/
[@051]: http://hueniverse.com/oauth/
[@052]: http://tools.ietf.org/html/rfc5849
[@053]: http://arstechnica.com/information-technology/2010/01/oauth-and-oauth-wrap-defeating-the-password-anti-pattern/
[@054]: http://www.wikiwand.com/en/OAuth
[@055]: http://oauthbible.com/
[@056]: http://wiki.oauth.net/w/page/12238516/FrontPage
[@057]: http://oauth.net/
[@058]: https://tools.ietf.org/html/rfc6749
[@059]: http://tools.ietf.org/html/rfc6750
[@060]: http://homakov.blogspot.com.ar/2012/08/oauth2-one-accesstoken-to-rule-them-all.html
[@061]: http://hueniverse.com/category/openid/
[@062]: http://hueniverse.com/category/oauth/
[@063]: http://www.thebuzzmedia.com/designing-a-secure-rest-api-without-oauth-authentication/
[@064]: https://github.com/dogeared/OZorkAuth
[@065]: https://developer.github.com/v3/oauth/
[@066]: https://developers.google.com/identity/protocols/OAuth2
[@067]: http://www.9bitstudios.com/2013/05/using-oauth-2-0-for-google-apis/
[@068]: https://vimeo.com/52882780
[@069]: http://hueniverse.com/2012/07/26/oauth-2-0-and-the-road-to-hell/
[@070]: http://hueniverse.com/2012/07/30/on-leaving-oauth/
[@071]: http://www.thread-safe.com/2012/01/problem-with-oauth-for-authentication.html
[@072]: https://github.com/prose/gatekeeper
[@073]: http://jwt.io
[@074]: https://www.wikiwand.com/en/JSON_Web_Token
[@075]: https://tools.ietf.org/html/rfc7515
[@076]: https://tools.ietf.org/html/rfc7516
[@077]: https://tools.ietf.org/html/rfc7517
[@078]: https://tools.ietf.org/html/rfc7518
[@079]: https://tools.ietf.org/html/rfc7519
[@080]: https://tools.ietf.org/html/rfc7520
[@081]: https://www.youtube.com/watch?v=eWUkxzyB1Rk
[@082]: https://www.youtube.com/watch?v=oXxbB5kv9OA&feature=youtu.be
[@083]: https://www.youtube.com/watch?v=vziqErg6NZs
[@084]: https://auth0.com/blog/2014/12/02/using-json-web-tokens-as-api-keys/
[@085]: https://auth0.com/blog/2015/03/10/blacklist-json-web-token-api-keys/
[@086]: https://auth0.com/docs/refresh-token
[@087]: https://github.com/auth0/node-jsonwebtoken
[@088]: https://github.com/auth0/nginx-jwt
[@089]: https://github.com/auth0/jwt-as-api-keys
[@090]: http://www.toptal.com/web/cookie-free-authentication-with-json-web-tokens-an-example-in-laravel-and-angularjs
[@091]: https://github.com/ttkalec/laravel5-angular-jwt
[@092]: https://github.com/dwyl/learn-json-web-tokens
[@093]: https://scotch.io/tutorials/the-anatomy-of-a-json-web-token
[@094]: https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens
[@095]: https://jsao.io/2015/06/authentication-with-node-js-jwts-and-oracle-database/
[@096]: http://coderead.wordpress.com/2012/08/16/securing-node-js-restful-services-with-jwt-tokens/
[@097]: https://stormpath.com/blog/jwt-the-right-way/
[@098]: https://stormpath.com/blog/build-secure-user-interfaces-using-jwts/
[@099]: http://docs.stormpath.com/guides/token-management/
[@100]: https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage/
[@101]: http://hueniverse.com/2015/09/19/auth-to-see-the-wizard-or-i-wrote-an-oauth-replacement/
[@102]: https://github.com/hueniverse/oz
[@103]: https://github.com/hueniverse/hawk
[@104]: http://blog.notmyidea.org/whats-hawk-and-how-to-use-it.html
[@105]: https://github.com/geek/OAuth
[@106]: https://github.com/geek/oz
