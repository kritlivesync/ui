import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icons/Icon';
import Button from '../buttons/Button'
import { StyleSheet, View, Text, Image, } from 'react-native';

const ProfileHeader = props => {
  const {
    mainTitle,
    subTitle,
    image,
    imageSize,
  } = props;
  return (
    <View>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center',}}>
          <Image
          style={[ProfileHeader.defaultProps.imageSize, imageSize && imageSize]}
          source={image}
          />
          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <Text style={styles.mainTitle}>{mainTitle}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
        </View>
        <Icon
          color='#9FB0C5'
          name='cog'
          size={22}
        /> 
      </View>
      <View style={styles.navButtons}>
        <View style={styles.iconsHeader}>
          <Icon
            color='#fff'
            name='folder'
            size={30}
            style={styles.icon1}
          />
          <Text style={styles.textIcon1}>Saved</Text>
          <Text style={styles.textIcon2}>23</Text>
        </View>
        <View style={styles.iconsHeader}>
          <Icon
            color='#fff'
            name='star'
            size={30}
            style={styles.icon2}
          />
          <Text style={styles.textIcon1}>Favorite</Text>
          <Text style={styles.textIcon2}>23</Text>
        </View>
        <View style={styles.iconsHeader}>
          <Icon
            color='#fff'
            name='clock-o'
            size={30}
            style={styles.icon3}
          />
          <Text style={styles.textIcon1}>Recently</Text>
          <Text style={styles.textIcon2}>23</Text>
        </View>
        <View style={styles.iconsHeader}>
          <Icon
            color='#fff'
            name='heart'
            size={30}
            style={styles.icon4}
          />
          <Text style={styles.textIcon1}>Likes</Text>
          <Text style={styles.textIcon2}>23</Text>
        </View>
        
      </View>
    </View>
  );
};

ProfileHeader.defaultProps = {
  mainTitle: '',
  subTitle: '',
  image: require('../images/Profile-1/user.png'),
  imageSize: {width: 72, height: 72}
};

ProfileHeader.propTypes = {
  mainTitle: PropTypes.string,
  subTitle: PropTypes.string,
  valueTitle: PropTypes.string,
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 15,
    marginTop: 80,
  },
  mainTitle: {
    fontSize: 16,
    color: '#425062',
    fontWeight: '600'
  },
  subTitle: {
    fontSize: 12,
    color: '#9FB0C5',
    fontWeight: '500'
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 10,
  },
  iconsHeader: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  textIcon1: {
    color: '#425062',
    fontWeight: 'normal',
    fontSize: 14,
    marginTop: 5,
  },
  textIcon2: {
    color: '#9FB0C5',
    fontWeight: 'normal',
    fontSize: 12,
  },
   icon1: {
    backgroundColor: '#4EE1CA',
    borderRadius: 33,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon2: {
    backgroundColor: '#FF7E7B',
    borderRadius: 33,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon3: {
    backgroundColor: '#773EE4',
    borderRadius: 33,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon4: {
    backgroundColor: '#BA00BF',
    borderRadius: 33,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default ProfileHeader;
