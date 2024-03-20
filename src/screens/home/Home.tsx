import React, {useRef, useState} from 'react';
import {Button, View} from 'react-native';
import AppIcon from '../../components/app-icon/AppIcon';
import {APPICON_TYPES} from '../../components/app-icon/constants';
import {styles} from './home-styles';
import ESText from '../../components/text/ESText';
import {TEXT_TYPE} from '../../components/constants';
import ESSwiper from '../../components/swiper/ESSwiper';
import {homeCarouselData} from './constants';
import {ESButton, ESModal, ESBottomModal} from '../../components';
import colors from '../../theme/colors';

const Home: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModal = () => {
    setIsModalVisible(true);
  };
  const handleCloseModal = () => {
    console.log('close');
    setIsModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <ESText>Home Screens</ESText>
      {/* <ESText type={TEXT_TYPE.HEADING} style={styles.heading}>Home Screen</ESText>
      <ESText type={TEXT_TYPE.SUBHEADING}>Home Screen</ESText>
      <ESText type={TEXT_TYPE.TITLE}>Home Screen</ESText>
      <ESText type={TEXT_TYPE.SUB_TITLE}>Home Screen</ESText>
      <ESText type={TEXT_TYPE.LABEL}>Home Screen</ESText>
      <AppIcon name={'home'} type={APPICON_TYPES.FONTAWESOME} /> */}
      <ESSwiper
        activeDotColor={colors.primary}
        autoScroll={true}
        carouselData={homeCarouselData}
        inActiveDotColor={colors.secondary}
      />
      <ESButton />
      <ESButton isPairButton={true} />
      <ESModal handleCloseModal={handleCloseModal} isVisible={isModalVisible}>
        <ESButton />
      </ESModal>
      <Button title="Open Modal" onPress={handleModal} />
    </View>
  );
};

export default Home;
