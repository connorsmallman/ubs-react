import React, { Component } from 'react';
import Form from './containers/Form';
import Rectangles from './containers/Rectangles';

class App extends Component {
  render() {
    return (
      <div>
        <Rectangles />
        <Form />
      </div>
    );
  }
}

export default App;
