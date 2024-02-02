import React, { Fragment, useState } from "react";

const Navbar = () => {
    
  const [isHovered, setIsHovered] = useState(false)
  const [isSignInHovered, setIsSignInHovered] = useState(false)
  const [isCartHovered, setIsCartHovered] = useState(false)
  
  
  const HandleCategoryEnter = () => {
    setIsHovered(true)
  }
  
  const HandleCategoryLeave = () => {
    setIsHovered(false)
  }

  const HandleSignInEnter = () => {
    setIsSignInHovered(true)
  }
  
  const HandleSignInLeave = () => {
    setIsSignInHovered(false)
  }

  const HandleCartEnter = () => {
    setIsCartHovered(true)
  }
  
  const HandleCartLeave = () => {
    setIsCartHovered(false)
  }


  return (
    <div>
      <div className="Navbar">
        <img className="Logo" src="./images/Navbar/logo.png" />
        <div 
          className={`CategoryContainer ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={HandleCategoryEnter}
          onMouseLeave={HandleCategoryLeave}
        >
          <img className="Burger" src="./images/Navbar/burger.png" />
          <p>Categories</p>
        </div>
        <div className="SearchBar">
          <input className="SearchInput" type="text" placeholder="Search for anything" />
          <img className="SearchButton" src="./images/Navbar/search-button.png" />
        </div>
        <div 
          className={`SignInButton ${isSignInHovered ? 'hovered' : ''}`}
          onMouseEnter={HandleSignInEnter}
          onMouseLeave={HandleSignInLeave}
        >
          <p className="SignIn">Sign In</p>
        </div>
        <div 
          // className="CartDiv"
          className={`CartDiv ${isCartHovered ? 'hovered' : ''}`}
          onMouseEnter={HandleCartEnter}
          onMouseLeave={HandleCartLeave}
        >
        <img className="CartButton" src="./images/Navbar/cart.png" />
        </div>
      </div>
      <div>
        <ul className="NavbarSpecials">
          <li>Valentine's Day</li>
          <li>Home Favorites</li>
          <li>Fashion Finds</li>
        </ul>
      </div>
    </div>
  )
};

export default Navbar;