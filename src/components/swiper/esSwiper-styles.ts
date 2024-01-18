import {Dimensions, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ImageStyle} from 'react-native-fast-image';
import {Typography} from '../../theme';
import colors from '../../theme/colors';
import {getFontSize, heightPxToDP, widthPxToDP} from '../../common/utilities';
import {SCREEN_WIDTH} from '../../common/constants';

interface Styles {
  dotContainer: ViewStyle;
  innerDotContainer: ViewStyle;
  dot: ViewStyle;
  activeDot: ViewStyle;
  inActiveDot: ViewStyle;
  image: ImageStyle;
}

const styles = StyleSheet.create<Styles>({
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  innerDotContainer: {
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    marginTop: -20,
  },
  dot: {
    height: heightPxToDP('1'),
    width: widthPxToDP('1.5'),
    borderRadius: 5,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: colors.palette.darkGray,
    width: widthPxToDP('4.5'),
  },
  inActiveDot: {
    backgroundColor: colors.palette.gray85,
  },
  image: {
    height: heightPxToDP('20'),
    width: SCREEN_WIDTH,
  },
});

export {styles};
