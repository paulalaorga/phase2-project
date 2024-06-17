import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
 
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/RecipeForm">New Recipe</Link>
          </li>
          <li>
            <Link to="/RecipeCollection">Your Recipes</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
