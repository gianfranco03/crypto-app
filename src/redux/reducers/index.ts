import * as userReducer from './userReducer';
import * as cryptoReducer from './cryptoReducer';
import * as deviceReducer from './deviceReducer';

export default {
  ...userReducer,
  ...cryptoReducer,
  ...deviceReducer,
};
