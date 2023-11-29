import React from "react";

export default function ShoppingList({ shoppingList, clearShoppingList }) {
  function saveShoppingList() {

    const shoppingListUrl = 'https://my-menu-app.onrender.com/shopping-list';


    fetch(shoppingListUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        shoppingList: shoppingList,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Shopping list saved:', data);
      })
      .catch((error) => {
        console.error('Error saving shopping list:', error);
      });
  }

  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        {shoppingList.map((item, index) => (
          <li key={index}>
            {item.name} {item.amount} x {item.counter}
          </li>
        ))}
      </ul>
      <button onClick={clearShoppingList}>Clear Shopping List</button>
      <button onClick={saveShoppingList}>Save Shopping List</button>
    </div>
  );
}
