---
title: ReactJS Notes
date: '2015-05-10 01:26:51'
tags:
  - react
---

# API notes and example

## [Top-Level API](http://facebook.github.io/react/docs/top-level-api.html)

```javascript
React.foo({
    ...
})

React.bar({
...
})
```

## [Component API](http://facebook.github.io/react/docs/component-api.html)

```javascript
// use within the function in Top-Level API
this.foo
```

## [Component Specs and Lifecycle](http://facebook.github.io/react/docs/component-specs.html)

```javascript
React.createClass({
    // system function
    foo: function(){
        ...
    },
    // or define your own
    customMethod: function(){
        ...
    },
    ...
})
```

## [Tags and Attributes](http://facebook.github.io/react/docs/tags-and-attributes.html)

### HTML Elements

```text
a abbr address area article aside audio b base bdi bdo big blockquote body br
button canvas caption cite code col colgroup data datalist dd del details dfn
dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5
h6 head header hr html i iframe img input ins kbd keygen label legend li link
main map mark menu menuitem meta meter nav noscript object ol optgroup option
output p param picture pre progress q rp rt ruby s samp script section select
small source span strong style sub summary sup table tbody td textarea tfoot th
thead time title tr track u ul var video wbr
```

### HTML Attributes

```text
accept acceptCharset accessKey action allowFullScreen allowTransparency alt
async autoComplete autoFocus autoPlay cellPadding cellSpacing charSet checked classID
className cols colSpan content contentEditable contextMenu controls coords
crossOrigin data dateTime defer dir disabled download draggable encType form
formAction formEncType formMethod formNoValidate formTarget frameBorder height
hidden href hrefLang htmlFor httpEquiv icon id label lang list loop manifest
marginHeight marginWidth max maxLength media mediaGroup method min multiple
muted name noValidate open pattern placeholder poster preload radioGroup
readOnly rel required role rows rowSpan sandbox scope scrolling seamless
selected shape size sizes span spellCheck src srcDoc srcSet start step style
tabIndex target title type useMap value width wmode
```

## [Event System](http://facebook.github.io/react/docs/events.html)

### SyntheticEvent

```javascript
boolean bubbles
boolean cancelable
DOMEventTarget currentTarget
boolean defaultPrevented
number eventPhase
boolean isTrusted
DOMEvent nativeEvent
void preventDefault()
void stopPropagation()
DOMEventTarget target
number timeStamp
string type
```

```text
React.createClass({
    // event are the argument
    custom: function(event){
        event.foo
    }
    ...
})
```

### Supported Events

React normalizes events so that they have consistent properties across different browsers.

The event handlers below are triggered by an event in the bubbling phase. To register an event handler for the capture phase, append Capture to the event name; for example, instead of using onClick, you would use onClickCapture to handle the click event in the capture phase

#### Clipboard Events

Event names:

```text
onCopy onCut onPaste
```

Properties:

```text
DOMDataTransfer clipboardData
```

#### Keyboard Events

Event names:

```text
onKeyDown onKeyPress onKeyUp
```

Properties:

```text
boolean altKey
Number charCode
boolean ctrlKey
function getModifierState(key)
String key
Number keyCode
String locale
Number location
boolean metaKey
boolean repeat
boolean shiftKey
Number which
```

#### Focus Events

Event names:

```text
onFocus onBlur
```

Properties:

```text
DOMEventTarget relatedTarget
```

#### Mouse Events

Event names:

```text
onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp
The onMouseEnter and onMouseLeave events propagate from the component being left to the one being entered instead of ordinary bubbling and do not have a capture phase.
```

Properties:

```text
boolean altKey
Number button
Number buttons
Number clientX
Number clientY
boolean ctrlKey
function getModifierState(key)
boolean metaKey
Number pageX
Number pageY
DOMEventTarget relatedTarget
Number screenX
Number screenY
boolean shiftKey
```

#### Touch events

To enable touch events, call React.initializeTouchEvents(true) before rendering any component.

Event names:

````

onTouchCancel onTouchEnd onTouchMove onTouchStart

