import React from "react";
import "../Screens/style.css"

export const NavBar = () => {

    return (
        <div className="nav-bar">
        <div className="text-wrapper-2">Home</div>
        <a href="./Recipes" className="text-wrapper-3">Browse Recipes</a>
        <div className="text-wrapper-4">Add New Recipe</div>
      </div>
    )
}

