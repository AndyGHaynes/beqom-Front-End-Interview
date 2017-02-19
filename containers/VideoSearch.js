import { connect } from 'react-redux';
import actions from '../actions';
import VideoSearch from '../components/VideoSearch';

function mapState(state) {
  return {
    isMobile: state.isMobile,
    error: state.videoSearch.error
  };
}

function mapDispatch(dispatch) {
  return {
    searchVideos: (query) => dispatch(actions.searchVideos(query))
  };
}

export default connect(mapState, mapDispatch)(VideoSearch);