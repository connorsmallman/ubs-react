export const ADD_RECTANGLE = 'usb/rectangles/ADD_RECTANGLE';

export function addRectangle(rectangle) {
  return {
    type: ADD_RECTANGLE,
    rectangle
  };
}

const initialState = []

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_RECTANGLE:
      return [...state, action.rectangle]
    default:
      return state
  };
}