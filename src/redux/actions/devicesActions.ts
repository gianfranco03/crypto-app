import * as actionTypes from '../actionTypes';
import {IActionType} from '../reducers/types';

export const setDeviceConnection = (state: boolean | null): IActionType => ({
  type: actionTypes.SET_DEVICE_CONNECTION,
  payload: state,
});
