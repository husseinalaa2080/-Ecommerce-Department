import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux/es';
import {IMAGES} from './../../../common/images';
import {wp, hp} from '../../../utils/global';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import ImageSwiper from './../../../components/swiper/imageSwiper';
import QRcodeScanModal from '../../../modals/QRcodeScan/QRcodeScan';
import ScanPointsModal from '../../../modals/scanPoints/scanPoints';
import ScanHeader from '../../../components/scanHeader/scanHeader';
import PriceComponent from './priceComponent';
import ColorComponent from './colorComponent';
import SizeComponent from './sizeComponent';
import {useTranslation} from 'react-i18next';
export default function ScanProductDetails() {
  // ####### Starting useDispatch Scope ####### //
  const {t} = useTranslation();
  const navigation = useNavigation();

  // ####### Starting useSelector Scope ####### //
  const {scanProductDetailsLoading, scanProductDetailsList} = useSelector(
    state => state.scanProductDetails,
  );

  // ####### Starting useState Scope ####### //
  const productColors = ['#830B14', '#000000', '#0052D3', '#FCBC04'];
  const productSize = ['S', 'M', 'L'];
  const [colorChoose, setColorChoose] = useState('0');
  const [sizeChoose, setSizeChoose] = useState('0');
  const [openScanModal, setOpenScanModal] = useState(false);
  const [openScanPointsModal, setOpenScanPointsModal] = useState(true);
  const [scanValue, setScanValue] = useState('');

  return (
    <View style={styles.globalContainer}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      {/* ###### Starting Scan Product Header ####### */}
      <ScanHeader
        leftIcon={IMAGES.backArrow}
        rightIcon={IMAGES.bag}
        headerName={t('scan.details')}
        leftIconPressHandler={() => navigation.goBack()}
        rightIconPressHandler={() => console.log('cart press')}
      />

      <View style={styles.bottomContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginTop: hp('4%')}}>
          {/* ###### Starting product images swiper ####### */}
          <ImageSwiper />
          {!scanProductDetailsLoading && (
            <View
              style={{
                marginHorizontal: wp('6%'),
                marginVertical: hp('2%'),
              }}>
              <View style={styles.spaceBetweenRow}>
                <Text style={styles.productName}>
                  {scanProductDetailsList.name}
                </Text>
                {/*  ####### Starting Price & discount Scope #######  */}
                <PriceComponent product={scanProductDetailsList} />
              </View>
              <Text style={[styles.productDescription, styles.descriptionTxt]}>
                {scanProductDetailsList.description}
              </Text>
              <View>
                {/* ####### Starting choose color Scope ####### */}
                <ColorComponent
                  productColors={productColors}
                  colorChoose={colorChoose}
                  setColorChoose={setColorChoose}
                />
                {/* ####### Starting choose size Scope ####### */}
                <SizeComponent
                  productSize={productSize}
                  sizeChoose={sizeChoose}
                  setSizeChoose={setSizeChoose}
                />
              </View>
              {/* ###### Starting product Scan scope ####### */}
              <View style={[styles.spaceBetweenRow, styles.scanPointsBox]}>
                <View style={styles.flexStartRow}>
                  <Image
                    resizeMode="contain"
                    source={IMAGES.barCode}
                    style={[styles.barCodeImg, styles.imageDir]}
                  />
                  <View>
                    <Text style={styles.blueSubTitleTxt}>{t('scan.scan')}</Text>
                    <Text style={styles.blackSubTitleTxt}>
                      {t('scan.points')}
                    </Text>
                  </View>
                </View>
                {/* ###### Condition Change Scan Button ####### */}
                {scanValue ? (
                  <TouchableOpacity>
                    <View style={styles.scanActiveBtn}>
                      <Text style={styles.scanActiveBtnTxt}>
                        {t('scan.done')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setOpenScanModal(true)}>
                    <ImageBackground
                      style={styles.scanBtn}
                      resizeMode="contain"
                      source={IMAGES.rectangle}>
                      <Text style={styles.scanBtnTxt}>{t('scan.scan')}</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          )}
          {/* ###### Starting QR Code Scan Modal ####### */}
          <QRcodeScanModal
            setScanValue={setScanValue}
            setOpenScanModal={setOpenScanModal}
            openScanModal={openScanModal}
            setOpenScan={setOpenScanModal}
          />
          {/* ###### Starting Scan Product Points modal ####### */}
          <ScanPointsModal
            openScanPointsModal={openScanPointsModal}
            setOpenScanPointsModal={setOpenScanPointsModal}
            scanValue={scanValue}
          />
        </ScrollView>
      </View>
    </View>
  );
}
