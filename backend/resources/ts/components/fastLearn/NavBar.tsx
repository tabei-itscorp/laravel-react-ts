import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className="nav">
        <Link to="/fastLearn/hello">
          <li className="ml-2">Hello</li>
        </Link>
        <Link to="/fastLearn/bookList">
          <li className="ml-2">BookList</li>
        </Link>
      </ul>
    </nav>
  )
}
export default NavBar;