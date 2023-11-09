import React from "react";
import Ingredients from "./Ingredients";


export default function RecipeCard({ recipe, shoppingList, setShoppingList }) {
 
  function handleAddToShoppingList(ingredient) {
    const existingIngredientIndex = shoppingList.findIndex(
      (item) => item.name === ingredient.name
    );
  
    if (existingIngredientIndex !== -1) {
      const updatedShoppingList = [...shoppingList];
      updatedShoppingList[existingIngredientIndex].amount = `${parseInt(updatedShoppingList[existingIngredientIndex].amount) + parseInt(ingredient.amount)} gr`;
      setShoppingList(updatedShoppingList);
    } else {
      setShoppingList([...shoppingList, ingredient]);
    }
  }

  return (
    <div>
      <div className="recipe-card">
        <h1>{recipe.recipe_name}</h1>
        <Ingredients
          ingredients={recipe.ingredients}
          onAddToShoppingList={handleAddToShoppingList}
          shoppingList={shoppingList}
          setShoppingList={setShoppingList}
        />
      </div>
    </div>
  );
}
