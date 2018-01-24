import form, { 
  UPDATE_WIDTH,
  UPDATE_HEIGHT,
  UPDATE_POSITION_X,
  UPDATE_POSITION_Y,
  updateWidth,
  updateHeight,
  updatePositionX,
  updatePositionY
} from '../form.js';

describe('actions', () => {
  it('Should return action update width', () => {
    const expectedAction = {
      type: UPDATE_WIDTH,
      value: 10
    };
    expect(updateWidth(10)).toEqual(expectedAction);
  });

  it('Should return action update height', () => {
    const expectedAction = {
      type: UPDATE_HEIGHT,
      value: 5
    };
    expect(updateHeight(5)).toEqual(expectedAction);
  });

  it('Should return action update position x', () => {
    const expectedAction = {
      type: UPDATE_POSITION_X,
      value: 5
    };
    expect(updatePositionX(5)).toEqual(expectedAction);
  });

  it('Should return action update position y', () => {
    const expectedAction = {
      type: UPDATE_POSITION_Y,
      value: 5
    };
    expect(updatePositionY(5)).toEqual(expectedAction);
  });
});

describe('reducers', () => {
  it('Should update width', () => {
    const currentState = {
      width: 0
    };

    const expectedState = {
      width: 5
    };

    const state = form(currentState, {
      type: UPDATE_WIDTH,
      value: 5
    });

    expect(state).toEqual(expectedState);
  });

  it('Should update height', () => {
    const currentState = {
      height: 0
    };

    const expectedState = {
      height: 5
    };

    const state = form(currentState, {
      type: UPDATE_HEIGHT,
      value: 5
    });

    expect(state).toEqual(expectedState);
  });

  it('Should update position x', () => {
    const currentState = {
      x: 0
    };

    const expectedState = {
      x: 5
    };

    const state = form(currentState, {
      type: UPDATE_POSITION_X,
      value: 5
    });

    expect(state).toEqual(expectedState);
  });

  it('Should update position y', () => {
    const currentState = {
      y: 0
    };

    const expectedState = {
      y: 5
    };

    const state = form(currentState, {
      type: UPDATE_POSITION_Y,
      value: 5
    });

    expect(state).toEqual(expectedState);
  });
});