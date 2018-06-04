import normalize from '../helpers/normalizeText';
var size = {
  10: normalize(10),
  11: normalize(11),
  12: normalize(12),
  13: normalize(13),
  14: normalize(14),
  15: normalize(15),
  16: normalize(16),
  18: normalize(18),
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
}
export default {
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
    /* We are only allowed to use these in iOS */
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
    },
    size
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
      // note(brentvatne): sans-serif-black is only supported on Android 5+,
      // we can detect that here and use it in that case at some point.
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
    size
  },
};
