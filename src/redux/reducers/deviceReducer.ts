import * as actionTypes from '../actionTypes';
import {IDeviceState, IActionType} from './types';

const deviceInit: IDeviceState = {
  isConnected: true,
};

export const device = (
  state: IDeviceState = deviceInit,
  action: IActionType,
): IDeviceState => {
  switch (action.type) {
    case actionTypes.SET_DEVICE_CONNECTION: {
      return {
        ...state,
        isConnected: action.payload,
      };
    }
    default:
      return state;
  }
};
