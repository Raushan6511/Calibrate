import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './bottom-tab-navigator-styles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabScreens} from './constants';
import AppIcon from '../../components/app-icon/AppIcon';
import colors from '../../theme/colors';
import ESText from '../../components/text/ESText';
import {TEXT_TYPE} from '../../components/constants';
import {APPICON_TYPES} from '../../components/app-icon/constants';
import {heightPxToDP, widthPxToDP} from '../../common/utilities';
const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  const TabButton = (props: any) => {
    const {item, onPress, accessibilityState} = props;
    const focused = accessibilityState.selected;

    const {icon, label, type} = item;
    // console.log(icon,label,type)

    // const Icon = item.icon;
    // const viewRef = useRef(null);
    // const height = focused ? iconFocusHeight : item.iconHeight;
    // const width = focused ? iconFocusWidth : item.iconWidth;
    const iconStyle = focused
      ? {color: colors.primary}
      : {color: colors.palette.black60};

    // const iconColor = { color: iconStyle };
    const tabStyle = focused
      ? {
          backgroundColor: colors.palette.white,
          borderTopWidth: 2,
          borderColor: colors.primary,
          borderRadius: 5,
        }
      : {backgroundColor: colors.palette.lavendar};
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
        style={[styles.tabContainer, tabStyle]}>
        {/* <Animatable.View ref={viewRef} duration={DURATION} style={styles.tabView}>
              {focused && <Image source={CurveImage} style={styles.curveStyle} />} */}

        {/* <View style={tabStyle}> */}
        <AppIcon
          name={icon}
          type={type}
          size={widthPxToDP('6')}
          color={iconStyle.color}
        />
        {/* </View> */}
        {/* </Animatable.View> */}
        {/* <Text style={[styles.heading,{color:iconStyle}]}>{label}</Text> */}
        <ESText type={TEXT_TYPE.LABEL} style={iconStyle}>
          {label}
        </ESText>
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
            headerShown: false,
            tabBarStyle: {height: heightPxToDP('8')},
            tabBarButton: props => <TabButton {...props} item={item} />,
            // tabBarIcon:({size,color})=><AppIcon name={'paper-plane'} type={APPICON_TYPES.ENTYPO} color={color} />,
            tabBarActiveTintColor: 'blue',
          }}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      {/* <Tab.Navigator screenOptions={navigatorStyle}> */}
      <Tab.Navigator>{renderScreens()}</Tab.Navigator>
      {/* <SafeAreaView style={styles.footerColor} /> */}
    </View>
  );
};

export default BottomTabNavigator;
