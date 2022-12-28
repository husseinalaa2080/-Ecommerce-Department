import {I18nManager} from 'react-native';
import {wp, hp} from '../utils/global';
import {colors} from './colors';

export const imageDir = {
  transform: [{rotateY: I18nManager.isRTL ? '180deg' : '0deg'}],
};

export const flexStartRow = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

export const spaceBetweenRow = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const imageIcon = {
  width: 15,
  height: 20,
};

export const headerTxt = {
  color: colors.whiteColor,
  fontSize: 18,
  fontFamily: 'poppins',
  alignSelf: 'flex-start',
};

export const blackHeaderTxt = {
  color: colors.blackColor,
  fontSize: 18,
  fontFamily: 'poppins',
  alignSelf: 'flex-start',
};

export const blackTitleTxt = {
  fontFamily: 'poppins',
  fontSize: 16,
  color: colors.blackColor,
  alignSelf: 'flex-start',
};

export const blueTitleTxt = {
  fontFamily: 'poppins',
  fontSize: 16,
  color: colors.primaryColor,
  alignSelf: 'flex-start',
};

export const blackSubTitleTxt = {
  fontFamily: 'poppins',
  fontSize: 14,
  color: colors.blackColor,
  alignSelf: 'flex-start',
};

export const blueSubTitleTxt = {
  fontFamily: 'poppins',
  fontSize: 14,
  color: colors.primaryColor,
  alignSelf: 'flex-start',
};

export const descriptionTxt = {
  fontSize: 14,
  color: colors.greyColor,
  lineHeight: 20,
  fontFamily: 'poppins',
  alignSelf: 'flex-start',
};
