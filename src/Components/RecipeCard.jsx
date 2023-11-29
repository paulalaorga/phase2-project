import React, { useState } from "react";
import Ingredients from "./Ingredients";
import ShoppingList from "./ShoppingList";

export default function RecipeCard({ recipe }) {
  const [shoppingList, setShoppingList] = useState([]);

  const handleCloneIngredient = (clonedIngredient) => {
   
    const existingIngredient = shoppingList.find(
      (item) => item.name === clonedIngredient.name
    );
  
    if (existingIngredient) {
    
      const updatedShoppingList = shoppingList.map((item) =>
        item.name === clonedIngredient.name
          ? { ...item, counter: item.counter + 1 }
          : item
      );
  
      setShoppingList(updatedShoppingList);
    } else {
      setShoppingList([...shoppingList, { ...clonedIngredient, counter: 1 }]);
    }
    console.log(clonedIngredient)
  };
  
  

  const clearShoppingList = () => {
    setShoppingList([]);
   
  };

  return (
    <div>
      <div className="recipe-card">
        <h1>{recipe.recipe_name}</h1>
        <Ingredients
          ingredients={recipe.ingredients}
          onCloneIngredient={handleCloneIngredient}
        />
      </div>

      <ShoppingList shoppingList={shoppingList} clearShoppingList={clearShoppingList} />
    </div>
  );
}
