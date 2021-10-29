import React from 'react';
import {View} from 'react-native';

import Navigator from '../../navigation';

const RootScreen: React.FC = (): JSX.Element => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <Navigator />
    </View>
  );
};

export default RootScreen;
