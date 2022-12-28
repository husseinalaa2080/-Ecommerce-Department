import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {styles} from './styles';

export default function SizeComponent(props) {
  const {productSize, sizeChoose, setSizeChoose} = props;
  const {t} = useTranslation();

  return (
    <>
      <Text style={styles.blueTitleTxt}>{t('scan.size')}</Text>
      <View style={styles.colorSizeBox}>
        {productSize.map((size, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSizeChoose(index)}
            style={[
              styles.sizeBox,
              sizeChoose == index ? styles.sizeBoxChoose : null,
            ]}>
            <Text>{size}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}
