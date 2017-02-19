import React from 'react';
import Video from '../Video';
import { Col } from 'react-bootstrap';

const VideoResults = ({ videos }) => (
  <div>
    {videos.map((video, i) => (
      <Col key={i} md={4}>
        <Video video={video} />
      </Col>
    ))}
  </div>
);

export default VideoResults;