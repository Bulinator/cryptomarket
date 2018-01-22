import axios from 'axios';
import { API_URL } from '../constants/Api';
import {
  FETCH_MARKET_DATA,
} from './types';

export const fetchCoinData = () => async(dispatch) => {
  await axios.get(`${API_URL}/v1/ticker/?convert=EUR`)
    .then(result => {
      dispatch({ type: FETCH_MARKET_DATA, payload: result });
    });
}
