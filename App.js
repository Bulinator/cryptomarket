import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/';
import AppWithNavigationState from './src/navigation';

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <AppWithNavigationState />
        </Provider>  
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
