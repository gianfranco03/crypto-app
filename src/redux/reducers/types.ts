export interface IActionType {
  type: string;
  payload: any;
  error: any;
}

export interface ICoinsState {
  data: Array<any>;
  loading: boolean;
  error: any;
}

export interface ICoinState {
  data: Array<any>;
  loading: boolean;
  error: any;
}
