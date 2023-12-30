import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Typography } from '../../theme';
import colors from '../../theme/colors';

// import { AppColors, Typography } from 'theme';
// import { getFontSize, heightPxToDP, widthPxToDP } from 'common/utilities';

// import { SCREEN_HEIGHT } from 'common/constants';

interface Styles {
  container: ViewStyle;
  heading: TextStyle;
  label: TextStyle; 
  subheading: TextStyle;
  title: TextStyle; 
  subtitle:TextStyle;
}

const styles = StyleSheet.create<Styles>({

  container: {
    flex: 1,
    backgroundColor:'orange',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"center"
  },
   heading:{
    color:'black',
    fontSize:25,
    fontFamily:Typography.extraBold
   },
   subheading:{
    color:'black',
    fontSize:20,
    fontFamily:Typography.bold
   },
   title:{
    color:colors.palette.gray,
    fontSize:25,
    fontFamily:Typography.regular
   },
   subtitle:{
    color:colors.palette.gray,
    fontSize:20,
    fontFamily:Typography.regular
   },
   label:{
    color:colors.palette.gray,
    fontSize:14,
    fontFamily:Typography.regular
   },

});

export { styles };
