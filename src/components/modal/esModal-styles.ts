import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../theme/colors';
interface Styles {
  modal: ViewStyle;
  container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  modal: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
});

export {styles};
