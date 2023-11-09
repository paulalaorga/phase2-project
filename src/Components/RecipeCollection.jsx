import React, { useState,useEffect } from 'react';
import RecipeCard from './RecipeCard';
import ShoppingList from './ShoppingList';

export default function RecipeCollection() {
  const [showRecipe, setShowRecipe] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [shoppingList, setShoppingList] = useState([]); 
  const [recipeState, setRecipeState] = useState({
    recipes: [],
  });

  useEffect(() => {
    fetch('https://my-menu-app.onrender.com/recipes')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched recipes:', data);
        setRecipeState({ recipes: data });
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  
    fetch('https://my-menu-app.onrender.com/shopping-list')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched shopping list:', data);
        setShoppingList(data);
      })
      .catch((error) => {
        console.error('Error fetching shopping list:', error);
      });
  }, []);
  

  const toggleRecipe = () => {
    setShowRecipe(!showRecipe);
  };

  const selectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setShowRecipe(true);
  };

  const addToShoppingList = (ingredient) => {
    setShoppingList([...shoppingList, ingredient]);
  }
  

  return (
    <div>
      <h1>Recipe Collection</h1>
      <ul className="recipe-collection">
        {recipeState.recipes.map((recipe) => (
          <li className="recipe-list" key={recipe.id}>
            <button
              className="recipe-button"
              onClick={() => {
                selectRecipe(recipe);
                toggleRecipe();
              }}
            >
              {recipe.recipe_name}
            </button>
          </li>
        ))}
      </ul>
      {showRecipe && selectedRecipe && <RecipeCard recipe={selectedRecipe} addToShoppingList={addToShoppingList} shoppingList={shoppingList} setShoppingList={setShoppingList}/>}
      <ShoppingList shoppingList={shoppingList} setShoppingList={setShoppingList} />
    </div>
  );
}


