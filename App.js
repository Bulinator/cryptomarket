import React from 'react';
import { Provider } from 'react-redux';
import I18n from 'ex-react-native-i18n';
import store from './src/store/';
import AppWithNavigationState from './src/navigation';

export default class App extends React.Component {
  componentWillMount() {
    // init i18n
    I18n.initAsync();
  }

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