```text
Properties:
````

boolean altKey DOMTouchList changedTouches boolean ctrlKey function getModifierState(key) boolean metaKey boolean shiftKey DOMTouchList targetTouches DOMTouchList touches

```text

#### UI Events
Event names:
```

onScroll

```text

Properties:
```

Number detail DOMAbstractView view

```text

# flux
![Flux Flowchat](https://cask.scotch.io/2014/10/duZH2Sz.png)

# Ref Links
## Concept
[React | A JavaScript library for building user interfaces](http://facebook.github.io/react/index.html)
[Reactive MVC and the Virtual DOM — Futurice](http://futurice.com/blog/reactive-mvc-and-the-virtual-dom)
[ReactJS For Stupid People](http://blog.andrewray.me/reactjs-for-stupid-people/)
[Component Interop With React And Custom Elements](http://addyosmani.com/blog/component-interop-with-react-and-custom-elements/)
[Josh Haberman: React Demystified](http://blog.reverberate.org/2014/02/react-demystified.html)
[Intro to the React Framework | Nettuts+](http://net.tutsplus.com/tutorials/javascript-ajax/intro-to-the-react-framework/)
[Integrating React and Flux with Angular](https://developers.mobileapptracking.com/addressing-angular-weaknesses-with-react-and-flux/)

## Tutorial
[Learning React.js- Getting Started and Concepts ♥ Scotch](http://scotch.io/tutorials/javascript/learning-react-getting-started-and-concepts)
[Build A Real-Time Twitter Stream with Node and React.js](https://scotch.io/tutorials/build-a-real-time-twitter-stream-with-node-and-react-js)
[Getting To Know Flux, the React.js Architecture](https://scotch.io/tutorials/getting-to-know-flux-the-react-js-architecture)
[Creating A Simple Shopping Cart with React.js and Flux](https://scotch.io/tutorials/creating-a-simple-shopping-cart-with-react-js-and-flux)
[enaqx-awesome-react · GitHub](https://github.com/enaqx/awesome-react)
[React 入门教程](http://hulufei.gitbooks.io/react-tutorial/content/)
[Learn React](http://learnreact.robbestad.com/)
[Deconstructing ReactJS's Flux](http://spoike.ghost.io/deconstructing-reactjss-flux/)

## Example
[react-rocket-boilerplate](https://github.com/jakemmarsh/react-rocket-boilerplate)
[James Long](http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome)
[kenwheeler-mcfly · GitHub](https://github.com/kenwheeler/mcfly)
[ReactJS Examples, Demos, Code](http://react.rocks/)
[Faster AngularJS Rendering (AngularJS and ReactJS) | thierry.nicola](http://www.williambrownstreet.net/blog/2014/04/faster-angularjs-rendering-angularjs-and-reactjs/)
[jhudson8-react-chartjs · GitHub](https://github.com/jhudson8/react-chartjs)
[React Primer](http://binarymuse.github.io/react-primer/build/)
[react-router auth](https://github.com/sardaukar/react-router-auth-example)

## Tools
[Reflux](https://github.com/spoike/refluxjs)
[Reactify](https://github.com/andreypopp/Reactify)
[Complementary Tools · facebook-react Wiki · GitHub](https://github.com/facebook/react/wiki/Complementary-Tools)
[rackt-react-router · GitHub](https://github.com/rackt/react-router)
[mtscout6-react-router-bootstrap · GitHub](https://github.com/mtscout6/react-router-bootstrap)
[React Bootstrap](http://react-bootstrap.github.io/)
[react-router-component :: viewdocs.io](http://strml.viewdocs.io/react-router-component)
[react-component · GitHub](https://github.com/react-component)
[React Components](http://react-components.com/)
[Baobab](https://github.com/Yomguithereal/baobab)
[tuxedojs](http://www.tuxedojs.org/)
[5 React.js + Flux tools](http://www.progville.com/javascript/5-react-js-flux-tools/)
[Babel](https://babeljs.io/)

## from leesei
[React: CSS in JS // Speaker Deck](https://speakerdeck.com/vjeux/react-css-in-js)
```
