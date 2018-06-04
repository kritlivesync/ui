'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from 'react-native';
import colors from '../config/colors';

import ViewPropTypes from '../config/ViewPropTypes';
import Layout from './Layout';

export default class Tab extends React.Component {
  static propTypes = {
    testID : PropTypes.string,
    title: PropTypes.string,
    titleStyle: Text.propTypes.style,
    badge: PropTypes.element,
    onPress: PropTypes.func,
    hidesTabTouch: PropTypes.bool,
    allowFontScaling: PropTypes.bool,
    style: ViewPropTypes.style,
    tabPosition: PropTypes.string,
    billingTab: PropTypes.bool,
    chart: PropTypes.bool,
    checkout: PropTypes.bool,
    signIn: PropTypes.bool,
    ecommerce: PropTypes.bool,
  };

  constructor(props, context) {
    super(props, context);

    this._handlePress = this._handlePress.bind(this);
  }

  render() {
    let { title, chart, checkout, signIn, ecommerce, bottomSelectedLine, badge } = this.props;
    let icon = null;
    if (React.Children.count(this.props.children) > 0) {
      icon = React.Children.only(this.props.children);
    }
    let mainStyles = [styles.title, this.props.titleStyle];

    if (this.props.tabPosition === 'top') {
      mainStyles.push(styles.titleTopPosition);
      (this.props.selected) ? mainStyles.push(styles.titleTopPositionSelected) : null;
    }

    if (this.props.chart) {
      mainStyles.push(styles.chartTitle);
      (this.props.selected) ? mainStyles.push(styles.chartSelected) : null;
    }

    if (this.props.checkout) {
      mainStyles.push(styles.checkoutTitle);
      (this.props.selected) ? mainStyles.push(styles.checkoutSelected) : null;
    }

    if (this.props.signIn) {
    }

    if (this.props.ecommerce) {
      mainStyles.push(styles.ecommerceTitle);
      (this.props.selected) ? mainStyles.push(styles.ecommerceSelected) : null;
    }

    if (this.props.billingTab) {
      mainStyles.push(styles.billingTitle);
      (this.props.selected) ? mainStyles.push(styles.billingTitleTopPositionSelected) : null;
      mainStyles.push(styles.noMargin);
    }


    if (title) {
      title =
        <Text
          numberOfLines={1}
          allowFontScaling={!!this.props.allowFontScaling}
          style={mainStyles}>
          {title}
        </Text>;
    }

    if (badge) {
      badge = React.cloneElement(badge, {
        style: [styles.badge, badge.props.style],
      });
    }

    let tabStyle = [
      styles.container,
      title ? null : styles.untitledContainer,
      this.props.style,
    ];
    if (
      !this.props.hidesTabTouch &&
      Platform.OS === 'android' &&
      Platform.Version >= 21
    ) {
      return (
        <TouchableNativeFeedback
          testID={this.props.testID}
          background={TouchableNativeFeedback.Ripple(undefined, true)}
          onPress={this._handlePress}>
          <View style={tabStyle}>
            <View>
              {icon}
              {badge}
            </View>
            {title}
            {this.props.tabPosition === 'top' && this.props.selected ? <View style={[styles.bottomSelectedLine, this.props.chart && styles.chartBorder, 
              this.props.checkout && styles.checkoutBorder, this.props.ecommerce && styles.ecommerceBorder, this.props.billingTab && styles.billingBorder, this.props.signIn && styles.signInContainer
             ]} /> : null}
          </View>
        </TouchableNativeFeedback>
      );
    }
    return (
      <TouchableOpacity
        testID={this.props.testID}
        activeOpacity={this.props.hidesTabTouch ? 1.0 : 0.8}
        onPress={this._handlePress}
        style={tabStyle}>
        <View>
          {icon}
          {badge}
        </View>
        {title}
        {this.props.tabPosition === 'top' && this.props.selected ? <View style={[styles.bottomSelectedLine, this.props.chart && styles.chartBorder, 
          this.props.checkout && styles.checkoutBorder, this.props.ecommerce && styles.ecommerceBorder, this.props.billingTab && styles.billingBorder, this.props.signIn && styles.signInContainer
         ]} /> : null}
      </TouchableOpacity>
    );
  }

