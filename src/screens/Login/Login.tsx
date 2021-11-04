/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';

import i18n from '../../i18n';
import showToast from '../../utils/toast';

import {setUser} from '../../redux/actions/userActions';
import {IAppState} from '../../redux/reducers/types';

import colors from '../../lib/constants/colors';
import styles from './Login.styles';

const LoginScreen: React.FC = ({navigation}: any): JSX.Element => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const userName = useSelector((state: IAppState) => state.user.username);

  useEffect(() => {
    if (userName) {
      navigation.replace('Main');
    }
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 3000);
  }, []);

  const onSignIn = () => {
    Keyboard.dismiss();

    if (!email || !email.trim().length) {
      showToast({
        type: 'error',
        text: i18n.t('loginScreen.alerts.emptyUsername'),
      });
    } else {
      dispatch(setUser(email.trim()));
      navigation.replace('Main');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Image
          source={require('../../assets/icons/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>{i18n.t('loginScreen.title')}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            mode="flat"
            keyboardType="email-address"
            style={styles.inputText}
            label={i18n.t('loginScreen.inputs.email.label')}
            value={email}
            placeholder={i18n.t('loginScreen.inputs.email.placeholder')}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <Button
          style={styles.button}
          icon="login"
          mode="contained"
          labelStyle={{color: colors.white}}
          onPress={onSignIn}>
          {i18n.t('loginScreen.button')}
        </Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
