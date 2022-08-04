import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import MarketReducer from './MarketReducer';
import ProfileReducer from './ProfileReducer';

const rootReducer = combineReducers({
  login: LoginReducer,
  market: MarketReducer,
  profile: ProfileReducer,
});

export default rootReducer;