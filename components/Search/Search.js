import React from 'react';
import { FormControl } from 'react-bootstrap';

const Search = ({ updateQuery }) => (
  <div>
    <FormControl
      type="text"
      placeholder="Search..."
      onKeyUp={(e) => updateQuery(e.target.value, e.key === 'Enter')}
    />
  </div>
);

export default Search;