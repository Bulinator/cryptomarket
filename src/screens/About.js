import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

class About extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <FontAwesome name="info" size={24} color="white" />;
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
