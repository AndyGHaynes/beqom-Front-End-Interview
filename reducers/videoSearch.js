import actionTypes from '../actions/types';

const initialState = {
  results: [],
  searchPending: false,
  error: ''
};

export default function (state = initialState, action) {
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
        results: action.videos,
        searchPending: false
      });
    default:
      return state;
  }
}