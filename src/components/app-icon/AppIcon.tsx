import React from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5ProIcon from 'react-native-vector-icons/FontAwesome5Pro';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import FontAwesome6ProIcon from 'react-native-vector-icons/FontAwesome6Pro';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import {APPICON_TYPES} from './constants';

interface GlobalIconProps {
  name: string;
  type: string;
  size?: number;
  color?: string;
}

const iconComponents = {
  [APPICON_TYPES.ANTDESIGN]: AntDesignIcon,
  [APPICON_TYPES.ENTYPO]: EntypoIcon,
  [APPICON_TYPES.EVILICONS]: EvilIconsIcon,
  [APPICON_TYPES.FEATHER]: FeatherIcon,
  [APPICON_TYPES.FONTAWESOME]: FontAwesomeIcon,
  [APPICON_TYPES.FONTAWESOME5]: FontAwesome5Icon,
  [APPICON_TYPES.FONTAWESOME5PRO]: FontAwesome5ProIcon,
  [APPICON_TYPES.FONTAWESOME6]: FontAwesome6Icon,
  [APPICON_TYPES.FONTAWESOME6PRO]: FontAwesome6ProIcon,
  [APPICON_TYPES.FONTISTO]: FontistoIcon,
  [APPICON_TYPES.FOUNDATION]: FoundationIcon,
  [APPICON_TYPES.IONICONS]: IoniconsIcon,
  [APPICON_TYPES.MATERIALCOMMUNITY]: MaterialCommunityIcon,
  [APPICON_TYPES.MATERIALICONS]: MaterialIconsIcon,
  [APPICON_TYPES.OCTICONS]: OcticonsIcon,
  [APPICON_TYPES.ZOCIAL]: ZocialIcon,
};

const AppIcon: React.FC<GlobalIconProps> = ({
  name,
  size = 30,
  color = 'black',
  type,
}) => {
  const IconComponent = iconComponents[type];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent name={name} size={size} color={color} />;
};

export default AppIcon;
