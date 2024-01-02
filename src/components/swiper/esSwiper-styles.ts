import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Typography } from '../../theme';
import colors from '../../theme/colors';
import { getFontSize, heightPxToDP, widthPxToDP } from '../../common/utilities';

interface Styles {



  dotContainer:ViewStyle
  dot:ViewStyle
  activeDot:ViewStyle
  inActive:ViewStyle
}

const styles = StyleSheet.create<Styles>({

 


   dotContainer:{
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  dot:{ height: heightPxToDP('1'),
    width: widthPxToDP('1.5'),
    borderRadius: 5,
    marginHorizontal: 3,
  },
  activeDot:{
    backgroundColor:colors.palette.darkGray,
    width: widthPxToDP('3.5'),
  },
  inActive:{
    backgroundColor:colors.palette.gray85
  },
});

export { styles };
