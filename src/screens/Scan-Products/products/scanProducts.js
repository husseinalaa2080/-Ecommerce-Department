import React, {useEffect, useCallback, useState} from 'react';
import {
  View,
  StatusBar,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux/es';
import {getScanProducts} from '../../../redux/actions/ScanProducts/scanProductsAction';
import {getScanProductDetails} from '../../../redux/actions/ScanProducts/productDetailsAction';
import {IMAGES} from './../../../common/images';
import {hp} from '../../../utils/global';
import {colors} from '../../../common/colors';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import ScanHeader from '../../../components/scanHeader/scanHeader';
import ProductItem from './productItem';
import {useTranslation} from 'react-i18next';

export default function ScanProducts() {
  // ####### Starting useState Scope ####### //
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  const [refreshing, setRefreshing] = useState(false);

  // ####### Starting useSelector Scope ####### //
  const {scanProductsLoading, scanProductsList} = useSelector(
    state => state.scanProducts,
  );

  // ####### Starting dispatch scan products Scope ####### //
  const dispatchGetScanProductsAction = async () => {
    await dispatch(getScanProducts());
  };

  // ####### Starting dispatch scan product details Scope ####### //
  const pressHandlerScanProduct = id => {
    dispatch(getScanProductDetails(id));
    navigation.navigate('ProductDetails');
  };

  // ####### Starting useEffect Scope ####### //
  useEffect(() => {
    dispatchGetScanProductsAction();
  }, []);

  // ####### Starting refresh control Scope ####### //
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await dispatch(getScanProducts());
    setRefreshing(false);
  }, []);

  return (
    <View style={styles.globalContainer}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      {/* ###### Starting Scan Product Header ####### */}
      <ScanHeader
        leftIcon={IMAGES.backArrow}
        rightIcon={IMAGES.bag}
        headerName={t('scan.products')}
        leftIconPressHandler={() => console.log('go back navigation')}
        rightIconPressHandler={() => console.log('cart press')}
      />
      {/* ###### Starting Scan Product List ####### */}
      <View style={styles.bottomContainer}>
        {scanProductsLoading ? (
          <ActivityIndicator
            size={30}
            color={colors.primaryColor}
            style={{marginVertical: hp('10%')}}
          />
        ) : (
          <View style={{paddingTop: hp('3%')}}>
            {/* ###### Starting Scan Product FlatList ####### */}
            <FlatList
              data={scanProductsList.products}
              renderItem={({item}) => {
                return (
                  <ProductItem
                    item={item}
                    callBack={() => pressHandlerScanProduct(item.id)}
                  />
                );
              }}
              keyExtractor={(item, index) => index.toString()}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  progressBackgroundColor={colors.whiteColor}
                  colors={[colors.primaryColor]}
                />
              }
            />
          </View>
        )}
      </View>
    </View>
  );
}
