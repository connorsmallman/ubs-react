import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from './state';
import Rectangle from '../../components/Rectangle';

export class Rectangles extends Component {
  render() {
    return [this.props.rectangles.map((rectangle, key) => <Rectangle {...rectangle} key={key} />)];
  }
}

export default connect(
  mapStateToProps,
)(Rectangles);