import React from 'react';


function Footer() {

   return (
      <footer className="footer">
         <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
         <div className="footer__block">
            <p className="footer__copyright">&copy;2023</p>
            <ul className="footer__list">
               <li className="footer__item">
                  <a className='footer__link' target="blank" href='https://practicum.yandex.ru'>Яндекс.Практикум</a>
               </li>
               <li className="footer__item">
                  <a className='footer__link' target="blank" href='https://github.com'>Github</a>
               </li>
            </ul>
         </div>

      </footer >
   )
}

export default Footer;