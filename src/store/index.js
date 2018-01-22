import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { navigationReducer } from '../navigation';
import RootReducer from '../reducers/';

const store = createStore(
  combineReducers({
    reducer: RootReducer,
    nav: navigationReducer,
  }),
  applyMiddleware(thunk),
);

export default store;
