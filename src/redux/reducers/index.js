import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import MarketReducer from './MarketReducer';

const rootReducer = combineReducers({
  login: LoginReducer,
  market: MarketReducer
});

export default rootReducer;