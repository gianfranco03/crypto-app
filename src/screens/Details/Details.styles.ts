import {StyleSheet, Platform} from 'react-native';
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
    paddingTop: isAndroid ? hp(4) : hp(2),
  },
  content: {
    paddingHorizontal: wp(6),
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBack: {
    flex: 1,
  },
  headerText: {
    fontFamily: typography.fontFamilyBold,
    fontSize: wp(4.5),
    color: colors.black,
  },
  rightBox: {
    flex: 1,
  },
  coinInfo: {
    marginTop: hp(3),
    paddingHorizontal: wp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
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
  circleContainer: {
    alignSelf: 'center',
    height: hp(20),
    marginTop: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  requestCount: {
    fontFamily: typography.fontFamily,
    fontSize: wp(4.2),
    color: colors.gray,
  },
  requestText: {
    fontFamily: typography.fontFamily,
    fontSize: wp(4),
    color: colors.gray,
    marginBottom: hp(2),
  },
  chartContainer: {
    backgroundColor: colors.white,
    paddingBottom: hp(2),
    paddingHorizontal: wp(2),
    marginTop: hp(3),
    borderRadius: wp(4),
  },
  chartContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chartInset: {
    top: hp(1),
    bottom: hp(1),
  },
  lineChart: {
    width: wp(68),
    height: hp(40),
  },
  xAxis: {
    marginLeft: wp(8),
    marginRight: wp(2),
  },
  loading: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
