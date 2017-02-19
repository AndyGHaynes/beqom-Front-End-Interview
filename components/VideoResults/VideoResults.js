import React from 'react';
import Video from '../Video';
import { Grid, Row, Col, Well } from 'react-bootstrap';

const VideoResults = ({ videos }) => (
  <Grid>
    <Row>
      {videos.map((video, i) => (
        <Col key={i} lg={3} md={4} sm={6} xs={12}>
          <Well bsSize="small">
            <Video video={video} />
          </Well>
        </Col>
      ))}
    </Row>
  </Grid>
);

export default VideoResults;