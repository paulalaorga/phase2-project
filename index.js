let addRecipe = false;
 
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-recipe-btn");
  const recipeFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addRecipe = !addRecipe;
    if (addRecipe) {
      recipeFormContainer.style.display = "block";
    } else {
      recipeFormContainer.style.display = "none";
    }
  });
});