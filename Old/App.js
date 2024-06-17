import { Routes, Route } from 'react-router-dom';
import stove from './stove.png';
import './App.css';
import NavBar from './Components/NavBar';
import RecipeCollection from './Components/RecipeCollection';
import RecipeForm from './Components/RecipeForm';
import ShoppingList from './Components/ShoppingList';
import { useState } from 'react';

function App() {
  const [recipes, setRecipes] = useState([]); // Rename state variable
  const [shoppingList, setShoppingList] = useState([]); // Add a state variable for the shopping list

  function addRecipe(newRecipe) {
    setRecipes([...recipes, newRecipe])
    }
  
    const handleAddToShoppingList = (ingredient) => {
      setShoppingList([...shoppingList, ingredient]);
    }
    
  return (
    <div className="App">
      <header id="menu-header">
        <img src={stove} className="App-logo" alt="menu" />
      </header>
      <NavBar />
       <Routes>
        <Route path="/RecipeForm" element={<RecipeForm />} />
        <Route path="/RecipeCollection" element={<RecipeCollection recipes={recipes} />} />
        <Route path="/ShoppingList" element={<ShoppingList shoppingList={shoppingList} />} /> 
      </Routes> 
    </div>
  );
}

export default App;
