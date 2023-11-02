import React from 'react';
import Ingredients from './Ingredients';

export default function RecipeCard({ recipe }) {
  console.log(recipe);
  return (
    <div>
      {recipe ? (
        <div className="recipe-card">
          <h1>{recipe.recipe_name}</h1>
          <Ingredients ingredients={recipe.ingredients} />
        </div>
      ) : (
        <p>Please select a recipe</p>
      )}
    </div>
  );
}
