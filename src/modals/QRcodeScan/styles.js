import {StyleSheet} from 'react-native';
import {wp, hp} from '../../utils/global';
import {
  blackHeaderTxt,
  imageDir,
  flexStartRow,
  imageIcon,
} from '../../common/globalStyles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'black',
    position: 'relative',
    flex: 1,
  },
  snapWrapper: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
    bottom: 40,
    left: 16,
    right: 16,
  },
  capture: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 50,
    borderRadius: 30,
  },
  flashImg: {
    alignSelf: 'center',
    width: 90,
    height: 90,
  },
  maskOutter: {
    position: 'absolute',
    top: hp('30%'),
    width: wp('60%'),
    height: wp('60%'),
    alignSelf: 'center',
  },
  headerBox: {
    position: 'absolute',
    top: hp('3%'),
    left: wp('5%'),
    zIndex: 5,
  },
  scanHeaderTxt: {marginLeft: 10},
  blackHeaderTxt,
  imageDir,
  flexStartRow,
  imageIcon,
});
