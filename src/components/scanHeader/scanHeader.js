import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import {wp, hp} from '../../utils/global';
import {IMAGES} from '../../common/images';
import {
  imageDir,
  flexStartRow,
  spaceBetweenRow,
  imageIcon,
  headerTxt,
} from '../../common/globalStyles';

export default function ScanHeader(props) {
  const {
    leftIcon,
    rightIcon,
    headerName,
    leftIconPressHandler,
    rightIconPressHandler,
  } = props;

  return (
    <ImageBackground
      source={IMAGES.frame}
      resizeMode={'cover'}
      style={styles.container}>
      <View style={[styles.headerContainer, styles.spaceBetweenRow]}>
        <View style={styles.flexStartRow}>
          <TouchableOpacity
            style={styles.backArrowBox}
            onPress={leftIconPressHandler}>
            <Image
              source={leftIcon}
              style={[styles.imageIcon, styles.imageDir]}
              resizeMode={'contain'}
            />
          </TouchableOpacity>

          <Text style={[styles.headerTitleTxt, styles.headerTxt]}>
            {headerName}
          </Text>
        </View>
        <TouchableOpacity onPress={rightIconPressHandler}>
          <Image
            source={rightIcon}
            style={[styles.imageIcon, styles.imageDir]}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('15%'),
    justifyContent: 'center',
  },
  headerContainer: {
    marginHorizontal: wp('7%'),
  },
  backArrowBox: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleTxt: {
    marginHorizontal: wp('4%'),
  },
  imageDir,
  flexStartRow,
  spaceBetweenRow,
  imageIcon,
  headerTxt,
});
