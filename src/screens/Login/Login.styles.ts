import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import typography from '../../lib/constants/typography';
import colors from '../../lib/constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: wp(6),
    justifyContent: 'center',
  },
  logo: {
    width: wp(40),
    height: wp(40),
    alignSelf: 'center',
    marginBottom: hp(2.5),
  },
  title: {
    fontFamily: typography.fontFamilyBold,
    color: colors.black,
    fontSize: wp(6),
    alignSelf: 'center',
    marginBottom: hp(4),
  },
  inputContainer: {
    borderRadius: wp(4),
    height: hp(6.7),
    overflow: 'hidden',
    marginBottom: hp(4),
  },
  inputText: {
    height: hp(7),
    overflow: 'hidden',
    borderRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingLeft: wp(2),
  },
  button: {
    marginTop: hp(1),
    paddingVertical: Platform.OS === 'ios' ? hp(1) : hp(0.5),
    fontFamily: typography.fontFamilyRegular,
  },
});
