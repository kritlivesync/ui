'use strict';

import { Set } from 'immutable';
import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Platform,
} from 'react-native';

import Badge from './Badge';
import Layout from './Layout';
import StaticContainer from './StaticContainer';
import Tab from './Tab';
import TabBar from './TabBar';
import TabNavigatorItem from './TabNavigatorItem';
import ViewPropTypes from '../config/ViewPropTypes';
import colors from '../config/colors';

export default class TabNavigator extends React.Component {
  static propTypes = {
    ...ViewPropTypes,
    sceneStyle: ViewPropTypes.style,
    tabBarStyle: TabBar.propTypes.style,
    tabBarShadowStyle: TabBar.propTypes.shadowStyle,
    hidesTabTouch: PropTypes.bool,
    tabPosition: PropTypes.string,
    billingTab: PropTypes.bool,
    chart: PropTypes.bool,
    checkout: PropTypes.bool,
    signIn: PropTypes.bool,
    ecommerce: PropTypes.bool,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      renderedSceneKeys: this._updateRenderedSceneKeys(props.children),
    };

    this._renderTab = this._renderTab.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let { renderedSceneKeys } = this.state;
    this.setState({
      renderedSceneKeys: this._updateRenderedSceneKeys(
        nextProps.children,
        renderedSceneKeys,
      ),
    });
  }

  // noinspection JSAnnotator
  _getSceneKey(item, index): string {
    return `scene-${(item.key !== null) ? item.key : index}`;
  }

  // noinspection JSAnnotator
  _updateRenderedSceneKeys(children, oldSceneKeys = Set()): Set {
    let newSceneKeys = Set().asMutable();
    React.Children.forEach(children, (item, index) => {
      if (item === null) {
        return;
      }
      let key = this._getSceneKey(item, index);
      if (oldSceneKeys.has(key) || item.props.selected) {
        newSceneKeys.add(key);
      }
    });
    return newSceneKeys.asImmutable();
  }

  render() {
    let { style, billingTab, chart, checkout, signIn, ecommerce, tabs, search, children, tabBarStyle, tabBarShadowStyle, sceneStyle, ...props } = this.props;
    let scenes = [];

    React.Children.forEach(children, (item, index) => {
      if (item === null) {
        return;
      }
      let sceneKey = this._getSceneKey(item, index);
      if (!this.state.renderedSceneKeys.has(sceneKey)) {
        return;
      }

      let { selected } = item.props;
      let scene =
        <SceneContainer tabPosition={this.props.tabPosition} chart={this.props.chart} checkout={this.props.checkout} 
        signIn={this.props.signIn} ecommerce={this.props.ecommerce} billingTab={this.props.billingTab} key={sceneKey} selected={selected} style={sceneStyle}>
          {item}
        </SceneContainer>;

      scenes.push(scene);
    });

    if (billingTab) {
      tabBarStyle.backgroundColor= '#fff';
      tabBarStyle.marginLeft= 70;
      tabBarStyle.marginRight= 70;
      tabBarStyle.borderWidth= 1;
      tabBarStyle.height= 30;
      tabBarStyle.borderRadius= 3;
      tabBarStyle.borderColor= '#fff';
    }

    if (chart) {
      tabBarStyle.backgroundColor= '#fff';
      tabBarStyle.width= '100%';
      tabBarStyle.paddingTop= 10;
      if (Platform.OS === 'android') {
        tabBarStyle.position= 'absolute';
        tabBarStyle.top= -50;
      }
    }

    if (signIn) {
      tabBarStyle.backgroundColor= 'transparent';
      tabBarStyle.width= '100%';
      if (Platform.OS === 'android') {
        tabBarStyle.position= 'absolute';
        tabBarStyle.top= -50;
      }
    }

    if (checkout) {
      tabBarStyle.backgroundColor= '#fff';
      tabBarStyle.width= '90%';
      tabBarStyle.paddingTop= 40;
      tabBarStyle.marginTop= 100;
      tabBarStyle.marginLeft= 20;
      if (Platform.OS === 'android') {
        tabBarStyle.position= 'absolute';
        tabBarStyle.top= -250;
        tabBarStyle.height= 150;
      }
    }

    if (ecommerce) {
      tabBarStyle.backgroundColor= '#fff';
      tabBarStyle.width= '100%';
      tabBarStyle.paddingTop= 10;
      if (Platform.OS === 'android') {
        tabBarStyle.position= 'absolute';
        tabBarStyle.top= -50;
      }
    }

    if (tabs) {
      tabBarStyle.backgroundColor= 'white';
    }

    if (search) {
      tabBarStyle.backgroundColor= '#2F80F6';
    }
    
    return (
      <View {...props} style={[styles.container, style]}>
        {scenes}
        <TabBar style={this.props.tabPosition === 'top' ? [tabBarStyle, styles.tabBarStyleTop] : tabBarStyle} shadowStyle={tabBarShadowStyle}>
          {React.Children.map(children, this._renderTab)}
        </TabBar>
      </View>
    );
  }

  _renderTab(item) {
    let icon, selectedTab = false;
    if (item === null) {
      return;
    }
    if (item.props.selected) {
      selectedTab = true;
      if (item.props.renderSelectedIcon) {
        icon = item.props.renderSelectedIcon();
      } else if (item.props.renderIcon) {
        let defaultIcon = item.props.renderIcon();
        icon = React.cloneElement(defaultIcon, {
          style: [defaultIcon.props.style, styles.defaultSelectedIcon],
        });
      }
    } else if (item.props.renderIcon) {
      icon = item.props.renderIcon();
    }

    let badge;
    if (item.props.renderBadge) {
      badge = item.props.renderBadge();
    } else if (item.props.badgeText) {
      badge = <Badge>{item.props.badgeText}</Badge>;
    }

    return (
      <Tab
        tabPosition={this.props.tabPosition}
        billingTab={this.props.billingTab}
        chart={this.props.chart}
        signIn={this.props.signIn}
        checkout={this.props.checkout}
        ecommerce={this.props.ecommerce}
        testID={item.props.testID}
        title={item.props.title}
        allowFontScaling={item.props.allowFontScaling}
        titleStyle={[
          item.props.titleStyle,
          item.props.selected ? [
            styles.defaultSelectedTitle,
            item.props.selectedTitleStyle,
          ] : null,
        ]}
        badge={badge}
        selected={selectedTab}
        // chart={this.props.chart}
        // signIn={this.props.signIn}
        // checkout={this.props.checkout}
        // ecommerce={this.props.ecommerce}
        onPress={item.props.onPress}
        hidesTabTouch={this.props.hidesTabTouch}
        style={item.props.tabStyle}>
        {icon}
      </Tab>
    );
  }
}

class SceneContainer extends React.Component {
  static propTypes = {
    ...ViewPropTypes,
    selected: PropTypes.bool,
  };

  render() {
    let { selected, ...props } = this.props;

    return (
      <View
        {...props}
        pointerEvents={selected ? 'auto' : 'none'}
        removeClippedSubviews={!selected}
        style={[
          (this.props.tabPosition === 'top') ? styles.sceneContainerTop : styles.sceneContainer,
          selected ? null : styles.hiddenSceneContainer,
          props.style,
        ]}>
        <StaticContainer shouldUpdate={selected}>
          {this.props.children}
        </StaticContainer>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sceneContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // paddingBottom: Layout.tabBarHeight,
  },
  sceneContainerTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // paddingBottom: Layout.tabBarHeight,
  },
  hiddenSceneContainer: {
    overflow: 'hidden',
    opacity: 0,
  },
  defaultSelectedTitle: {
    color: colors.tabTextSelected,
  },
  defaultSelectedIcon: {
    tintColor: 'rgb(0, 122, 255)',
  },
  bilingContainer: {
    backgroundColor: 'red'
  }
});

TabNavigator.Item = TabNavigatorItem;