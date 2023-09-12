import React from 'react';

import Navigation from './../Navigation/Navigation.js';

function Header({ isOpen, onBurgerClick }) {

   return (
      <header className="header">
         <Navigation
            isOpen={isOpen}
            onBurgerClick={onBurgerClick}
         />
      </header >
   )
}

export default Header;