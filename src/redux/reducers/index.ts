import * as userReducer from './userReducer';
import * as cryptoReducer from './cryptoReducer';

export default {
  ...userReducer,
  ...cryptoReducer,
};
