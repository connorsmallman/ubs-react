export const UPDATE_WIDTH = 'ubs/form/UPDATE_WIDTH';
export const UPDATE_HEIGHT = 'ubs/form/UPDATE_HEIGHT';
export const UPDATE_POSITION_X = 'ubs/form/UPDATE_POSITION_X';
export const UPDATE_POSITION_Y = 'ubs/form/UPDATE_POSITION_Y';

export function updateWidth(value) {
  return {
    type: UPDATE_WIDTH,
    value
  };
}

export function updateHeight(value) {
  return {
    type: UPDATE_HEIGHT,
    value
  };
}

export function updatePositionX(value) {
  return {
    type: UPDATE_POSITION_X,
    value
  };
}

export function updatePositionY(value) {
  return {
    type: UPDATE_POSITION_Y,
    value
  };
}

const intialState = {
  width: 0,
  height: 0,
  x: 0,
  y: 0
}

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case UPDATE_WIDTH: 
      return {
        ...state,
        width: action.value
      };
    case UPDATE_HEIGHT:
      return {
        ...state,
        height: action.value
      };
    case UPDATE_POSITION_X:
      return {
        ...state,
        x: action.value
      };
    case UPDATE_POSITION_Y:
      return {
        ...state,
        y: action.value
      };
    default:
      return state;
  }
}