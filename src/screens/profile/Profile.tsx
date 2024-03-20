import React, {useCallback, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Button, SafeAreaView} from 'react-native';

import AppIcon from '../../components/app-icon/AppIcon';
import {APPICON_TYPES} from '../../components/app-icon/constants';
import {styles} from './profile-styles';
import {ESBottomSheet, ESButton} from '../../components';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetMethods} from '../../components/bottom-modal/ESBottomSheet';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Profile: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheetMethods>(null);

  const pressHandler = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
          <Button title="Blank" onPress={() => pressHandler()} />

          <ESBottomSheet
            ref={bottomSheetRef}
            snapTo={'70%'}
            backgroundColor={'white'}
            backDropColor={'black'}>
            <ESButton />
            <ESButton />
          </ESBottomSheet>
        </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default Profile;
