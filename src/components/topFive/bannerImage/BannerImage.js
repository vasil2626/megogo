import React from 'react';
import './bannerImage.css'

const Bannerimage = ({url, isHover}) => {

    return (
        <>
          <img src={url} alt="img"
           className={!isHover ? "top__five-banner": "animation"}
           />   
        </>
    );
}

export default Bannerimage;
