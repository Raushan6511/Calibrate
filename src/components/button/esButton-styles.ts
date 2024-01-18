import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import colors from "../../theme/colors";
interface Styles{
button:ViewStyle,
 buttonContainer:ViewStyle
 secondaryButton:ViewStyle
 title:TextStyle
 secondaryTitle:TextStyle
}

const styles = StyleSheet.create<Styles>({
    button:{
        borderRadius:10,
        padding:10,
        flex:1,
        alignItems:'center',
        margin:10,
    },
    buttonContainer:{
        justifyContent:'space-around',
        flexDirection:'row',
    },
    secondaryButton:{
        backgroundColor:colors.palette.white,
        borderColor:colors.primary,
        borderWidth:1
    },
    title:{
        color:colors.palette.white
    },
    secondaryTitle:{
        color:colors.primary
    }
})

export { styles };