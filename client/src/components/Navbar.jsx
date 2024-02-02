import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img className="Logo" src="./images/Navbar/logo.png" />
      <div className="CategoryContainer">
        <img className="Burger" src="./images/Navbar/burger.png" />
        <p>Categories</p>
      </div>
      <div className="SearchBar">
        <input className="SearchInput" type="text" placeholder="Search for anything" />
        <img className="SearchButton" src="./images/Navbar/search-button.png" />
      </div>
      <div className="SignInButton">
        <p className="SignIn">Sign In</p>
      </div>
      <div className="CartDiv">
      <img className="CartButton" src="./images/Navbar/cart.png" />
      </div>
    </div>
  )
};

export default Navbar;