import React from "react";

export default function Ingredients({
  ingredients,
  onAddToShoppingList,
  shoppingList,
  setShoppingList,
}) {
  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  function handleAddToShoppingList(ingredient) {
    const existingIngredient = shoppingList.find(
      (item) => item.name === ingredient.name
    );

    if (existingIngredient) {
      const updatedShoppingList = shoppingList.map((item) =>
        item.name === ingredient.name
          ? { ...item, amount: `${parseInt(item.amount) + parseInt(ingredient.amount)} gr` }
          : item
      );
      setShoppingList(updatedShoppingList);
    } else {
      setShoppingList([...shoppingList, ingredient]);
    }

    // Call the onAddToShoppingList function (if needed)
    onAddToShoppingList(ingredient);
  }

  return (
    <div>
      <table className="ingredients-table">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient, index) => (
            <tr key={index}>
              <td onClick={() => handleAddToShoppingList(ingredient)}>
                {capitalizeFirstLetter(ingredient.name)}
              </td>
              <td>{ingredient.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
