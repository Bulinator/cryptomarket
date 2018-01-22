import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator,
  NavigationActions,
} from 'react-navigation';

import Currencies from '../src/screens/Currencies';
import About from '../src/screens/About';
import Color from '../src/constants/Color';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  tabText: {
    color: '#777',
    fontSize: 10,
    justifyContent: 'center',
  },
  selected: {
    color: 'blue',
  },
};

const TestScreen = title => () => (
  <View style={styles.container}>
    <Text>
      {title}
    </Text>
  </View>
);

// Our main scene with tabs
// (probably CSSha@ck for android)
const MainScreenNavigator = TabNavigator({
  Home: { screen: Currencies },
  About: { screen: About },
}, {
  tabBarOptions: {
    style: {
      backgroundColor: Color.tabBackgroundColor,
    },
    labelStyle: { fontSize: 11 },
    showIcon: true,
    showLabel: true,
    iconStyle: { width: 24 },
  },
  tabBarPosition: 'bottom',
  lazyLoad: true,
  swipeEnabled: false,
});

const AppNavigator = StackNavigator({
  Main: { screen: MainScreenNavigator },
}, {
  mode: 'modal',
});

// reducer init composeWithDevTools
const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const initialNavState = AppNavigator.router.getStateForAction(tempNavState);

export const navigationReducer = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  // return original state or nextState if null;
  return nextState || state;
};

class AppWithNavigationState extends Component {
  render() {
    const { dispatch, nav } = this.props;
    return <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />;
  }
}

// PropTypes
AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
