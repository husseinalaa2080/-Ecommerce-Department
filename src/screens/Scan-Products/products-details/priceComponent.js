import React from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {styles} from './styles';

export default function PriceComponent(props) {
  const {product} = props;
  const {t} = useTranslation();

  return (
    <View>
      <Text style={styles.priceTxt}>{`( ${product.price - product.discount} ${t(
        'scan.egp',
      )} )`}</Text>
      {product.discount > 0 && (
        <Text style={styles.discountTxt}>{`${product.price} ${t(
          'scan.egp',
        )}`}</Text>
      )}
    </View>
  );
}
