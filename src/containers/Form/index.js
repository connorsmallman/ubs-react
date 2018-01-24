import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './state';
import NumberInput from '../../components/NumberInput';

export class Form extends Component {
  constructor() {
    super()

    this.updateWidth = this.updateWidth.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
    this.updatePositionX = this.updatePositionX.bind(this);
    this.updatePositionY = this.updatePositionY.bind(this);
    this.addRectangle = this.addRectangle.bind(this);
  }

  updateWidth(e) {
    this.props.updateWidth(parseInt(e.target.value, 10));
  }

  updateHeight(e) {
    this.props.updateHeight(parseInt(e.target.value, 10));
  }

  updatePositionX(e) {
    this.props.updatePositionX(parseInt(e.target.value, 10));
  }

  updatePositionY(e) {
    this.props.updatePositionY(parseInt(e.target.value, 10));
  }

  addRectangle(e) {
    e.preventDefault();

    const total = this.props.width + this.props.sumOfRectangles;

    if (total > window.innerWidth) {
      console.log('Error: sum of all rectangles should not extend window width');
      return;
    }

    if (this.props.numberOfRectangles >= 5) {
      console.log('Error: only 5 rectangles can be added');
      return;
    }

    this.props.addRectangle({
      width: this.props.width,
      height: this.props.height,
      x: this.props.x,
      y: this.props.y
    });
  }

  render() {
    return (
      <form onSubmit={this.addRectangle} >
        <label>
          Width
        </label>
        <NumberInput onChange={this.updateWidth} value={this.props.width} />
        <label>
          Height
        </label>
        <NumberInput onChange={this.updateHeight} value={this.props.height} />
        <div>
          <div>
            <label>
              Position
            </label>
          </div>
          <label>
            x:
            <NumberInput onChange={this.updatePositionX} value={this.props.x} />
          </label>
          <label>
            y: 
            <NumberInput onChange={this.updatePositionY} value={this.props.y} />
          </label>
        </div>
        <button type='submit'>Add</button>
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);