import React, { Component } from 'react';
import Form from './containers/Form';
import Rectangles from './containers/Rectangles';

class App extends Component {
  constructor() {
    super();

    this.state = {
      width:  0
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    return (
      <div>
        <Rectangles />
        <Form innerWidth={this.state.width} />
      </div>
    );
  }
}

export default App;
