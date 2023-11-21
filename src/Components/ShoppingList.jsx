import React from 'react';

export default function ShoppingList({shoppingList, setShoppingList}) {

  function handleClearShoppingList() {
    setShoppingList([]);
  }

  function removeIngredient(ingredient) {
    const ingredientToRemove = shoppingList.filter((item) => item !== ingredient)
    setShoppingList(ingredientToRemove);
  }

  return (
    <div>
      <h2>Shopping List</h2> 
        <ul>
          {shoppingList.map((ingredient, index) => (
            <li key={index} onClick={() => removeIngredient(ingredient)}>
              {ingredient.name}: {ingredient.amount}
            </li>
          ))}
        </ul>
        <button onClick={handleClearShoppingList}>Clear Shopping List</button>
    </div>
  );
}
