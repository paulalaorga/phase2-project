import React from "react";
import "../Screens/style.css"
import { Ellipse } from "./Buttons";


export const Recipes = () => {
 
    return (
        <div className="recipes-container">
        <div className="row">
        <Ellipse propertyDefaultClassName="ellipse"/>
        <Ellipse propertyDefaultClassName="ellipse-2"/>
          <img className="fb" alt="Fb" src="https://c.animaapp.com/iMLt5NrB/img/fb2.png" />
          <div className="ellipse-3" />
        </div>
        <div className="row-2">
          <div className="ellipse-4" />
          <img className="fb-2" alt="Fb" src="https://c.animaapp.com/iMLt5NrB/img/fb1.png" />
          <img className="ellipse-5" alt="Ellipse" src="https://c.animaapp.com/iMLt5NrB/img/ellipse-16.svg" />
          <div className="ellipse-6" />
        </div>
      </div>
    )


}

