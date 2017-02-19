import { combineReducers } from 'redux';
import videoSearch from './videoSearch';

export default combineReducers({
  videoSearch,
  isMobile: (state) => state || false
});