import * as actionTypes from '../actionTypes';
import {IUserState, IActionType} from './types';

const userInitState: IUserState = {
  username: null,
};

export const user = (
  state: IUserState = userInitState,
  action: IActionType,
): IUserState => {
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
