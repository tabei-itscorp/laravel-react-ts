import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className="nav">
        <Link to="/hooksSample/UseState">
          <li className="ml-2">UseState</li>
        </Link>
        <Link to="/hooksSample/UseEffect">
          <li className="ml-2">UseEffect</li>
        </Link>
        <Link to="/hooksSample/UseEffect2">
          <li className="ml-2">UseEffect2</li>
        </Link>
      </ul>
    </nav>
  )
}
export default NavBar;