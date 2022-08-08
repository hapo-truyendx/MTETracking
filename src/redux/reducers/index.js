import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import MarketReducer from './MarketReducer';
import MintReducer from './MintReducer';
import ProfileReducer from './ProfileReducer';
import SneakerReducer from './SneakerReducer';

const rootReducer = combineReducers({
  login: LoginReducer,
  market: MarketReducer,
  profile: ProfileReducer,
  mint: MintReducer,
  sneaker: SneakerReducer
});

export default rootReducer;