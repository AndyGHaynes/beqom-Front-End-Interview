import React from 'react';
import rootReducer from '../../reducers';
import VideoSearchContainer from '../../containers/VideoSearch';
import VideoResultsContainer from '../../containers/VideoResults';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = createStore(rootReducer, applyMiddleware(thunk));
  }

  render() {
    return (
      <Provider store={this.store}>
        <div>
          <Grid>
            <Row>
              <Col md={12}>
                Header
              </Col>
            </Row>
            <Row>
              <Col md={6} mdOffset={3}>
                <VideoSearchContainer />
              </Col>
            </Row>
            <Row>
              <VideoResultsContainer />
            </Row>
          </Grid>
        </div>
      </Provider>
    );
  }
}

export default App;