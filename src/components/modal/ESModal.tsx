import React, {useRef, useState} from 'react';
import {Pressable, View} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from './esModal-styles';
import ESText from '../text/ESText';
import colors from '../../theme/colors';
import {ESButton} from '../button/ESButton';

import Animated, {Easing} from 'react-native-reanimated';
interface IESModal {
  handleCloseModal: () => void;
  isVisible: boolean;
  children: any;
}

export const ESModal: React.FC<IESModal> = ({
  isVisible,
  handleCloseModal,
  children,
}) => {
  // const borderWidth = useRef(new Animated.Value(0)).current;
  return (
    <Modal
      isVisible={isVisible}
      // onDismiss={handleCloseModal}
      // onResponderEnd={handleCloseModal}
      //   onLayout={handleCloseModal}
      // animationOutTiming={2000}

      onBackButtonPress={handleCloseModal}>
      {/* <Animated.View style={[styles.modal, { borderWidth }]}> */}
      <View style={styles.modal}>{children}</View>

      {/* </Animated.View> */}
    </Modal>
  );
};
