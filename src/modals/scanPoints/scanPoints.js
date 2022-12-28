import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Modal,
} from 'react-native';
import {IMAGES} from '../../common/images';
import {colors} from '../../common/colors';
import {wp, hp} from '../../utils/global';

export default function ScanPointsModal(props) {
  // ####### Starting props & useState Scope ####### //
  const {setOpenScanPointsModal, openScanPointsModal, scanValue} = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={scanValue ? openScanPointsModal : false}
      onRequestClose={() => {
        setOpenScanPointsModal(false);
      }}>
      <TouchableOpacity
        onPress={() => {
          setOpenScanPointsModal(false);
        }}
        style={styles.scanPointsModal}>
        <ImageBackground
          style={styles.scanPointsImg}
          resizeMode="contain"
          source={IMAGES.points}></ImageBackground>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  scanPointsModal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.whiteGreyColor2,
  },
  scanPointsImg: {
    width: wp('75%'),
    height: hp('75%'),
    position: 'absolute',
    top: hp('20%'),
  },
});
