import * as actionTypes from '../actionTypes';

interface IActions {
  type: string;
  payload?: string;
  error?: any;
}

export const setUser = (user: string): IActions => ({
  type: actionTypes.SET_USERNAME,
  payload: user,
});
