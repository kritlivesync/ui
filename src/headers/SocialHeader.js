import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icons/Icon';
import Button from '../buttons/Button'
import { StyleSheet, View, Text, Image, } from 'react-native';

const SocialHeader = props => {
  const {
    mainTitle,
    subTitle,
    image,
    imageSize,
  } = props;
  return (

    <View style={styles.header}>
      <Image
      style={[SocialHeader.defaultProps.imageSize, imageSize && imageSize]}
      source={image}
      />
      <View style={{flexDirection: 'column', marginLeft: 10}}>
        <Text style={styles.mainTitle}>{mainTitle}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>

  );
};

SocialHeader.defaultProps = {
  mainTitle: '',
  subTitle: '',
  image: require('../images/obama.png'),
  imageSize: {width: 56, height: 56}
};

SocialHeader.propTypes = {
  mainTitle: PropTypes.string,
  subTitle: PropTypes.string,
  valueTitle: PropTypes.string,
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 5,
  },
  mainTitle: {
    fontSize: 16,
    color: '#425062',
    fontWeight: 'normal'
  },
  subTitle: {
    fontSize: 14,
    color: '#DADFE6',
    fontWeight: 'normal',
  },
});

export default SocialHeader;
