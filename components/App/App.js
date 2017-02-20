import React from 'react';
import s from './App.css';
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
        <div className={s.app}>
          <Grid>
            <Row>
              <Col md={12}>
                Header
              </Col>
            </Row>
            <Row>
              <Col
                md={6} mdOffset={3}
                sm={8} smOffset={2}
                xs={12}
              >
                <VideoSearchContainer />
              </Col>
            </Row>
          </Grid>
          <div className={s.videos}>
            <VideoResultsContainer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;