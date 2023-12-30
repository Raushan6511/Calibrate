import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home/Home';
import ProfileScreen from '../screens/profile/Profile';
import CategoryScreen from '../screens/category/Category';
import OrderScreen from '../screens/orders/Order';
import BottomTabNavigator from './bottom-tab-navigator/BottomTabNavigator';
import { SafeAreaView } from 'react-native';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  return (
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={HomeScreen} />
    //   <Tab.Screen name="Category" component={CategoryScreen} />
    //   <Tab.Screen name="Order" component={OrderScreen} />
    //   <Tab.Screen name="Profile" component={ProfileScreen} />
    // </Tab.Navigator>
    // <SafeAreaView style={{backgroundColor:'red'}}>
    <BottomTabNavigator/>
    // </SafeAreaView>
  );
};

export default AppNavigator;
