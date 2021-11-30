import React, { useState }  from 'react';
import './movie.css'
import Videoplayer from "../videoPlayer/videoPlayer"
import Tabs from '../tabs/Tabs'
import { movies } from './data'
import Slider from '../contentSlider/Slider';
import Categories from '../categories/Categories';
import {FaPlay} from "react-icons/fa"

const Movie = () => {

  const [fullScreen, setFullScreen] = useState(false)

  const handleClick = () =>{
    setFullScreen(true)
  }

  const handleState = (state) =>{
    setFullScreen(state)
  }

  return (
    <>
      <div className="movie__video">
        <div className="movie__content">
          <Videoplayer 
          fullScreen={fullScreen}
          getState={(state) => handleState(state)}
          />
          <div className="video__banner">
            <img src="https://s3.vcdn.biz/static/f/3732877281/image.jpg/pt/r386x544x4" alt="img" className="banner__info-image" />
            <div className="trailer__info">
              <span className="payment__video">purchase</span>
              <span className="trailer__title">SHANG-CHI AND THE LE...</span>
              <span className="video__rating">IMDB 7.6, MGG 7.4</span>
              <span className="video__age-limit">16+</span>
              <h1 className="video__main-title">Shang-Chi and the Legend of the Ten Rings</h1>
            </div>
            <button 
            className="button__play-banner" 
            onClick={handleClick}

            > 
            <FaPlay size="0.8em" color="#fff"
            /> Watch</button>
          </div>
        </div>
        <div className="container">
          <Tabs />
        </div>
      </div>
      <div className="recommended__movies">
        <Slider length={10} title="WHAT_ELSE_TO_WATCH" >
          <Categories
            content={movies}
          />
        </Slider>

      </div>
    </>
  );
}

export default Movie;
