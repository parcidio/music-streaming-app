import { Dimensions, Platform, StatusBar, PixelRatio } from 'react-native';



export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const IS_IOS = Platform.OS === 'ios';

export const normalizeText = (size: number): number => {
  const scale = WIDTH / 320;
  const newSize = size * scale;
  return IS_IOS
    ? Math.round(PixelRatio.roundToNearestPixel(newSize))
    : Math.round(PixelRatio.roundToNearestPixel(newSize) - 2);
};

export const statusBarHeight = Platform.select({
    ios: 44,
    android: StatusBar.currentHeight,
    default: 0,
});