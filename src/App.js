import { useEffect, useState } from 'react';
import stove from './stove.png';
import './App.css';
import NewRecipe from './Components/NewRecipe';
import RecipeCollection from './Components/RecipeCollection';
import NavBar from './Components/NavBar';

function App() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch('https://my-menu-app.onrender.com/recipes')
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header id="menu-header">
        <img src={stove} className="App-logo" alt="menu" />
      </header>
      <NavBar />
      <NewRecipe />
      <RecipeCollection recipe={recipe} />
    </div>
  );
}

export default App;
