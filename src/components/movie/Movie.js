import React from 'react';
import './movie.css'
import Videoplayer from "../videoPlayer/videoPlayer"
import Tabs from '../tabs/Tabs'


const Movie = () => {

  return (
    <>
      <div className="movie__video">
        <div className="movie__content">
          <Videoplayer />
        </div>
        <div className="container">
          <Tabs />
        </div>
      </div>
    </>
  );
}

export default Movie;
