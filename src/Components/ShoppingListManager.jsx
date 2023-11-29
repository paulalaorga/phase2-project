import React, { useState, useEffect } from 'react';

export default function ShoppingListManager() {
  const [shoppingLists, setShoppingLists] = useState([]);

  useEffect(() => {
    const shoppingListUrl = 'https://my-menu-app.onrender.com/shopping-list';

    fetch(shoppingListUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched saved shopping lists:', data);
        setShoppingLists(data);
      })
      .catch((error) => {
        console.error('Error fetching shopping lists:', error);
      });
  }, []); 

  function deleteList(listId) {
    console.log('Delete list with id:', listId);

    const shoppingListUrl = 'https://my-menu-app.onrender.com/shopping-list';

    fetch(`${shoppingListUrl}/${listId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Shopping list deleted:', data);
        setShoppingLists((prevLists) => prevLists.filter((list) => list.id !== listId));
      })
      .catch((error) => {
        console.error('Error deleting shopping list:', error);
      });
  }

  return (
    <div>
      {shoppingLists.map((shoppingList) => (
        <div key={shoppingList.id}>
          <h2>Shopping List {shoppingList.id}</h2>
          <ul>
            {shoppingList.shoppingList ? (
              shoppingList.shoppingList.map((item, index) => (
                <li key={index}>
                  {item.name} {item.amount} x {item.counter}
                </li>
              ))
            ) : (
              <p>No items in the shopping list</p>
            )}
          </ul>
          <button onClick={() => deleteList(shoppingList.id)}>Delete List</button>
        </div>
      ))}
    </div>
  );
}
