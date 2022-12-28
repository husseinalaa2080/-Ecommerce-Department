import {StyleSheet} from 'react-native';
import {wp, hp} from '../../../utils/global';
import {colors} from './../../../common/colors';
import {
  imageDir,
  spaceBetweenRow,
  blueSubTitleTxt,
  descriptionTxt,
  blueTitleTxt,
  blackSubTitleTxt,
  flexStartRow,
} from '../../../common/globalStyles';

export const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
  bottomContainer: {
    backgroundColor: colors.whiteColor,
    width: wp('100%'),
    height: hp('94%'),
    position: 'absolute',
    top: hp('12%'),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 10,
  },
  priceTxt: {
    color: colors.primaryColor,
    fontSize: 16,
    fontFamily: 'poppins',
  },
  discountTxt: {
    alignSelf: 'flex-end',
    fontSize: 16,
    color: colors.greyColor,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  colorSizeBox: {
    marginTop: 5,
    marginHorizontal: 2,
    marginBottom: hp('3%'),
    flexDirection: 'row',
  },
  colorBox: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderColor: colors.whiteColor,
    borderWidth: 2,
    marginRight: 8,
  },
  colorBoxChoose: {
    borderColor: colors.primaryColor,
    borderWidth: 1.5,
    width: 28,
    height: 28,
    borderRadius: 16,
    position: 'absolute',
    bottom: -3,
    left: -3,
  },
  sizeBox: {
    width: wp('15%'),
    height: hp('4%'),
    borderRadius: 13,
    borderColor: '#CCC',
    borderWidth: 0.8,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeBoxChoose: {
    borderColor: colors.primaryColor,
    borderWidth: 1,
  },
  productName: {
    fontSize: 16,
    color: colors.blackColor,
    maxWidth: wp('60%'),
    alignSelf: 'flex-start',
  },
  productDescription: {
    paddingVertical: hp('3%'),
  },
  barCodeImg: {
    width: 40,
    height: 40,
    marginRight: 7,
  },
  scanBtn: {
    width: wp('22%'),
    height: hp('4.7%'),
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanBtnTxt: {
    color: colors.whiteColor,
  },
  scanActiveBtn: {
    width: wp('22%'),
    height: hp('4.7%'),
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.whiteGreyColor,
  },
  scanActiveBtnTxt: {
    color: 'green',
  },
  scanPointsBox: {
    paddingTop: 6,
    paddingBottom: 35,
  },
  imageDir,
  spaceBetweenRow,
  descriptionTxt,
  blueSubTitleTxt,
  blueTitleTxt,
  blackSubTitleTxt,
  flexStartRow,
});
