import React, { Component } from 'react';
import RecipeLogo from '../assets/recipe.png';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container">
              <div className="logo-container">
                <img src={RecipeLogo} alt="Logo" className="logo" />
                <p className="title">Veggy Recipes</p>
              </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
