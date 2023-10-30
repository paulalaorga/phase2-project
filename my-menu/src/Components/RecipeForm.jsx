import React, { useState } from "react";
import IngredientsList from "./IngredientsList"; // Import the IngredientList component

export default function RecipeForm() {
  const [recipeName, setRecipeName] = useState("");
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientAmount, setIngredientAmount] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState([]);

  const handleRecipeNameChange = (event) => {
    setRecipeName(event.target.value);
  };

  const handleIngredientNameChange = (event) => {
    setIngredientName(event.target.value);
  };

  const handleIngredientAmountChange = (event) => {
    setIngredientAmount(event.target.value);
  };

  const addIngredient = () => {
    if (ingredientName && ingredientAmount) {
      const ingredient = {
        name: ingredientName,
        amount: ingredientAmount,
      };
      setRecipeIngredients([...recipeIngredients, ingredient]);
      setIngredientName("");
      setIngredientAmount("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const recipeData = {
      name: recipeName,
      ingredients: recipeIngredients,
    };

    fetch("http://localhost:3000/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Recipe data has been saved:", data);
      })
      .catch((error) => {
        console.error("Error saving recipe data:", error);
      });
  };

  return (
    <div>
    <form className="add-recipe-form" onSubmit={handleSubmit}>
      <label className="input-text">
        Recipe name:
        <input
          className="input-text"
          type="text"
          name="recipe-name"
          value={recipeName}
          onChange={handleRecipeNameChange}
        />
        Ingredients:
        <div>
          <input
            className="input-text"
            type="text"
            name="ingredient-name"
            placeholder="Ingredient name"
            value={ingredientName}
            onChange={handleIngredientNameChange}
          />
          <input
            className="input-text"
            type="text"
            name="ingredient-amount"
            placeholder="Amount"
            value={ingredientAmount}
            onChange={handleIngredientAmountChange}
          />
          <button type="button" onClick={addIngredient}>
            Add Ingredient
          </button>
        </div>
        <ul>
          {recipeIngredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name}: {ingredient.amount}
            </li>
          ))}
          <IngredientsList ingredients={recipeIngredients} />
        </ul>
      </label>
      
      <input className="submit" type="submit" value="Submit" />
    </form>
    {/* Display the ingredient list using the IngredientList component */}
    </div>
  );
}
  