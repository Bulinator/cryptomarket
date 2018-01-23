import { AppLoading, Asset } from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import I18n from 'ex-react-native-i18n';
import store from './src/store/';
import AppWithNavigationState from './src/navigation';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  componentWillMount() {
    // init i18n
    I18n.initAsync();
  }

  _loadResourceAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/icon.png'),
        require('./assets/splash.png'),
      ]),
    ]);
  }

  _handleLoadingError = (error) => {
    // In case of we want to report error with sentry for instance
    console.warn(error);
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourceAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }

    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
