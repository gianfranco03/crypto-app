/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {useDispatch, useSelector} from 'react-redux';

import Navigator from '../../navigation';

import i18n from '../../i18n';
import showToast from '../../utils/toast';

import {setDeviceConnection} from '../../redux/actions/devicesActions';
import {IAppState} from '../../redux/reducers/types';

const RootScreen: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const {isConnected: isDeviceConnected} = useSelector(
    (state: IAppState) => state.device,
  );

  useEffect(() => {
    // Subscribe network info
    const unsubscribe = NetInfo.addEventListener(state => {
      dispatch(setDeviceConnection(state.isConnected));
    });

    return () => {
      // Unsubscribe
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!isDeviceConnected) {
      showToast({text: i18n.t('common.noInternet'), type: 'error'});
    }
  }, [isDeviceConnected]);

  return (
    <View style={{flex: 1}}>
      <Navigator />
    </View>
  );
};

export default RootScreen;
