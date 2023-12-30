import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import colors from '../../theme/colors';
import { Typography } from '../../theme';

// import { AppColors, Typography } from 'theme';
// import { getFontSize, heightPxToDP, widthPxToDP } from 'common/utilities';

// import { SCREEN_HEIGHT } from 'common/constants';

interface Styles {
  container: ViewStyle;
  heading:TextStyle
}

const styles = StyleSheet.create<Styles>({

  container: {
    alignItems:'center',
    backgroundColor:colors.palette.red,
    flex: 1,
    flexDirection:'row',
    justifyContent:"center"
  },
   heading:{
    color:colors.palette.white,
    fontFamily: Typography.italic,
    fontSize:30
   }
});

export { styles };
