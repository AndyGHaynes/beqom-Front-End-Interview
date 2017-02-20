import actionTypes from '../actions/types';

const initialState = {
  videos: [],
  searchPending: false,
  error: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.VideoSearchPending:
      return Object.assign({}, state, {
        searchPending: true
      });
    case actionTypes.VideoSearchError:
      return Object.assign({}, state, {
        error: action.error,
        searchPending: false
      });
    case actionTypes.UpdateVideoResults:
      return Object.assign({}, state, {
        videos: action.videos,
        searchPending: false,
        error: ''
      });
    default:
      return state;
  }
}