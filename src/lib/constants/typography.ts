import {paperType, fontsConfigType} from './types';

const fontFamily: string = 'Nunito';
const fontWeight: string = 'normal';

const paperFontsConfig: paperType = {
  regular: {
    fontFamily: `${fontFamily}`,
    fontWeight,
  },
  medium: {
    fontFamily: `${fontFamily}-Regular`,
    fontWeight,
  },
  light: {
    fontFamily: `${fontFamily}-Light`,
    fontWeight,
  },
  thin: {
    fontFamily: `${fontFamily}-Thin`,
    fontWeight,
  },
};

export const fontsConfig: fontsConfigType = {
  web: paperFontsConfig,
  ios: paperFontsConfig,
  android: paperFontsConfig,
};

export default {
  fontFamily: fontFamily,
  fontFamilyBold: `${fontFamily}-Bold`,
  fontFamilyRegular: `${fontFamily}-Regular`,
  fontFamilyLight: `${fontFamily}-Light`,
};
