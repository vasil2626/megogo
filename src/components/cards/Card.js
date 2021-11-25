import React from 'react';
import './card.css'

const Card = ({title, description, image , purchase}) => {
    return (
        <div className="card__content">
            <div className="card__image" style={{backgroundImage: `url(${image})`}}></div>
            <h3 className="card__title">{title}</h3>
            <span className="card__description">{description}</span>
            {
                purchase ? <div className="payment__purchase">
                    purchase
                </div>:
                <div className="subscription">
                    <span className="promo__payment">PROMO</span>
                    <span className="subscript">SUBSCRIPTION</span>
                </div>
            }
        </div>
    );
}

export default Card;
