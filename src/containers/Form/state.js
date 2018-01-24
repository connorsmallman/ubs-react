import {
  updateWidth,
  updateHeight,
  updatePositionX,
  updatePositionY
} from '../../modules/form';
import { addRectangle } from '../../modules/rectangles';

export function mapStateToProps(state) {
  return {
    width: state.form.width,
    height: state.form.height,
    x: state.form.x,
    y: state.form.y,
    numberOfRectangles: state.rectangles.length,
    sumOfRectangles: state.rectangles.map(r => r.width).reduce((a, b) => parseInt(a, 10) + b, 0)
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    updateWidth: width => dispatch(updateWidth(width)),
    updateHeight: height => dispatch(updateHeight(height)),
    updatePositionX: x => dispatch(updatePositionX(x)),
    updatePositionY: y => dispatch(updatePositionY(y)),
    addRectangle: rectangle => dispatch(addRectangle(rectangle))
  };
}