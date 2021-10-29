export type fontType = {
  fontFamily: string;
  fontWeight: string;
};

export type paperType = {
  regular: fontType;
  medium: fontType;
  light: fontType;
  thin: fontType;
};

export type fontsConfigType = {
  web: paperType;
  ios: paperType;
  android: paperType;
  macos?: paperType;
  windows?: paperType;
};
