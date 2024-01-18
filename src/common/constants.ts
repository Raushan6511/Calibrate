import { Dimensions } from "react-native";

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

enum RESIZE_MODE{
    CONTAIN='contain',
    COVER='cover',
    STRETCH='stretch',
    CENTER='center',
    REPEAT='repeat'
}

export {SCREEN_HEIGHT,SCREEN_WIDTH,RESIZE_MODE}