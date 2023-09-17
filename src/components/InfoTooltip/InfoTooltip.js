import React from 'react';
import success from '../../images/09_tooltip/success.svg';
import fail from '../../images/09_tooltip/fail.svg';

function InfoTooltip({ isOpen, onClose, isSuccessSignUp }) {

   return (
      < section className={`infotooltip ${isOpen ? "infotooltip_opened" : ""}`} >
         <div className="infotooltip__container">
            <button
               type="button"
               className="infotooltip__close"
               onClick={onClose} />
            <img src={isSuccessSignUp ? success : fail} alt={isSuccessSignUp ? success : fail} className="infotooltip__logo" />
            <h3 className="infotooltip__title">{isSuccessSignUp ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</h3>
         </div>
      </ section >
   )
}

export default InfoTooltip;