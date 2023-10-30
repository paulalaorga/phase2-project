import React, { useState } from "react";

export default function RecipeForm() {
  const [recipeName, setRecipeName] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState("");

  const handleRecipeNameChange = (event) => {
    setRecipeName(event.target.value);
  };

  const handleRecipeIngredientsChange = (event) => {
    setRecipeIngredients(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a JSON object with the data.
    const recipeData = {
      name: recipeName,
      ingredients: recipeIngredients.split("\n").map((ingredient) => ingredient.trim()),
    };

    // POST the JSON data to a file or server (replace with your implementation).
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
        <textarea
          className="input-text"
          name="recipe-ingredients"
          value={recipeIngredients}
          onChange={handleRecipeIngredientsChange}
        />
      </label>
      <input className="submit" type="submit" value="Submit" />
    </form>
  );
}
