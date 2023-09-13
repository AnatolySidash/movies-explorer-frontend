import React from 'react';
import Promo from '../../components/Promo/Promo.js';
import AboutProject from '../../components/AboutProject/AboutProject.js';
import Techs from '../../components/Techs/Techs.js';
import AboutMe from '../../components/AboutMe/AboutMe.js';
import Portfolio from '../../components/Portfolio/Portfolio.js';
import Header from './../Header/Header.js';
import Footer from './../Footer/Footer.js';

function Main({ isOpen, onBurgerClick, isLoggedIn, isMobile }) {

   return (
      <main className="main">
         <Header
            isOpen={isOpen}
            onBurgerClick={onBurgerClick}
            isLoggedIn={isLoggedIn}
            isMobile={isMobile}
         />
         <Promo />
         <AboutProject />
         <Techs />
         <AboutMe />
         <Portfolio />
         <Footer />
      </main >
   )
}

export default Main;