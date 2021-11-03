import * as actionTypes from '../actionTypes';
import {IActionType} from '../reducers/types';

export const setUser = (user: string | null): IActionType => ({
  type: actionTypes.SET_USERNAME,
  payload: user,
});
