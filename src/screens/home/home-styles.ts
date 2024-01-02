import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import colors from '../../theme/colors';

// import { AppColors, Typography } from 'theme';
// import { getFontSize, heightPxToDP, widthPxToDP } from 'common/utilities';

// import { SCREEN_HEIGHT } from 'common/constants';

interface Styles {
  container: ViewStyle;
  heading:TextStyle
}

const styles = StyleSheet.create<Styles>({

  container: {
    // alignItems:'center',
    backgroundColor:colors.background,
    flex: 1,
    // justifyContent:"center"
  },
   heading:{
    color:colors.palette.flamingo,
    fontFamily:'Poppins-Italic',
    
   }
});

export { styles };
