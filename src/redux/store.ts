import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import MMKVStorage from 'react-native-mmkv-storage';

import reducers from './reducers';

const storage = new MMKVStorage.Loader().initialize();
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({...reducers});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
