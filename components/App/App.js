import React from 'react';
import Search from '../Search';
import VideoResults from '../VideoResults';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col md={12}>
              Header
            </Col>
          </Row>
          <Row>
            <Col md={6} mdOffset={3}>
              <Search updateQuery={(query, submitted) => console.log(query, submitted)} />
            </Col>
          </Row>
          <Row>
            <VideoResults videos={[]} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;