import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  Modal,
} from 'react-native';
import {IMAGES} from '../../common/images';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from '../../components/react-native-camera';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

export default function QRcodeScanModal(props) {
  // ####### Starting props & useState Scope ####### //
  const {setScanValue, setOpenScanModal, openScanModal, setOpenScan} = props;
  const [torchStatus, setTorchStatus] = useState(false);
  const {t} = useTranslation();
  // ####### Starting QR Scan code Success Scope ####### //
  const onSuccess = e => {
    setScanValue(e.data);
    setOpenScanModal(false);
    console.log('Scan QR Code Value : ', e.data);
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={openScanModal}
      onRequestClose={() => {
        setOpenScan(!openScanModal);
      }}>
      <View style={styles.container}>
        <View style={[styles.headerBox, styles.flexStartRow]}>
          <TouchableOpacity
            onPress={() => {
              setOpenScan(false);
            }}>
            <Image
              source={IMAGES.bBackArrow}
              resizeMode={'contain'}
              style={[styles.imageIcon, styles.imageDir]}
            />
          </TouchableOpacity>
          <Text style={[styles.scanHeaderTxt, styles.blackHeaderTxt]}>
            {t('scan.code')}
          </Text>
        </View>

        <QRCodeScanner
          onRead={onSuccess}
          flashMode={
            torchStatus
              ? RNCamera.Constants.FlashMode.torch
              : RNCamera.Constants.FlashMode.off
          }
          cameraStyle={{height: '100%'}}
        />
        <View style={styles.snapWrapper}>
          <TouchableOpacity
            onPress={() => setTorchStatus(!torchStatus)}
            style={styles.capture}>
            <ImageBackground
              resizeMode="contain"
              source={IMAGES.flash}
              style={styles.flashImg}></ImageBackground>
          </TouchableOpacity>
        </View>

        <ImageBackground
          resizeMode="cover"
          source={IMAGES.scan}
          style={styles.maskOutter}></ImageBackground>
      </View>
    </Modal>
  );
}
