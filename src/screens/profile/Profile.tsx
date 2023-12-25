import React from 'react';
import {View, Text} from 'react-native';

import AppIcon from '../../components/app-icon/AppIcon';
import {APPICON_TYPES} from '../../components/app-icon/constants';

const Profile: React.FC = () => {
  return (
    <View>
      <Text>Profile Screen</Text>
      <AppIcon name={'paper-plane'} type={APPICON_TYPES.ENTYPO} />
    </View>
  );
};

export default Profile;

