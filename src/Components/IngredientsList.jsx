import React from "react";

export default function IngredientList({ ingredients }) {
  return (
    <div className="ingredient-list">
      <h2>Ingredients:</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name}: {ingredient.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
