import React from 'react';
import { FormControl } from 'react-bootstrap';

export default ({ isMobile, searchVideos }) => (
  <div>
    <FormControl
      type="text"
      placeholder="Search..."
      onKeyUp={(e) => (isMobile || e.key === 'Enter') && searchVideos(e.target.value)}
    />
  </div>
);