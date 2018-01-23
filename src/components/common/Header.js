import React from 'react';
import { View, Text, Platform } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import locFR from 'moment/locale/fr';
import locEN from 'moment/locale/en-gb';
import Color from '../../constants/Color';
import I18n from '../../i18n';

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
  const locale = I18n.currentLocale().substring(0, 2);
  (locale === 'fr') ? moment().locale('fr', locFR) : moment().locale('en-gb', locEN);
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{I18n.t('title')}</Text>
      { subtitle &&
        <Text style={styles.subTextStyle}>
          {I18n.t('update')}: {moment.unix(subtitle).fromNow()}
        </Text>
      }
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export { Header };
