import React, { Component, Fragment } from 'react';
import Header from './header';
import { hot } from 'react-hot-loader/root';

const App = class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h1>hello world!</h1>
      </Fragment>
      
    )
  }
}

export default hot(App);

