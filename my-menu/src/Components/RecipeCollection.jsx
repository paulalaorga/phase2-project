import React, { useState, useEffect } from 'react';

function RecipeCollection() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch data from your JSON Server or API
    fetch('http://localhost:3000/recipes')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setRecipes(data); // Update to access the 'recipes' array
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Recipe Collection</h1>
      <ul className='recipe-collection'>
        {recipes.map((recipe) => (
          <ul className='recipe-list' key={recipe.id}>
            <h2>{recipe.recipe_name}</h2>
            <ul className='ingredients-list'>
               {/*  {Object.entries(recipe.ingredients).map(([name, amount]) => 
                <li key={name}>
                {name}: {amount} 
                </li>)}*/}
            </ul>
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default RecipeCollection;
