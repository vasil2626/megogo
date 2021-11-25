import React from 'react';
import Card from '../cards/Card'
import './categories.css'
import { Link } from 'react-router-dom';

const Categories = ({  content }) => {
    return (
        <>
            <div className="categories">
            {
                content.map((content, i) => {
                    return (
                        <div key={i} className="categories__items">
                            <Link to="/movie">
                            <Card 
                            title={content.title} 
                            image={content.image}
                            description={content.description}
                            purchase={content.purchase}
                            />
                            </Link>
                        </div>
                    );
                })
            }
            </div>
        </>
    );
}

export default Categories;
