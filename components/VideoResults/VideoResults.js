import React from 'react';
import s from './VideoResults.css';
import Video from '../Video';
import { Grid, Row, Col, Well } from 'react-bootstrap';

export default ({ searchPending, videos, error }) => (
  <Grid>
    <Row>
      {error && (
        <div className={s.searchError}>
          {error}
        </div>
      )}
      {searchPending && (
        <div className={s.searchSpinner}>
          <i className="fa fa-spinner fa-pulse fa-4x" />
        </div>
      )}
      {!searchPending && videos.map((video, i) => (
        <Col key={i} lg={3} md={4} sm={6} xs={12}>
          <Well bsSize="small">
            <Video video={video} />
          </Well>
        </Col>
      ))}
    </Row>
  </Grid>
);