import { combineReducers } from 'redux';
import videoSearch from './videoSearch';

export default combineReducers({
  videoSearch,
  // dummy reducer - this store property will only be set on initialization
  isMobile: (state) => state || false
});