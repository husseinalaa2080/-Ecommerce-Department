import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {imagesBaseUrl} from '../../../utils/global';
import {IMAGES} from '../../../common/images';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';

export default function ProductItem(props) {
  const {item, callBack} = props;

  return (
    <TouchableOpacity
      style={[styles.scanProductItemBox, styles.flexStartRow]}
      onPress={callBack}>
      <View>
        <FastImage
          source={{
            uri: `${imagesBaseUrl}${item.image_url}`,
            priority: FastImage.priority.normal,
          }}
          style={styles.productImg}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View>
        <Text style={[styles.scanProductName, styles.blackTitleTxt]}>
          {item.name}
        </Text>
        <View style={styles.flexStartRow}>
          <View style={[styles.flexStartRow, styles.barCodeBox]}>
            <Image
              source={IMAGES.barCode}
              style={[styles.productPriceBarCodeImg, styles.imageDir]}
              resizeMode={'contain'}
            />
            <Text style={styles.blueSubTitleTxt}>{120}</Text>
          </View>
          <View style={[styles.flexStartRow, styles.priceBox]}>
            <Image
              source={IMAGES.price}
              style={[styles.productPriceBarCodeImg, styles.imageDir]}
              resizeMode={'contain'}
            />
            <Text style={styles.blueSubTitleTxt}>{item.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
