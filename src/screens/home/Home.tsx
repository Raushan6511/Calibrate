import React from 'react';
import {View, Text} from 'react-native';
import AppIcon from '../../components/app-icon/AppIcon';
import {APPICON_TYPES} from '../../components/app-icon/constants';
import { styles } from './home-styles';
import ESText from '../../components/text/ESText';
import { TEXT_TYPE } from '../../components/constants';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Home Screen</Text>
      <ESText type={TEXT_TYPE.HEADING}>Home Screen</ESText>
      <ESText type={TEXT_TYPE.SUBHEADING}>Home Screen</ESText>
      <ESText type={TEXT_TYPE.LABEL}>Home Screen</ESText>
      <ESText type={TEXT_TYPE.TITLE}>Home Screen</ESText>
      <ESText type={TEXT_TYPE.SUB_TITLE}>Home Screen</ESText>
      <AppIcon name={'home'} type={APPICON_TYPES.FONTAWESOME} />
    </View>
  );
};

export default Home;
