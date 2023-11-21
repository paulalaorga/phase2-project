import React from "react";

export default function Ingredients({
  ingredients
}) {
  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  
  return (
    <div>
      <table className="ingredients-table">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient, index) => (
            <tr key={index}>
              <td>
                {capitalizeFirstLetter(ingredient.name)}
              </td>
              <td>{ingredient.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
