import React from 'react';
import { Col } from 'react-bootstrap';

const Video = ({ video }) => (
  <div>
    {video.title} - {video.url}
  </div>
);

export default Video;