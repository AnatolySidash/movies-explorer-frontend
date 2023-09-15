import React from 'react';

function AboutProject() {

   return (
      <section className="aboutproject" id="aboutproject">
         <h2 className="section__title">О проекте</h2>
         <ul className="aboutproject__info">
            <li className="aboutproject__item">
               <h3 className="aboutproject__title">Дипломный проект включал 5&nbsp;этапов</h3>
               <p className="aboutproject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
            </li>
            <li className="aboutproject__item">
               <h3 className="aboutproject__title">На&nbsp;выполнение диплома ушло 5&nbsp;недель</h3>
               <p className="aboutproject__text">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </li>
         </ul>
         <table className="aboutproject__timeline">
            <tbody>
               <tr className="aboutproject__row">
                  <td className='aboutproject__time aboutproject__time_backend'>1 неделя</td>
                  <td className='aboutproject__time aboutproject__time_frontend'>4 недели</td>
               </tr>
               <tr className="aboutproject__row">
                  <td className='aboutproject__name'>Back-end</td>
                  <td className='aboutproject__name'>Front-end</td>
               </tr>
            </tbody>
         </table>
      </section >
   )
}

export default AboutProject;