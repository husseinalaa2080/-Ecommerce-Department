import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {styles} from './styles';

export default function ColorComponent(props) {
  const {productColors, colorChoose, setColorChoose} = props;
  const {t} = useTranslation();

  return (
    <>
      <Text style={styles.blueTitleTxt}>{t('scan.color')}</Text>
      <View style={styles.colorSizeBox}>
        {productColors.map((color, index) => (
          <TouchableOpacity
            onPress={() => setColorChoose(index)}
            key={index}
            style={[styles.colorBox, {backgroundColor: color}]}>
            <View style={colorChoose == index ? styles.colorBoxChoose : null} />
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}
