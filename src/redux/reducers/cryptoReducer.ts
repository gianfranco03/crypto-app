import * as actionTypes from '../actionTypes';
import {IActionType, ICoinsState, ICoinState} from './types';

const allCoinsInit: ICoinsState = {
  data: [],
  error: null,
  loading: false,
};

export const coins = (
  state: ICoinsState = allCoinsInit,
  action: IActionType,
): ICoinsState => {
  switch (action.type) {
    case actionTypes.GET_ALL_COINS_LOADING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case actionTypes.GET_ALL_COINS_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false,
      };
    }
    case actionTypes.GET_ALL_COINS_ERROR: {
      return {
        ...state,
        data: [],
        error: action.error,
        loading: false,
      };
    }
    default:
      return state;
  }
};

const coinInit: ICoinState = {
  data: {},
  error: null,
  loading: false,
  stats: [],
  statsTime: [],
};

export const coin = (
  state: ICoinState = coinInit,
  action: IActionType,
): ICoinState => {
  switch (action.type) {
    case actionTypes.GET_COIN_BY_ID_LOADING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case actionTypes.GET_COIN_BY_ID_SUCCESS: {
      const coinData = action.payload;

      if (coinData?.id) {
        const time = new Date();

        return {
          ...state,
          data: coinData,
          stats: [...state.stats, Number(coinData.price_usd)],
          statsTime: [
            ...state.statsTime,
            `${time.getHours()}:${time.getMinutes()}`,
          ],
          error: null,
          loading: false,
        };
      } else {
        return {
          ...state,
          loading: false,
        };
      }
    }
    case actionTypes.GET_COIN_BY_ID_ERROR: {
      return {
        ...state,
        data: {},
        error: action.error,
        loading: false,
      };
    }
    case actionTypes.SET_CURRENT_COIN: {
      const coinData = action.payload;

      if (coinData?.id) {
        const time = new Date();

        return {
          ...state,
          data: coinData,
          stats: [Number(coinData.price_usd)],
          statsTime: [`${time.getHours()}:${time.getMinutes()}`],
        };
      } else {
        return state;
      }
    }
    default:
      return state;
  }
};
