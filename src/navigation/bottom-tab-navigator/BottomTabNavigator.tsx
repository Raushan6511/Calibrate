import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { styles } from './bottom-tab-navigator-styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { BottomTabScreens } from './constants';
import AppIcon from '../../components/app-icon/AppIcon';
import colors from '../../theme/colors';
import ESText from '../../components/text/ESText';
import { TEXT_TYPE } from '../../components/constants';
const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {

    const TabButton = (props: any) => {
        const { item, onPress, accessibilityState } = props;
        const focused = accessibilityState.selected;
        
        const {icon,label,type}=item
        // console.log(icon,label,type)
        
        // const Icon = item.icon;
        // const viewRef = useRef(null);
        // const height = focused ? iconFocusHeight : item.iconHeight;
        // const width = focused ? iconFocusWidth : item.iconWidth;
        const iconStyle = focused
          ? colors.primary
          : colors.palette.black60
      
        // const iconColor = { color: iconStyle };
        const tabStyle = focused ? colors.palette.white:colors.background
        // const iconLabelStyle = focused ? styles.tabBarFocusText : styles.tabBarText;
      
        // useEffect(() => {
        //   if (focused) {
        //     viewRef.current?.animate(animateOnFocus);
        //   } else {
        //     viewRef.current.animate(animateOnFocusOut);
        //   }
        // }, [focused]);
      
        return (
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={[styles.tabContainer,{backgroundColor:tabStyle}]}
            >
            {/* <Animatable.View ref={viewRef} duration={DURATION} style={styles.tabView}>
              {focused && <Image source={CurveImage} style={styles.curveStyle} />} */}
      
              {/* <View style={tabStyle}> */}
              <AppIcon name={icon} type={type} size={25} color={iconStyle}/>
              {/* </View> */}
            {/* </Animatable.View> */}
            {/* <Text style={[styles.heading,{color:iconStyle}]}>{label}</Text> */}
            <ESText type={TEXT_TYPE.LABEL}>{label}</ESText>
            {/* <HKText style={iconLabelStyle}>{item.label}</HKText> */}
          </TouchableOpacity>
        );
      };

    /**
 * will iterate screens array
 * @returns all the navigation screens
 */
const renderScreens = () => {
    return BottomTabScreens.map((item, index) => {
      return (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={{
            // unmountOnBlur: item.isRefresh,
            headerShown:false,
            tabBarButton: props => <TabButton {...props} item={item} />,
          }}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
    {/* <Tab.Navigator screenOptions={navigatorStyle}> */}
    <Tab.Navigator>
      {renderScreens()}
    </Tab.Navigator>
    {/* <SafeAreaView style={styles.footerColor} /> */}
  </View>
  );
};

export default BottomTabNavigator;
