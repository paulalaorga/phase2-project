import React from "react";
import "./style.css";
import Ellipse from "../Components/Buttons"
import { Recipes } from "../Components/Recipes";
import { NavBar } from "../Components/NavBar";
import { Menu } from "../Components/Menu";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="hero">
        <div className="image-container2">
          <img className="happy2" alt="Happy" src="https://c.animaapp.com/iMLt5NrB/img/happy.svg" />
          <img className="sad2" alt="Sad" src="https://c.animaapp.com/iMLt5NrB/img/sad.svg" />
          </div>
          <div className="title">
            <div className="overlap">
              <img className="f" alt="F" src="https://c.animaapp.com/iMLt5NrB/img/f.svg" />
              <div className="overlap-group">
                <img className="element" alt="Element" src="https://c.animaapp.com/iMLt5NrB/img/000.svg" />
                <img className="img" alt="Element" src="https://c.animaapp.com/iMLt5NrB/img/00.svg" />
                <img className="o" alt="O" src="https://c.animaapp.com/iMLt5NrB/img/o@2x.png" />
                <img className="m" alt="M" src="https://c.animaapp.com/iMLt5NrB/img/m.svg" />
              </div>
            </div>
            <img className="d" alt="D" src="https://c.animaapp.com/iMLt5NrB/img/d@2x.png" />
          </div>
          <div className="image-container">
          <img className="happy" alt="Happy" src="https://c.animaapp.com/iMLt5NrB/img/happy.svg" />
          <img className="sad" alt="Sad" src="https://c.animaapp.com/iMLt5NrB/img/sad.svg" />
          </div>
        </div>
       <Recipes />
        <header className="header">
         <Menu />
          <div className="food-m-app">FoodMApp</div>
          <NavBar />
        </header>
      </div>
    </div>
  );
};
