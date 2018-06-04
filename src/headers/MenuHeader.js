import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image, } from 'react-native';

const MenuHeader = props => {
  const {
    mainTitle,
    subTitle,
    image,
    imageSize,
  } = props;

  return (
    <View>
      <View style={styles.header}>
        <Image
        style={[MenuHeader.defaultProps.imageSize, imageSize && imageSize]}
        source={image}
        />
        <View style={{flexDirection: 'column', alignItems: 'center', margin: 10}}>
          <Text style={styles.mainTitle}>{mainTitle}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>  
      </View>
      
    </View>
  );
};

MenuHeader.defaultProps = {
  mainTitle: '',
  subTitle: '',
  image: require('../images/Profile-1/user.png'),
  imageSize: {width: 100, height: 100}
};

MenuHeader.propTypes = {
  mainTitle: PropTypes.string,
  subTitle: PropTypes.string,
  valueTitle: PropTypes.string,
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120,
  },
  mainTitle: {
    fontSize: 20,
    color: '#78AEF9',
    fontWeight: 'normal'
  },
  subTitle: {
    fontSize: 14,
    color: '#9FB0C5',
    fontWeight: 'normal'
  },
});

export default MenuHeader;
