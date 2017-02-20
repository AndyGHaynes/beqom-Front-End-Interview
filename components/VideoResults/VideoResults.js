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
        <div>
          <span className={s.searchSpinner}>
            <i className="fa fa-spinner fa-pulse fa-4x" />
          </span>
        </div>
      )}
      {!searchPending && videos.map((video, i) => (
        <Col key={i} md={4} sm={6} xs={12}>
          <Well bsSize="small">
            <Video video={video} />
          </Well>
        </Col>
      ))}
    </Row>
  </Grid>
);