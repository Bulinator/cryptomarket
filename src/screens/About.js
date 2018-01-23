import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Color from '../constants/Color';
import I18n from '../i18n/';
import { Header } from '../components/common/';

const styles = {
  container: {
    ...Platform.select({
      ios: {
        marginTop: 64,
      },
      android: {
        marginTop: 0,
      },
    }),
  },
};

class About extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <FontAwesome name="info" size={20} color={tintColor} />;
    },
    header: null, // hide header as we use our own header
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title={I18n.t('title')} />
      </View>
    );
  }
}

export default About;
