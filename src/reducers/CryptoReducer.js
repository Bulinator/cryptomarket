import {
  FETCH_MARKET_DATA
} from '../actions/types';

const initialState ={};

const CryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MARKET_DATA:
      return action.payload.data;
    default:
      return state;
  }
};

export default CryptoReducer;
