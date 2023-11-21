import React from "react";
import Ingredients from "./Ingredients";


export default function RecipeCard({ recipe }) {
 
  

  return (
    <div>
      <div className="recipe-card">
        <h1>{recipe.recipe_name}</h1>
        <Ingredients
          ingredients={recipe.ingredients}
        />
      </div>
    </div>
  );
}
