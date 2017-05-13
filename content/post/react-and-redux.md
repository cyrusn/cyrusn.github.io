---
title: React-and-Redux
tags:
  - react
  - redux
date: '2017-04-17 14:38:47'
---

# Function Components

- [Function Components](https://facebook.github.io/react/docs/components-and-props.html)
- [Stateless Functional Components in React 0.14 – Josh Black – Medium](https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d)

Since react 14.0, you can now use the new stateless function component instead of the instead of ES6 class method to define a component

```javascript
// stateless functional components
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

```javascript
// using class to define a component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

or even cleaner

```javascript
// use arrow function to define stateless funcitonal components
const Welcome = ({name}) => <h1>Hello, {name}</h1>
```

## PropTypes

- [Typechecking With PropTypes - React](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)

```javascript
// import {PropTypes} from 'react' <= previously, PropTypes is binded to react library
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};
```

## Redux

- [Read Me · Redux](http://redux.js.org/)
