import React from 'react';
import {
  Provider as PaperProvider,
  DefaultTheme,
  configureFonts,
} from 'react-native-paper';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import RootScreen from './src/screens/Root/Root';
import colors from './src/lib/constants/colors';
import {fontsConfig} from './src/lib/constants/typography';

import {store, persistor} from './src/redux/store';

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontsConfig),
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <RootScreen />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};
export default App;
