import React from 'react';
import { Link } from 'react-router-dom';

const BackLink: React.FC = () => {
  return (
    <div>
      <Link to="/beginners">Back to Beginners Category Top</Link>
      <br/>
      <Link to='/'>Back to Top</Link>
    </div>
  );
};
export default BackLink;