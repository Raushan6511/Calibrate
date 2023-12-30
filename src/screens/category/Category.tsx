import React from 'react';
import {View, Text} from 'react-native';
import AppIcon from '../../components/app-icon/AppIcon';
import {APPICON_TYPES} from '../../components/app-icon/constants';
import { styles } from './category-styles';

const Category: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Category Screen</Text>
    </View>
  );
};

export default Category;
