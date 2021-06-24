import React from 'react';
import { Link } from 'react-router-dom';

const BackLink: React.FC = () => {
  return (
    <div>
      <Link to="/basic">Back to Basic Category Top</Link>
      <br/>
      <Link to='/'>Back to Top</Link>
    </div>
  );
};
export default BackLink;