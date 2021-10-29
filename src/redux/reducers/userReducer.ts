import * as actionTypes from '../actionTypes';

const userInitState = {
  username: null,
};

export const user = (state = userInitState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_USERNAME: {
      return {
        ...state,
        username: action.payload,
      };
    }
    default:
      return state;
  }
};
