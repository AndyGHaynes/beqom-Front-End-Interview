import { connect } from 'react-redux';
import actions from '../actions';
import VideoResults from '../components/VideoResults';

function mapState(state) {
  return {
    searchPending: state.videoSearch.searchPending,
    videos: state.videoSearch.videos,
    error: state.videoSearch.error
  };
}

export default connect(mapState)(VideoResults);