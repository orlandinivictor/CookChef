const Colors = {
  blue900: '#05102e',
  blue850: '#081845',
  blue800: '#09215d',
  blue700: '#0e318b',
  blue600: '#1242ba',
  blue500: '#1752e8',
  blue400: '#4575ed',
  blue300: '#7497f1',
  blue200: '#a2baf6',
  blue100: '#d1dcfa',

  white: '#ffffff',
  black: '#000000',

  gray900: '#1a1a1a',
  gray800: '#333333',
  gray700: '#4d4d4d',
  gray600: '#666666',
  gray500: '#808080',
  gray400: '#999999',
  gray300: '#b3b3b3',
  gray200: '#cccccc',
  gray100: '#e6e6e6',
};

export const theme = {
  darkTheme: {
    colors: {
      header: Colors.blue900,
      backgroundPage: Colors.blue850,
      onFocus: Colors.blue700,
      onFocusCategorie: Colors.blue500,
      separator: Colors.blue600,
      background: Colors.gray900,
      border: Colors.gray600,
      primary: Colors.gray200,
      onFocusColor: Colors.white,
    },
  },
  lightTheme: {
    colors: {},
  },
};
