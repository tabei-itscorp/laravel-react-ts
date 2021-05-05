import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className="nav">
        <Link to="/basic/about">
          <li className="ml-2">About</li>
        </Link>
        <Link to="/basic/user">
          <li className="ml-2">User</li>
        </Link>
      </ul>
    </nav>
  )
}
export default NavBar;