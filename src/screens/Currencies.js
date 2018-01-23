import _ from 'lodash';
import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SearchBar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import {
  Header,
  Spinner,
} from '../components/common';
import { fetchCoinData } from '../actions/';
import CoinList from '../components/CoinList';
import Color from '../constants/Color';

const styles = {
  container: {
    ...Platform.select({
      ios: {
        marginTop: 64,
      },
      android: {
        marginTop: 24,
      },
    }),
  },
};

class Currencies extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <FontAwesome name="bank" size={24} color="white" />;
    },
    header: null, // hide header as we use our own header
  }

  state = { data: '', searchData: '', refreshing: false };

  componentDidMount() {
    this.props.fetchCoinData();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      searchData: nextProps.crypto,
      data: nextProps.crypto
    });
  }

  onRenderList = (item) => {
    return (
      <CoinList data={item} />
    );
  }

  filterSearch = (text) => {
    if (text.length > 2) {
      let result = _.remove(this.state.searchData, (value) => {
        return value.name.match('^' + '[' + text + ']', 'i');
      });

      this.setState({ searchData: result });
    } else {
      this.setState({ searchData: this.state.data });
    }
  }

  handleRefresh = () => {
    this.props.fetchCoinData();
  }

  renderHeader = () => {
    return (
      <SearchBar
        lightTheme
        placeholder="Search cryto money"
        onChangeText={(text) => this.filterSearch(text)}
      />
    );
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: Color.tabBackgroundColor
        }}
      />
    )
  }

  render() {
    if (_.isEmpty(this.props.crypto)) {
      return (
        <View style={{ flex: 1 }}>
          <Spinner />
        </View>
      );
    }
    //console.log(this.props.crypto[0].last_updated);
    return (
      <View style={styles.container}>
        <Header
          title="Currencies tracker"
          subtitle={this.props.crypto[0].last_updated}
        />
        <FlatList
          data={this.state.searchData}
          extraData={this.state.searchData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => this.onRenderList(item)}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          removeClippedSubviews={false}
          keyboardDismissMode="on-drag"
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
        />
      </View>
    );
  }
}

Currencies.propTypes = {
  fetchCoinData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    crypto: state.reducer.crypto,
  };
};

export default connect(mapStateToProps, {
  fetchCoinData,
})(Currencies);
