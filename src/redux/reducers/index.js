import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import MarketReducer from './MarketReducer';
import MintReducer from './MintReducer';
import ProfileReducer from './ProfileReducer';

const rootReducer = combineReducers({
  login: LoginReducer,
  market: MarketReducer,
  profile: ProfileReducer,
  mint: MintReducer,
});

export default rootReducer;