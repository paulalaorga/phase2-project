useEffect(() => {
    fetch('https://my-menu-app.onrender.com/shopping-list')
      .then((response) => response.json())
      .then((data) => {
        console.log('Shopping list data:', data);
        setShoppingList(data); 
  }, [])});

  useEffect(() => {
    fetch('https://my-menu-app.onrender.com/recipes')
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
      })
      fetch('https://my-menu-app.onrender.com/shopping-list')
      .then((response) => response.json())
      .then((data) => {
        setShoppingList(data);
      });
  }, []);

  // Send the ingredient data to the API
  fetch('https://my-menu-app.onrender.com/shopping-list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ingredient),
  })
    .then((response) => {
      if (response.ok) {
        // Successful API request, you can handle success here if needed
        console.log('Ingredient added to the shopping list:', ingredient);
      } else {
        // Handle API request error
        console.error('Failed to add ingredient to the shopping list');
      }
    })
    .catch((error) => {
      console.error('Error sending ingredient data to the API:', error);
    });