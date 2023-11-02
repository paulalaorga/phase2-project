import React, { useState } from 'react';
import RecipeForm from "./Components/RecipeForm";

function NewRecipe() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <button id="new-recipe-btn" onClick={toggleForm}>
        {showForm ? "Close" : "New Recipe"}
      </button>
      {showForm && (
      <RecipeForm />
      )}
    </div>
  );
}

export default NewRecipe;
