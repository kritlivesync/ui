import normalize from '../helpers/normalizeText';
export default {
  size_10: normalize(10),
  size_11: normalize(11),
  size_12: normalize(12),
  size_13: normalize(13),
  size_14: normalize(14),
  size_15: normalize(15),
  size_16: normalize(16),
  size_17: normalize(17),
  size_18: normalize(18),
  size_19: normalize(19),
  size_20: normalize(20),
  size_21: normalize(21),
  size_22: normalize(22),
  size_23: normalize(23),
  size_24: normalize(24),
  size_25: normalize(25),
  size_26: normalize(26),
  size_27: normalize(27),
  size_28: normalize(28),
  size_29: normalize(29),
  size_30: normalize(30),
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
  },
};
