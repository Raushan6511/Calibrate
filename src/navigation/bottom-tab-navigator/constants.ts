import {APPICON_TYPES} from '../../components/app-icon/constants';
import Category from '../../screens/category/Category';
import Home from '../../screens/home/Home';
import Order from '../../screens/orders/Order';
import Profile from '../../screens/profile/Profile';
import {TAB_ROUTES} from '../constants';

const BottomTabScreens = [
  {
    index: 1,
    route: TAB_ROUTES.HOME,
    label: 'Home',
    icon: 'home',
    type: APPICON_TYPES.FONTAWESOME,
    component: Home,
  },
  // {
  //   index: 2,
  //   route: TAB_ROUTES.CATEGORY,
  //   label: 'Category',
  //   icon: 'grid',
  //   type: APPICON_TYPES.FEATHER,
  //   component: Category,
  // },
  {
    index: 2,
    route: TAB_ROUTES.CATEGORY,
    label: 'Category',
    icon: 'view-dashboard',
    type: APPICON_TYPES.MATERIALCOMMUNITY,
    component: Category,
  },
  // {
  //   index: 3,
  //   route: TAB_ROUTES.ORDER,
  //   label: 'Orders',
  //   icon: 'clipboard-pencil',
  //   type: APPICON_TYPES.FOUNDATION,
  //   component: Order,
  // },

  {
    index: 3,
    route: TAB_ROUTES.ORDER,
    label: 'Orders',
    icon: 'shopping-cart',
    type: APPICON_TYPES.MATERIALICONS,
    component: Order,
  },

  // {
  //   index: 4,
  //   route: TAB_ROUTES.PROFILE,
  //   label: 'Profile',
  //   icon: 'user',
  //   type: APPICON_TYPES.FONTAWESOME,
  //   component: Profile,
  // },
  {
    index: 4,
    route: TAB_ROUTES.PROFILE,
    label: 'Profile',
    icon: 'user-circle-o',
    type: APPICON_TYPES.FONTAWESOME,
    component: Profile,
  },
];

export {BottomTabScreens};
