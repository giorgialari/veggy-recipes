import React, { Component } from 'react';
import RecipeLogo from '../assets/recipe.png';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <a className="link-home" href='/'>
              <div className="logo-container">
                <img src={RecipeLogo} alt="Logo" className="logo" />
                <p className="title">Veggy Recipes</p>
              </div>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
