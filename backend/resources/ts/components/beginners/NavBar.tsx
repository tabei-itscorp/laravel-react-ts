import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul className="nav">
        <Link to="/beginners/sub">
          <li className="ml-2">Sub</li>
        </Link>
        <Link to="/beginners/hooks">
          <li className="ml-2">Hooks</li>
        </Link>
        <Link to="/beginners/memo">
          <li className="ml-2">Memo</li>
        </Link>
        <Link to="/beginners/memo2">
          <li className="ml-2">Memo2</li>
        </Link>
        <Link to="/beginners/useCallback">
          <li className="ml-2">UseCallback</li>
        </Link>
        <Link to="/beginners/useMemo">
          <li className="ml-2">UseMemo</li>
        </Link>
        <Link to="/beginners/useMemo2">
          <li className="ml-2">UseMemo2</li>
        </Link>
      </ul>
    </nav>
  )
}
export default NavBar;