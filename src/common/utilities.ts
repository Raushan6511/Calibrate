import { PixelRatio } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "./constants";

const widthPxToDP = (width: string) => {
    // Convert string input to decimal number
    const elemWidth = parseFloat(width);
    return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * elemWidth) / 100);
  };
  
  const heightPxToDP = (height: string) => {
    // Convert string input to decimal number
    const elemHeight = parseFloat(height);
    return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * elemHeight) / 100);
  };

  export {widthPxToDP,heightPxToDP}