export interface IAppState {
  coin: ICoinState;
  user: IUserState;
  coins: ICoinsState;
}

export interface IUserState {
  username: null | string;
}
export interface IActionType {
  type: string;
  payload: any;
  error: any;
}

export interface ICoinsState {
  data: Array<ICoinData>;
  loading: boolean;
  error: any;
}

export interface ICoinState {
  data: ICoinData | any;
  loading: boolean;
  error: any;
  stats: Array<number>;
  statsTime: Array<string>;
}

export interface ICoinData {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  market_cap_usd: string;
  volume24: string;
  volume24_native: string;
  csupply: string;
  price_btc: string;
  tsupply: string;
  msupply: string;
}
