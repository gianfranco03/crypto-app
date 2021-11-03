import {API_BASE_URL} from '@env';
import axios from 'axios';

import * as actionTypes from '../actionTypes';
import {ICoinData} from '../reducers/types';

export const getAllCoins = () => async (dispatch: any) => {
  dispatch({
    type: actionTypes.GET_ALL_COINS_LOADING,
  });

  try {
    const response = await axios.get(
      `${API_BASE_URL}/tickers/?start=0&limit=50`,
    );

    dispatch({
      type: actionTypes.GET_ALL_COINS_SUCCESS,
      payload: response?.data?.data || [],
    });
  } catch (e) {
    dispatch({
      type: actionTypes.GET_ALL_COINS_SUCCESS,
      error: e,
    });
  }
};

export const getCoinById = (params: any) => async (dispatch: any) => {
  dispatch({
    type: actionTypes.GET_COIN_BY_ID_LOADING,
  });

  try {
    const response = await axios.get(`${API_BASE_URL}/ticker/?ID=${params.id}`);

    dispatch({
      type: actionTypes.GET_COIN_BY_ID_SUCCESS,
      payload: response?.data || [],
    });
  } catch (e) {
    dispatch({
      type: actionTypes.GET_COIN_BY_ID_SUCCESS,
      error: e,
    });
  }
};

export const setCurrentCoin = (coin: ICoinData) => ({
  type: actionTypes.SET_CURRENT_COIN,
  payload: coin,
});
