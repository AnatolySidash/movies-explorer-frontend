import React from 'react';

import Navigation from './../Navigation/Navigation.js';

function Header({ onBurgerClick, isLoggedIn }) {

   return (
      <header className="header">
         <Navigation
            onBurgerClick={onBurgerClick}
            isLoggedIn={isLoggedIn}
         />
      </header >
   )
}

export default Header;