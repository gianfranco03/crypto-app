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
import {useDispatch} from 'react-redux';
import RNBootSplash from 'react-native-bootsplash';

import i18n from '../../i18n';
import showToast from '../../utils/toast';
import {setUser} from '../../redux/actions/userActions';

import colors from '../../lib/constants/colors';
import styles from './Login.styles';

const LoginScreen: React.FC = ({navigation}: any): JSX.Element => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
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
      dispatch(setUser(email));
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
            left={<TextInput.Icon name="email" color={colors.primary} />}
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
