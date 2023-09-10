import React from 'react';
import photo from '../../images/04_aboutMe/01.jpg';

function AboutMe() {

   return (
      <section className="aboutme" id="aboutme">
         <h2 className="section__title">Студент</h2>
         <article className="aboutme__data">
            <div className="aboutme__info">
               <h3 className="aboutme__title">Анатолий</h3>
               <p className="aboutme__job">Фронтенд-разработчик</p>
               <p className="aboutme__content">Я&nbsp;родился в&nbsp;Приморском Крае. В&nbsp;2009 году закончил восточный факультет УГПИ и&nbsp;переехал в&nbsp;Санкт-Петербург. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю пешие прогулки, а&nbsp;ещё играю в&nbsp;настольный теннис. С&nbsp;2009 года работаю в&nbsp;компании &laquo;Хёндэ&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал создавать собственные проекты.</p>
               <a href='https://github.com/AnatolySidash' target="blank" className="aboutme__link">Github</a>
            </div>
            <img src={photo} alt="фотография автора данного сайта-визитки" className="aboutme__photo"></img>
         </article>
      </section >
   )
}

export default AboutMe;