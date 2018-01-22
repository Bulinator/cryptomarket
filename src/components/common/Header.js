import React from 'react';
import { View, Text, Platform } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import Color from '../../constants/Color';

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    backgroundColor: Color.tabBackgroundColor,
    ...Platform.select({
      ios: {
        shadowColor: Color.shadowColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 2,
      },
    }),
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Color.tabTextColor,
  },
  subTextStyle: {
    padding: 3,
    color: Color.tabTextColor,
    fontSize: 12,
  },
};

const Header = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{title}</Text>
      <Text style={styles.subTextStyle}>
        Last update: {moment.unix(subtitle).fromNow()}
      </Text>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export { Header };
