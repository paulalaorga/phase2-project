import React, { useState } from 'react';
import RecipeCard from './RecipeCard';

function RecipeCollection(props) {
  
  const [showRecipe, setShowRecipe] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const toggleRecipe = () => {
    setShowRecipe(!showRecipe);
  };

  const selectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setShowRecipe(true); // Show the recipe when a recipe is selected.
  };
  return (
    <div>
      <h1>Recipe Collection</h1>
      <ul className="recipe-collection">
         {props.recipes.map((recipe) => (
          <li className="recipe-list" key={recipe.recipe_name}>
            <button className="recipe-button" onClick={() => { selectRecipe(recipe); toggleRecipe(); }}>
              {recipe.recipe_name}
            </button>
          </li>
        ))} 
      </ul>
      {showRecipe && selectedRecipe && (
        <RecipeCard recipe={selectedRecipe} />
      )}
    </div>
  );
}

export default RecipeCollection;