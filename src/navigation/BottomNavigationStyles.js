import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  tapStyles: {
    backgroundColor: '#17213b',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: hp('10%'),
    paddingBottom: hp('1%'),
  },
  img: {
    height: hp('3%'),
    width: wp('8%'),
    marginBottom: hp('-1%'),
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    // lineHeight: 21,
    letterSpacing: 0.04,
    textAlign: 'left',
    color: '#909090',
    marginBottom: hp('1%'),
  },
  activeLabel: {
    color: '#fecd20',
  },
});

export default styles;
