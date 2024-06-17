import React from "react";
import "./style.css";

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
        <div className="recipes">
          <div className="row">
            <div className="ellipse" />
            <div className="ellipse-2" />
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
        <header className="header">
          <div className="menu-button">
            <div className="div-wrapper">
              <div className="text-wrapper">Menu</div>
            </div>
          </div>
          <div className="nav-bar">
            <div className="text-wrapper-2">Home</div>
            <div className="text-wrapper-3">Recipe Book</div>
            <div className="text-wrapper-4">New Recipe</div>
            <div className="text-wrapper-5">About</div>
          </div>
          <div className="food-m-app">FoodMApp</div>
        </header>
      </div>
    </div>
  );
};
