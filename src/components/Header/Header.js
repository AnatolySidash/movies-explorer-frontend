import React from 'react';

import Navigation from './../Navigation/Navigation.js';

function Header({ isOpen, onBurgerClick, isLoggedIn, isMobile }) {

   return (
      <header className="header">
         <Navigation
            isOpen={isOpen}
            onBurgerClick={onBurgerClick}
            isLoggedIn={isLoggedIn}
            isMobile={isMobile}
         />
      </header >
   )
}

export default Header;