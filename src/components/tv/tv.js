import React, { useEffect } from 'react';
import { tvData } from './data'
import './tvStyles.css';

function Tv({ title, length }) {


    const componentTitle = "tv";

    useEffect(() => {
        title(componentTitle);
        length(tvData.length)
    }, [title, length]);

    return (
        <div className="tv__component">
            <div className="tv__component-items">
                {tvData.map((tvData) => {
                    return (
                        <div className="tv__images-rows" key={tvData.id}>
                            <div className="tv__images" style={{ backgroundImage: `url(${tvData.url})` }}></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Tv;
