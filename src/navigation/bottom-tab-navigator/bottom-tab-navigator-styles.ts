import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {Typography} from '../../theme';

interface Styles {
  container: ViewStyle;
  heading: TextStyle;
  tabContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
  heading: {
    color: 'black',
    fontFamily: Typography.regular,
    fontSize: 14,
  },
  tabContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export {styles};
