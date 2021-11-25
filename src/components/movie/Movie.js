import React from 'react';
import './movie.css'

const Movie = () => {
    return (
        <>
            <div className="movie__video">
                <div className="movie__content">
                    <video
                    id="video"
                    preload="none"
                    controls={false}
                   
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    className="movie__video-background"
                >
                    <source 
                    src="https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4" 
                    type="video/mp4"
                    />
                </video>
                </div>
                <div className="container">
                     <div className="movie__ino">
                    movies info
                </div>

                dsfsf

                </div>
               
            </div>
        </>
    );
}

export default Movie;
