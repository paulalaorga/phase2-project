import React, { useState } from "react";

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
      // Check if the ingredient with the same name already exists
      const existingIngredientIndex = recipeIngredients.findIndex(
        (ingredient) => ingredient.name === ingredientName
      );

      if (existingIngredientIndex !== -1) {
        // If the ingredient already exists, update its amount
        const updatedIngredients = [...recipeIngredients];
        updatedIngredients[existingIngredientIndex].amount = ingredientAmount;
        setRecipeIngredients(updatedIngredients);
      } else {
        // If the ingredient doesn't exist, add it to the array
        const ingredient = {
          name: ingredientName,
          amount: ingredientAmount,
        };
        setRecipeIngredients([...recipeIngredients, ingredient]);
      }

      setIngredientName("");
      setIngredientAmount("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const recipeData = {
      recipe_name: recipeName,
      ingredients: recipeIngredients,
    };

    fetch("https://my-menu-app.onrender.com/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeData),
    })
      .then((response) => response.json())
      
  };

  return (
    <div>
    <form className="add-recipe-form" onSubmit={handleSubmit}>
        <div className="ingredients-container">
        Ingredients:
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
        <div className="Recipe-name-container">
        Recipe name:
        <input
          className="input-text"
          type="text"
          name="recipe_name"
          value={recipeName}
          onChange={handleRecipeNameChange}
          />
          </div>
      <ul className="ingredients-list"> 
          {recipeIngredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name}: {ingredient.amount}
            </li>
          ))}
        </ul>
      
      <input className="submit" type="submit" value="Submit" />
    </form>
    </div>
  );
}
  