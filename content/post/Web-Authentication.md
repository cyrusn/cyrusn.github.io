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

- [Authentication in Golang with JWTs](https://auth0.com/blog/authentication-in-golang/)
- [Cookies vs Tokens: The Definitive Guide](https://auth0.com/blog/cookies-vs-tokens-definitive-guide/)
- [The Ins and Outs of Token Based Authentication | Scotch](https://scotch.io/tutorials/the-ins-and-outs-of-token-based-authentication) <!-- more -->

[Enterprise APIs and OAuth: Have it All](http://news.sys-con.com/node/2275857/print)

[Secure your users' passwords from the browser on](https://coolaj86.com/articles/secure-your-users-passwords-from-the-browser-on/)

## Authentication Protocols

[Basic access authentication - Wikiwand](http://www.wikiwand.com/en/Basic_access_authentication) [Digest access authentication - Wikiwand](http://www.wikiwand.com/en/Digest_access_authentication) [Secure Remote Password protocol - Wikiwand](http://www.wikiwand.com/en/Secure_Remote_Password_protocol)

[Anatomy of a zero-knowledge web application - Clipperz, register your creations on the blockchain](https://clipperz.is/blog/2007/08/24/anatomy_zero_knowledge_web_application/)

`Access-Control-Allow-Origin: *` does not allow requests to supply credentials like HTTP authentication, client-side SSL certificates, or cookies. ?

## Server Based

Server generates session token and send to client via cookie. The session token acts as a bearer token and is used to look up login/session info in memory or datastore.

[On Securing Web Session Ids | hueniverse](http://hueniverse.com/2015/07/08/on-securing-web-session-ids/) [expressjs/session: Simple session middleware for Express](https://github.com/expressjs/session)

--------------------------------------------------------------------------------

## Asymmetric Key

[BrowserAuth.net](http://www.browserauth.net/) using asymmetric-key for web

[substack/trust-log: manage trust over time](https://github.com/substack/trust-log) [mafintosh/ghsign: Sign/verify data using your local ssh private key and your public key from Github](https://github.com/mafintosh/ghsign)

## Token Based

> "Server Based" and "Token Based" could be a misnomer. Some articles says server-based auth bind a client to a specific server but this is not actually true. We can setup a in-memory datastore shared by a bunch of app servers to look up the token upon a client request. And tokens in token-based auth may as well be stored in cookies. It's just that all session info are embedded in the token in token-based auth.

[The Ins and Outs of Token Based Authentication | Scotch](https://scotch.io/tutorials/the-ins-and-outs-of-token-based-authentication) [Best practices for token-based authentication in REST API - Google Groups.desktop](https://groups.google.com/forum/#!topic/nodejs/2zCXZ10jFbg) [Token Based Authentication for Single Page Apps (SPAs) - Stormpath User Management API](https://stormpath.com/blog/token-auth-spa/) [Token-Based Authentication With AngularJS & NodeJS - Tuts+ Code Tutorial](http://code.tutsplus.com/tutorials/token-based-authentication-with-angularjs-nodejs--cms-22543) [Cookies are bad for you: Improving web application security - sitr.us](http://sitr.us/2011/08/26/cookies-are-bad-for-you.html)

[Cookies vs Tokens. Getting auth right with Angular.JS](https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/) [10 Things You Should Know about Tokens](https://auth0.com/blog/2014/01/27/ten-things-you-should-know-about-tokens-and-cookies/)

[Stop using JWT for sessions - joepie91's Ramblings](http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/) [Stop using JWT for sessions, part 2: Why your solution doesn't work - joepie91's Ramblings](http://cryto.net/~joepie91/blog/2016/06/19/stop-using-jwt-for-sessions-part-2-why-your-solution-doesnt-work/)

[A Token Walks into a SPA - YouTube](https://www.youtube.com/watch?list=PLQrl6x_e_AZG0RdzIYVns4eGFxUEF61Lw&v=-usz7XqZikM) [hapijs/hapi-auth-cookie: Cookie authentication plugin](https://github.com/hapijs/hapi-auth-cookie) is actually a token based authentication

[roblevintennis-passport-api-tokens · GitHub](https://github.com/roblevintennis/passport-api-tokens)

[Goodbye Short Sessions: a proposal for using service-workers to improve cookie management on the web | Web Updates - Google Developers](https://developers.google.com/web/updates/2016/06/2-cookie-handoff?hl=en)

There are three ways to send your access token in a request.

- In an HTTP Authorization header (always works)
- In the URL query string (only works with GET requests)
- In the request body (only works for POST & PUT when body is URL-encoded)

### Bearer token clients

[angular-token-auth/auth.client.js at master · auth0-blog/angular-token-auth](https://github.com/auth0-blog/angular-token-auth/blob/master/auth.client.js) [talis/bearhug-angular: Response interceptor for elegant bearer-token handling for angular's $http service](https://github.com/talis/bearhug-angular)

[AuthorizationServer/callback.cshtml at master · IdentityModel/AuthorizationServer](https://github.com/IdentityModel/AuthorizationServer/blob/master/samples/Flows/Implicit Flow (JavaScript)/callback.cshtml)

[sahat/satellizer: Token-based AngularJS Authentication](https://github.com/sahat/satellizer)

### Questions

Token based auth allows for RBAC (Role-Based Access Control), but other method can support RBAC as well (with a session lookup)

replay attack with bearer token [OAuth 2.0 (without Signatures) is Bad for the Web | hueniverse](http://hueniverse.com/2010/09/15/oauth-2-0-without-signatures-is-bad-for-the-web/) [OAuth Bearer Tokens are a Terrible Idea | hueniverse](http://hueniverse.com/2010/09/29/oauth-bearer-tokens-are-a-terrible-idea/)

[auth0/node-auth0: Node.js client library for the Auth0 platform.](https://github.com/auth0/node-auth0) [node-auth0/examples/nodejs-regular-webapp at master · auth0/node-auth0](https://github.com/auth0/node-auth0/tree/master/examples/nodejs-regular-webapp) [node-auth0/examples/nodejs-api at master · auth0/node-auth0](https://github.com/auth0/node-auth0/tree/master/examples/nodejs-api) [auth0/cookie-jwt-auth](https://github.com/auth0/cookie-jwt-auth) why store back to cookie?

[auth0/spa-jwt-authentication-tutorial - JavaScript](https://github.com/auth0/spa-jwt-authentication-tutorial)

[Adding authentication to your React Flux app](https://auth0.com/blog/2015/04/09/adding-authentication-to-your-react-flux-app/) [repo](https://github.com/auth0/react-flux-jwt-authentication-sample)

[Critical vulnerabilities in JSON Web Token libraries](https://auth0.com/blog/2015/03/31/critical-vulnerabilities-in-json-web-token-libraries/)

#### vs OAuth

OAuth vs JWT vs OpenID OAuth2 token is opaque, JWT can be used [JWT: 2 years later](https://auth0.com/blog/2015/07/21/jwt-json-webtoken-logo/) [OAuth 2 VS JSON Web Tokens: How to secure an API - Seedbox Technologies | Les Technologies Seedbox](http://www.seedbox.com/en/blog/2015/06/05/oauth-2-vs-json-web-tokens-comment-securiser-un-api/) [谈谈OAuth1,OAuth2异同 | Litten的博客](http://litten.github.io/2013/08/11/brief-oauth/) [兔子，胡萝卜与OAuth的故事 | Litten的博客](http://litten.github.io/2013/08/20/oauth-rabbit/)

### Single Sing On (SSO)

[Implement Single Sign On Authentication](https://auth0.com/learn/how-to-implement-single-sign-on) [Lock: Single Sign On & Token Based Authentication - Auth0](https://auth0.com/lock)

[auth0/lock - CSS](https://github.com/auth0/lock) [auth0/lock-passwordless](https://github.com/auth0/lock-passwordless)

### OAuth1

[The OAuth Bible](http://oauthbible.com/) [OAuth | hueniverse](http://hueniverse.com/oauth/) 1.0 [RFC 5849 - The OAuth 1.0 Protocol](http://tools.ietf.org/html/rfc5849)

[OAuth and OAuth WRAP: defeating the password anti-pattern | Ars Technica](http://arstechnica.com/information-technology/2010/01/oauth-and-oauth-wrap-defeating-the-password-anti-pattern/) Deprecated for 2.0

### OAuth2

[OAuth - Wikiwand](http://www.wikiwand.com/en/OAuth) [The OAuth Bible](http://oauthbible.com/) [OAuth / FrontPage](http://wiki.oauth.net/w/page/12238516/FrontPage)

[OAuth Community Site](http://oauth.net/) 2.0 [RFC 6749 - The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749) [RFC 6750 - The OAuth 2.0 Authorization Framework: Bearer Token Usage](http://tools.ietf.org/html/rfc6750) [Egor Homakov: OAuth2: One access_token To Rule Them All](http://homakov.blogspot.com.ar/2012/08/oauth2-one-accesstoken-to-rule-them-all.html)

[OpenID | hueniverse](http://hueniverse.com/category/openid/) [OAuth | hueniverse](http://hueniverse.com/category/oauth/)

[Designing a Secure REST (Web) API without OAuth](http://www.thebuzzmedia.com/designing-a-secure-rest-api-without-oauth-authentication/) upload client public key (securely) to server (kind of like passwordless SSH)

[dogeared/OZorkAuth](https://github.com/dogeared/OZorkAuth)

#### In the Wild

[OAuth | GitHub Developer Guide](https://developer.github.com/v3/oauth/) [Using OAuth 2.0 to Access Google APIs | Google Identity Platform | Google Developers](https://developers.google.com/identity/protocols/OAuth2) [Using OAuth 2.0 for Google APIs | 9bit Studios](http://www.9bitstudios.com/2013/05/using-oauth-2-0-for-google-apis/)

#### boo OAuth2

[RealtimeConf - "OAuth 2.0 - Looking Back and Moving On" by Eran Hammer on Vimeo](https://vimeo.com/52882780) [OAuth 2.0 and the Road to Hell | hueniverse](http://hueniverse.com/2012/07/26/oauth-2-0-and-the-road-to-hell/) [On Leaving OAuth | hueniverse](http://hueniverse.com/2012/07/30/on-leaving-oauth/) [The problem with OAuth for Authentication. | Thread Safe](http://www.thread-safe.com/2012/01/problem-with-oauth-for-authentication.html)

#### Libraries

[prose-gatekeeper · GitHub](https://github.com/prose/gatekeeper) passport hapi-bell

And much more...

### JWT

[JWT](http://jwt.io) is the spec for how a _non-opaque token_ should be created. This allows token receiver to parse the token and receive meta without database query. [JSON Web Token - Wikiwand](https://www.wikiwand.com/en/JSON_Web_Token)

[RFC 7515 - JSON Web Signature (JWS)](https://tools.ietf.org/html/rfc7515) [RFC 7516 - JSON Web Encryption (JWE)](https://tools.ietf.org/html/rfc7516) [RFC 7517 - JSON Web Key (JWK)](https://tools.ietf.org/html/rfc7517) [RFC 7518 - JSON Web Algorithms (JWA)](https://tools.ietf.org/html/rfc7518) [RFC 7519 - JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519) [RFC 7520 - JOSE Cookbook](https://tools.ietf.org/html/rfc7520)

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

[MNUG 2014.08.13 - Lightning talk: JWT: JSON Web Token - YouTube](https://www.youtube.com/watch?v=eWUkxzyB1Rk) [Introduction to JWT (JSON Web Token) - Securing apps & services - YouTube](https://www.youtube.com/watch?v=oXxbB5kv9OA&feature=youtu.be)

[NodeJS Tutorial | APIs Strike Back: The Rise of JSON Web Tokens - YouTube](https://www.youtube.com/watch?v=vziqErg6NZs) Demo with Express

[Using JSON Web Tokens as API Keys](https://auth0.com/blog/2014/12/02/using-json-web-tokens-as-api-keys/) [Blacklisting JSON Web Token API Keys](https://auth0.com/blog/2015/03/10/blacklist-json-web-token-api-keys/) [Refresh Tokens](https://auth0.com/docs/refresh-token) [auth0/node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) [auth0/nginx-jwt](https://github.com/auth0/nginx-jwt) [auth0/jwt-as-api-keys](https://github.com/auth0/jwt-as-api-keys)

[JSON Web Token Tutorial: Example using AngularJS & Laravel | Toptal](http://www.toptal.com/web/cookie-free-authentication-with-json-web-tokens-an-example-in-laravel-and-angularjs) JWT primer, comparison with server based authentication [ttkalec/laravel5-angular-jwt: Simple Laravel 5/Angular app that shows how to use the most basic JWT authentication](https://github.com/ttkalec/laravel5-angular-jwt)

[dwyl/learn-json-web-tokens](https://github.com/dwyl/learn-json-web-tokens) [The Anatomy of a JSON Web Token | Scotch](https://scotch.io/tutorials/the-anatomy-of-a-json-web-token) [Authenticate a Node.js API with JSON Web Tokens | Scotch](https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens) [Authentication with Node.js, JWTs, and Oracle Database | JavaScript and Oracle](https://jsao.io/2015/06/authentication-with-node-js-jwts-and-oracle-database/) [Securing node.js RESTful services with JWT Tokens | Richard Astbury's Blog](http://coderead.wordpress.com/2012/08/16/securing-node-js-restful-services-with-jwt-tokens/)

[Use JWT The Right Way! - Stormpath User Management API](https://stormpath.com/blog/jwt-the-right-way/) JWT primer, tips for security [Build Secure User Interfaces Using JSON Web Tokens (JWTs) - Stormpath User Management API](https://stormpath.com/blog/build-secure-user-interfaces-using-jwts/) [Using Stormpath for OAuth 2.0 and Access/Refresh Token Management - Stormpath](http://docs.stormpath.com/guides/token-management/)

[Where to Store your JWTs - Cookies vs HTML5 Web Storage - Stormpath User Identity API](https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage/) JWT primer, tips for storage and CSURF **Conclusion**: Store the JWT in `HttpOnly; Secure` cookie. Add `xsrfToken` to JWT for CSURF protection.

### Oz

[Auth to See the Wizard | hueniverse](http://hueniverse.com/2015/09/19/auth-to-see-the-wizard-or-i-wrote-an-oauth-replacement/)

[hueniverse/oz: Web Authorization Protocol](https://github.com/hueniverse/oz) [hueniverse/hawk](https://github.com/hueniverse/hawk) [What's Hawk and how to use it?](http://blog.notmyidea.org/whats-hawk-and-how-to-use-it.html)

[geek/OAuth](https://github.com/geek/OAuth) [geek/oz: Web Authorization Protocol](https://github.com/geek/oz)
