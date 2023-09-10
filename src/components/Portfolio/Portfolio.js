import React from 'react';

function Portfolio() {

   return (
      <section className="portfolio">
         <h2 className="portfolio__title">Портфолио</h2>
         <ul className="portfolio__list">
            <li className="portfolio__item">
               <h3 className="portfolio__name">Статичный сайт</h3>
               <a href="https://github.com/AnatolySidash/how-to-learn" target="blank" className="portfolio__link"> </a>
            </li>
            <li className="portfolio__item">
               <h3 className="portfolio__name">Адаптивный сайт</h3>
               <a href="https://github.com/AnatolySidash/russian-travel" target="blank" className="portfolio__link"> </a>
            </li>
            <li className="portfolio__item">
               <h3 className="portfolio__name">Одностраничное приложение</h3>
               <a href="https://github.com/AnatolySidash/react-mesto-api-full-gha" target="blank" className="portfolio__link"> </a>
            </li>

         </ul>

      </section >
   )
}

export default Portfolio;