import normalize from '../helpers/normalizeText';
export default {
  10: normalize(10),
  11: normalize(11),
  12: normalize(12),
  13: normalize(13),
  14: normalize(14),
  15: normalize(15),
  16: normalize(16),
  17: normalize(17),
  18: normalize(18),
  19: normalize(19),
  20: normalize(20),
  21: normalize(21),
  22: normalize(22),
  23: normalize(23),
  24: normalize(24),
  25: normalize(25),
  26: normalize(26),
  27: normalize(27),
  28: normalize(28),
  29: normalize(29),
  30: normalize(30),
  mini: normalize(10),
  small: normalize(13),
  medium: normalize(15),
  large: normalize(20),
  xlarge: normalize(24),
  ios: {
    regular: {
      fontFamily: 'PingFangHK-Regular, sans-serif',
    },
    medium: {
      fontFamily: 'PingFangHK-Medium',
    },
    extraBoldRegular: {
      fontFamily: 'Abadi MT Condensed Extra Bold Regular'
    },
    SFMedium: {
      fontFamily: 'SFUIText-Medium'
    },
    SFRegular: {
      fontFamily: 'SFUIText-Regular'
    },
    SFSemibold: {
      fontFamily: 'SFUIText-Semibold'
    },
    Ayuthaya: {
      fontFamily: 'Ayuthaya'
    }
  },
  android: {
    regular: {
      fontFamily: 'sans-serif',
    },
    medium: {
      fontFamily: 'PingFangHK-Medium, sans-serif-medium',
    },
    light: {
      fontFamily: 'sans-serif-light',
    },
    condensed: {
      fontFamily: 'sans-serif-condensed',
    },
    condensed_light: {
      fontFamily: 'sans-serif-condensed',
      fontWeight: 'light',
    },
    black: {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
    },
    bold: {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
    },
  },
};
