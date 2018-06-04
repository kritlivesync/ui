import React from 'react';
import PropTypes from 'prop-types';
import colors from '../config/colors';
import { StyleSheet, View, Text, Image } from 'react-native';

const LoginHeader = props => {
  const {
    image,
    imageSize,
  } = props;

  return (
    <View style={styles.header}>
      <Image
        style={[LoginHeader.defaultProps.imageSize, imageSize && imageSize]}
        source={image}
        />
    </View>
  );
};

LoginHeader.defaultProps = {
  image: require('../images/Walkthroughs1/Macaw.png'),
  imageSize: {width: 130, height: 114}
};

LoginHeader.propTypes = {
  headerTitle: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
    padding: 0,
  },
  header: {
    flexDirection: 'column',
    marginVertical: 50,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: -1
  },
});

export default LoginHeader;