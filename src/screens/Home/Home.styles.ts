import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import typography from '../../lib/constants/typography';
import colors from '../../lib/constants/colors';

const isIOS = Platform.OS === 'ios';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingTop: isIOS ? hp(8) : hp(5),
    paddingHorizontal: wp(6),
    backgroundColor: colors.primary,
    paddingBottom: isIOS ? hp(2) : hp(3),
  },
  titleText: {
    fontFamily: typography.fontFamilyRegular,
    fontSize: wp(4.5),
    color: colors.white,
    marginBottom: hp(1.5),
  },
  userText: {
    fontFamily: typography.fontFamilyBold,
    fontSize: wp(5),
    color: colors.white,
  },
  connectionIndicator: {
    width: wp(2),
    height: wp(2),
    borderRadius: wp(1),
    backgroundColor: colors.gray,
    marginTop: isIOS ? hp(1.3) : hp(1.6),
    marginLeft: wp(2),
  },
  leaveIcon: {
    position: 'absolute',
    right: wp(6),
    marginTop: isIOS ? hp(11) : hp(8),
  },
  filterContainer: {
    paddingHorizontal: wp(6),
    marginTop: hp(2.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listTitle: {
    fontFamily: typography.fontFamilyBold,
    fontSize: wp(4.5),
    color: colors.black,
  },
  filtersContent: {
    flexDirection: 'row',
  },
  inputContainer: {
    borderRadius: wp(4),
    height: hp(4.7),
    width: wp(26),
    overflow: 'hidden',
    marginRight: wp(2),
  },
  inputText: {
    height: hp(5),
    overflow: 'hidden',
    borderRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingLeft: wp(1),
  },
  button: {
    borderRadius: wp(5),
    height: hp(4.8),
    paddingTop: isIOS ? hp(0.3) : hp(0),
    fontFamily: typography.fontFamilyRegular,
  },
  listContainer: {
    marginTop: hp(2),
    paddingHorizontal: wp(6),
    flex: 1,
    paddingBottom: hp(2),
  },
  itemContainer: {
    paddingHorizontal: wp(1),
    flexDirection: 'row',
  },
  itemLeftBox: {
    flex: 1,
    justifyContent: 'space-around',
  },
  itemCenterBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemRightBox: {
    flex: 1,
    alignItems: 'flex-end',
  },
  emptyListContent: {
    alignSelf: 'center',
    marginTop: hp(30),
  },
  noDataText: {
    fontFamily: typography.fontFamilyBold,
    fontSize: wp(4),
    color: colors.gray,
  },
  listItemSeparator: {
    marginVertical: hp(1.5),
    height: 0.3,
    backgroundColor: colors.accent,
  },
  itemSymbol: {
    fontFamily: typography.fontFamilyBold,
    fontSize: wp(4.2),
    color: colors.black,
  },
  itemName: {
    fontFamily: typography.fontFamilyRegular,
    fontSize: wp(4),
    color: colors.black,
  },
  itemTexts: {
    fontFamily: typography.fontFamily,
    fontSize: wp(3.5),
    color: colors.black,
    marginBottom: hp(0.1),
  },
  listFooter: {
    height: hp(4),
  },
});
