import React, { PureComponent } from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import { images } from '../constants/Images';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  containerImage: {
    flex: 0.4,
    paddingTop: 10,
    alignItems: 'center',
  },
  containerText: {
    flex: 2,
    padding: 5,
  },
  containerPrice: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  containerPercent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  image: {
    width: 45,
    height: 45,
  },
  coinSymbol: {
    marginTop: 3,
    fontWeight: 'bold',
  },
  coinPrice: {
    fontWeight: 'bold',
    paddingRight: 6,
  },
  coinPriceUSD: {
    color: '#A5A5A5',
  },
  percentChangePlus: {
    color: '#00BFA5',
    fontWeight: 'bold',
  },
  percentChangeMinus: {
    color: '#DD2C00',
    fontWeight: 'bold',
  },
};

class CoinList extends PureComponent {
  render() {
    const {
      symbol, name, price_btc, price_usd, last_updated,
      price_eur, percent_change_24h, percent_change_7d,
      percent_change_1h
    } = this.props.data;
    return (
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image
            style={styles.image}
            source={{ uri: images[symbol] || images['TRX'] }}
          />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.coinSymbol}>{symbol} | {name}</Text>
          <View style={styles.containerPrice}>
            <Text style={styles.coinPrice}>{Math.round(price_eur).toFixed(2)}€</Text>
            <Text style={styles.coinPriceUSD}>| {Math.round(price_usd).toFixed(2)}$</Text>
          </View>
          <View style={styles.containerPercent}>
          <Text>
            1H:
            <Text style={percent_change_1h < 0 ? styles.percentChangeMinus : styles.percentChangePlus}>
              {percent_change_1h}%
            </Text>
          </Text>
            <Text>
              24H:
              <Text style={percent_change_24h < 0 ? styles.percentChangeMinus : styles.percentChangePlus}>
                {percent_change_24h}%
              </Text>
            </Text>
            <Text>
              7D:
              <Text style={percent_change_7d < 0 ? styles.percentChangeMinus : styles.percentChangePlus}>
                {percent_change_7d}%
              </Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

CoinList.propTypes = {
  data: PropTypes.object,
};

export default CoinList;
