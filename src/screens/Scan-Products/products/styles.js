import {StyleSheet} from 'react-native';
import {wp, hp} from '../../../utils/global';
import {colors} from './../../../common/colors';

import {
  imageDir,
  flexStartRow,
  spaceBetweenRow,
  imageIcon,
  blackTitleTxt,
  blueSubTitleTxt,
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
    paddingBottom: 20,
  },
  barCodeBox: {
    padding: 6,
    backgroundColor: 'rgba(0,0,0,0.025)',
    borderRadius: 5,
  },
  priceBox: {
    padding: 6,
    backgroundColor: 'rgba(0,0,0,0.025)',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  scanProductItemBox: {
    paddingVertical: 3,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: wp('5%'),
    marginVertical: hp('0.8%'),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  scanProductName: {
    paddingBottom: 10,
    alignSelf: 'flex-start',
  },
  productPriceBarCodeImg: {width: 25, height: 25, marginRight: 5},
  productImg: {width: wp('20%'), height: hp('16%'), marginRight: wp('12%')},
  imageDir,
  flexStartRow,
  spaceBetweenRow,
  imageIcon,
  blackTitleTxt,
  blueSubTitleTxt,
});
