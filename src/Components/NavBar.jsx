import React, { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import RecipeCollection from './RecipeCollection';
import RecipeForm from './RecipeForm';

function NavBar() {
  const [recipes, setRecipes] = useState([]); // Rename state variable

  useEffect(() => {
    fetch('https://my-menu-app.onrender.com/recipes')
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
      })
  }, []);

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
      <Routes>
        <Route path="/RecipeForm" element={<RecipeForm />} />
        <Route path="/RecipeCollection" element={<RecipeCollection recipes={recipes} />} />
      </Routes>
    </>
  );
}

export default NavBar;