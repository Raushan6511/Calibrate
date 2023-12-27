import React from 'react';
import {View, Text} from 'react-native';
import AppIcon from '../../components/app-icon/AppIcon';
import {APPICON_TYPES} from '../../components/app-icon/constants';

const Home: React.FC = () => {
  return (
    <View style={{backgroundColor:'red'}}>
      <Text style={{ fontFamily: 'Poppins-Italic', fontSize: 20 }}>Home Screen</Text>
      <AppIcon name={'rightcircle'} type={APPICON_TYPES.ANTDESIGN} />
    </View>
  );
};

export default Home;