  _handlePress(event) {
    if (this.props.onPress) {
      this.props.onPress(event);
    }
  }
}

let styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: -6,
    right: -10,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  untitledContainer: {
    paddingBottom: 13,
  },
  title: {
    color: colors.tabTextDefault,
    fontSize: 12,
    textAlign: 'center',
    alignSelf: 'stretch',
    marginTop: 4,
    marginBottom: 4 + Layout.pixel,
  },
  titleTopPosition: {
    color: '#fff',
    fontSize: 18,
    opacity: 0.5,
    textAlign: 'center',
    fontWeight: '500',
    alignSelf: 'stretch',
    marginTop: 0,
    marginBottom: 2 + Layout.pixel,
    padding: 7,
    paddingBottom: 15
  },
  titleTopPositionSelected: {
    color: '#fff',
    opacity: 1,
    fontSize: 18,
  },
  bottomSelectedLine: {
    width: 20,
    height: 7,
    backgroundColor: 'transparent',
    position: 'absolute',
    left: '45%',
    borderStyle: 'solid',
    borderWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: '#fff',
  },
  billingTitle: {
    color: '#CED4DA',
    fontWeight: 'bold'
  },
  search2Title: {
    color: '#B3BFD0',
  },
  chartTitle: {
    color: '#9FB0C5',
    opacity: 1,
    fontSize: 14
  },
  chartSelected: {
    color: '#00BAD3',
    fontSize: 14
  },
  checkoutTitle: {
    color: '#9FB0C5',
    opacity: 1,
    fontSize: 12,
    backgroundColor: '#E8EAEC',
    borderWidth: 1,
    borderColor: '#E8EAEC',
    paddingBottom: 35,
    paddingTop: 35,
    marginBottom: 7,
    borderRadius: 3,
    marginLeft: 5,
    marginRight: 5,
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  checkoutSelected: {
    color: '#425062',
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#E8EAEC',
    backgroundColor: '#fff',
    paddingBottom: 35,
    paddingTop: 35,
    marginBottom: 7,
    borderRadius: 3,
    marginLeft: 5,
    marginRight: 5,
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  ecommerceTitle: {
    color: '#9FB0C5',
    opacity: 1,
    fontSize: 14
  },
  ecommerceSelected: {
    color: '#425062',
    fontSize: 14
  },
  search2Selected: {
    color: '#136EF1'
  },
  signInContainer: {
    // flex: 0,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-end',
    // backgroundColor: 'red'
  },
  billingTitleTopPositionSelected: {
    color: '#fff',
    backgroundColor: '#78AEF9',
    borderRadius: 13,
    overflow: 'hidden'
  },
  billingBorder: {
    width: 0,
    height: 0
  },
  walletBorder: {
    backgroundColor: '#78AEF9',
  },
  chartBorder: {
    width: '100%',
    height: 2,
    backgroundColor: '#00BAD3',
    position: 'absolute',
    left: 'auto',
    borderStyle: 'solid',
    borderWidth: 0,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 0,
  },
  checkoutBorder: {
    width: '100%',
    height: 0,
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 'auto',
    borderStyle: 'solid',
    borderWidth: 0,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 0,
  },
  ecommerceBorder: {
    width: '100%',
    height: 2,
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 'auto',
    borderStyle: 'solid',
    borderWidth: 0,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 0,
  },
  search2Border: {
    backgroundColor: '#136EF1'
  },
  noMargin: {
    marginBottom: 0,
    fontSize: 12,
    height: 28,
  },
  hhh: {
    alignSelf: 'flex-start',
    width: 130
  }
});