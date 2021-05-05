import React from 'react';
import { Link } from 'react-router-dom';

const BackLink = () => {
  return (
    <div>
      <Link to="/fastLearn">Back to Fast Learn Category Top</Link>
      <br/>
      <Link to='/'>Back to Top</Link>
    </div>
  );
};
export default BackLink;