import React from 'react';
import './card.css'
import { Link } from 'react-router-dom';


const Card = ({ title, description, image, purchase }) => {
    return (
        <div className="card__content">
            <Link to="/movie">
                <div className="card__image" style={{ backgroundImage: `url(${image})` }}>
                </div>
            </Link>
            <h3 className="card__title">{title}</h3>
            <span className="card__description">{description}</span>
            {
                purchase ? <div className="payment__purchase">
                    purchase
                </div> :
                    <div className="subscription">
                        <span className="promo__payment">PROMO</span>
                        <span className="subscript">SUBSCRIPTION</span>
                    </div>
            }
        </div>
    );
}

export default Card;
