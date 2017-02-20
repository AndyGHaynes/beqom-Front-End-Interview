import 'whatwg-fetch';
import actionTypes from './types';
import config from '../config';

// return an action function with arguments bound to the properties passed in
function createAction(type, ...props) {
  return function(...args) {
    let action = { type };
    // bind arguments to properties passed to createAction
    (props || []).forEach((prop, i) => {
      action[prop] = args[i];
    });
    return action;
  }
}

const updateVideoResults = createAction(actionTypes.UpdateVideoResults, 'videos');
const videoSearchPending = createAction(actionTypes.VideoSearchPending);
const videoSearchError = createAction(actionTypes.VideoSearchError, 'error');

function searchVideos(query) {
  return async function(dispatch) {
    // update the state to indicate search has started
    dispatch(videoSearchPending());

    await fetch(`${config.searchUrl}${query}`, {
      type: 'GET',
      headers: config.searchHeaders
    })
    .then(response => response.json())
    .then(json => {
      if (json.error) {
        dispatch(videoSearchError(json.error));
      } else {
        dispatch(updateVideoResults(json));
      }
    })
    .catch(ex => dispatch(videoSearchError(ex.message)));
  }
}

export default {
  searchVideos
};