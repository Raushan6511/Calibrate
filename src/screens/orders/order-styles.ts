import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

// import { AppColors, Typography } from 'theme';
// import { getFontSize, heightPxToDP, widthPxToDP } from 'common/utilities';

// import { SCREEN_HEIGHT } from 'common/constants';

interface Styles {
  container: ViewStyle;
  heading:TextStyle
}

const styles = StyleSheet.create<Styles>({

  container: {
    flex: 1,
    backgroundColor:'pink',
    flexDirection:'row',
    justifyContent:"center",
    alignItems:'center'
  },
   heading:{
    color:'black',
    fontSize:30,
    fontFamily:'Poppins-Italic'
   }
});

export { styles };
