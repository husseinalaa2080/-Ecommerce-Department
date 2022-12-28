import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import {colors} from '../../common/colors';
import {wp, hp, imagesBaseUrl} from '../../utils/global';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux/es';
import Swiper from 'react-native-swiper';
import {IMAGES} from './../../common/images';

export default function ImageSwiper() {
  const {scanProductDetailsLoading, scanProductDetailsList} = useSelector(
    state => state.scanProductDetails,
  );
  const [sliderImg, setSliderImg] = useState([]);

  useEffect(() => {
    if (scanProductDetailsList?.images?.length > 5) {
      setSliderImg(scanProductDetailsList.images.slice(0, 5));
    } else {
      setSliderImg(scanProductDetailsList.images);
    }
  }, [scanProductDetailsList]);

  return (
    <View>
      {scanProductDetailsLoading ? (
        <ActivityIndicator
          size={30}
          color={colors.primaryColor}
          style={{marginVertical: hp('10%')}}
        />
      ) : (
        <View>
          {/* ***************  start Product Slider section ******************* */}
          {sliderImg?.length > 0 ? (
            <View style={styles.container}>
              <Swiper
                showsButtons={false}
                index={0}
                dot={<View style={styles.InactiveIndicator} />}
                activeDot={<View style={styles.activeIndicator} />}>
                {sliderImg.map((image, index) => (
                  <View style={styles.subContainer} key={index}>
                    <FastImage
                      source={{
                        uri: `${imagesBaseUrl}${image.url}`,
                        priority: FastImage.priority.normal,
                      }}
                      style={styles.sliderImg}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                  </View>
                ))}
              </Swiper>
            </View>
          ) : (
            <>
              <Image
                source={IMAGES.empty}
                style={styles.emptyImg}
                resizeMode={'contain'}
              />
            </>
          )}

          {/* ***************  End Product Slider section ******************* */}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp('90%'),
    height: hp('25%'),
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: '#EEE',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: wp('2%'),
    marginBottom: hp('4%'),
  },
  subContainer: {
    width: wp('84.8%'),
    height: hp('22%'),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  InactiveIndicator: {
    backgroundColor: '#E5E7EB',
    width: hp('0.7'),
    height: hp('0.7'),
    marginHorizontal: 2,
    borderRadius: 5,
    position: 'relative',
    bottom: hp('-7%'),
  },
  activeIndicator: {
    backgroundColor: '#1F54CF',
    width: wp('7%'),
    height: hp('0.7'),
    marginHorizontal: 2,
    borderRadius: 5,
    position: 'relative',
    bottom: hp('-7%'),
  },

  emptyImg: {
    width: wp('80%'),
    height: hp('20%'),
    alignSelf: 'center',
  },
  sliderImg: {
    width: wp('80%'),
    height: hp('25%'),
    alignSelf: 'center',
  },
});
