import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

export default function RecipeCollection() {
  const [showRecipe, setShowRecipe] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipeState, setRecipeState] = useState({
    recipes: [],
  });

  useEffect(() => {
    fetch('https://my-menu-app.onrender.com/recipes')
      .then((response) => response.json())
      .then((data) => {
        console.log('Recipes:', data);
        setRecipeState({ recipes: data });
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
      });
  }, []);

  const selectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setShowRecipe(true);
  };

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
              }}
            >
              {recipe.recipe_name}
            </button>
          </li>
        ))}
      </ul>
      {showRecipe && selectedRecipe && <RecipeCard recipe={selectedRecipe} />}
    </div>
  );
}

