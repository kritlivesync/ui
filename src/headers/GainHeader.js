import React from 'react';
import PropTypes from 'prop-types';
import GainLine from '../charts/GainLine';
import { StyleSheet, View,  } from 'react-native';

const GainHeader = props => {
  const {
    data,
    options,
  } = props;

  return (
  	<View>  
      <View>
        <GainLine data={data} options={options} xKey='x' yKey='y' />
      </View>
    </View>
  );
};

GainHeader.defaultProps = {

};

GainHeader.propTypes = {

};

const styles = StyleSheet.create({
  
});

export default GainHeader;