import { connect } from 'react-redux';
import actions from '../actions';
import VideoResults from '../components/VideoResults';

function mapState(state) {
  return {
    videos: state.videoSearch.results
  };
}

export default connect(mapState)(VideoResults);