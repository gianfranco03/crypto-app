import {StyleSheet, Platform, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import typography from '../../lib/constants/typography';
import colors from '../../lib/constants/colors';

const isAndroid = Platform.OS === 'android';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FAFF',
    // backgroundColor: colors.white,
    paddingTop: isAndroid ? StatusBar.currentHeight + hp(1) : hp(1),
  },
  content: {
    paddingHorizontal: wp(6),
    flex: 1,
    // backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  iconBack: {
    flex: 1,
    // alignSelf: 'center',
  },
  headerText: {
    fontFamily: typography.fontFamilyBold,
    fontSize: wp(4.5),
    color: colors.black,
    // marginTop: hp(0.4),
  },
  coinInfo: {
    marginTop: hp(3),
    // backgroundColor: 'red',
    paddingHorizontal: wp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // borderWidth: 1,
    // borderColor: 'red',
    // overflow: 'hidden',
  },
  rankContainer: {
    width: wp(14),
    height: wp(14),
    borderRadius: wp(3),
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankText: {
    fontFamily: typography.fontFamilyBold,
    fontSize: wp(5),
    color: colors.white,
  },
  nameContainer: {
    paddingHorizontal: wp(2),
    alignItems: 'center',
  },
  nameText: {
    fontFamily: typography.fontFamilyLight,
    fontSize: wp(5),
    color: colors.gray,
    marginBottom: hp(0.5),
    width: wp(50),
    textAlign: 'center',
  },
  priceText: {
    fontFamily: typography.fontFamilyBold,
    fontSize: wp(4.5),
    color: colors.black,
  },
  percentContainer: {
    height: wp(8),
    borderRadius: wp(4),
    paddingHorizontal: wp(3),
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentText: {
    fontFamily: typography.fontFamily,
    fontSize: wp(3.5),
    color: colors.white,
  },
});
