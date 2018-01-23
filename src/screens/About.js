import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

class About extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <FontAwesome name="info" size={20} color={tintColor} />;
    },
  }

  render() {
    return (
      <View>
        <Text>Here is settings</Text>
      </View>
    );
  }
}

export default About;
