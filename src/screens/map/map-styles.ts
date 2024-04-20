import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../theme/colors';

// import { AppColors, Typography } from 'theme';
// import { getFontSize, heightPxToDP, widthPxToDP } from 'common/utilities';

// import { SCREEN_HEIGHT } from 'common/constants';

interface Styles {
  container: ViewStyle;
  heading: TextStyle;
  map: any;
}

const styles = StyleSheet.create<Styles>({
  container: {
    // backgroundColor: colors.background,
    // flex: 1,
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  heading: {
    color: colors.palette.flamingo,
    fontFamily: 'Poppins-Italic',
  },
  map: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
  },
});

export {styles};
