import React from 'react';
import { Link } from 'react-router-dom';

const BackLink = () => {
  return (
    <div>
      <Link to="/hooksSample">Back to Hooks Sample Category Top</Link>
      <br/>
      <Link to='/'>Back to Top</Link>
    </div>
  );
};
export default BackLink;