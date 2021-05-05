import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className="nav">
        <Link to="/basic">
          <li className="ml-2">Basic</li>
        </Link>
        <Link to="/beginners">
          <li className="ml-2">Beginners</li>
        </Link>
        <Link to="/fastLearn">
          <li className="ml-2">FastLearn</li>
        </Link>
        <Link to="/hooksSample">
          <li className="ml-2">HooksSample</li>
        </Link>
        <Link to="/todo">
          <li className="ml-2">Todo</li>
        </Link>
      </ul>
    </nav>
  )
}
export default NavBar;