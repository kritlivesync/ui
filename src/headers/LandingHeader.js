import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image } from 'react-native';

const LandingHeader = props => {
  const {
    mainTitle,
    image,
    imageSize,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mainTitle}>{mainTitle}</Text>
        <Image
        style={[LandingHeader.defaultProps.imageSize, imageSize && imageSize]}
        source={image}
        />
      </View>
      
    </View>
  );
};

LandingHeader.defaultProps = {
  mainTitle: '',
  image: require('../images/Walkthroughs1/Macaw.png'),
  imageSize: {width: 240, height: 210}
};

LandingHeader.propTypes = {
  mainTitle: PropTypes.string,
  valueTitle: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    display: 'flex',
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 25,
    marginTop: 50,
    marginBottom: 100,
    color: '#425062'
  },

});

export default LandingHeader;
