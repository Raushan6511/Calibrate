import React from 'react';
import {View, Text} from 'react-native';

import AppIcon from '../../components/app-icon/AppIcon';
import {APPICON_TYPES} from '../../components/app-icon/constants';
import { styles } from './profile-styles';

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile Screen</Text>
    </View>
  );
};

export default Profile;

