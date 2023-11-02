import React, { useEffect, useState } from 'react';
import stove from './stove.png';
import './App.css';
import RecipeCollection from './Components/RecipeCollection';
import NavBar from './Components/NavBar';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://my-menu-app.onrender.com/recipes')
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header id="menu-header">
        <img src={stove} className="App-logo" alt="menu" />
      </header>
      <NavBar />
    </div>
  );
}

export default App;
