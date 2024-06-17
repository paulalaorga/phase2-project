import React, { useState } from 'react';

export default function ShoppingList({shoppingList, setShoppingList}) {

  function handleClearShoppingList() {
    setShoppingList([]);
  }

  return (
    <div>
      <h2>Shopping List</h2> 
        <ul>
          {shoppingList.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name}: {ingredient.amount}
            </li>
          ))}
        </ul>
        <button onClick={handleClearShoppingList}>Clear Shopping List</button>
    </div>
  );
}
