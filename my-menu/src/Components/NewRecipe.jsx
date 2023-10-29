import React, { useState } from 'react';

function YourComponent() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <button id="new-recipe-btn" onClick={toggleForm}>
        {showForm ? "Close Form" : "New Recipe"}
      </button>
      {showForm && (
        <div className="container">
          <div class="container">
      <form class="add-recipe-form">
        <h3>Add your recipe!</h3>

        <input
          type="text"
          name="name"
          value=""
          placeholder="Enter a recipe name..."
          class="input-text"
        />
        <br />
        <input
          type="text"
          name="ingredients"
          value=""
          placeholder="Enter ingredients"
          class="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create Recipe"
          class="submit"
        />
      </form>
    </div>
    <p>
      Create your own menu! <button id="new-recipe-btn">Add a new recipe!</button>
    </p>
          <button onClick={toggleForm}>Close Form</button>
        </div>
      )}
    </div>
  );
}

export default YourComponent;
