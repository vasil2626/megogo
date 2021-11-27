import React from 'react';
import './videoPlayer.css'
import ReactHlsPlayer from 'react-hls-player'

const Videoplayer = () => {
    return (
        <div className="video-player">
            <ReactHlsPlayer
                src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
                autoPlay={true}
                controls={false}
                loop={true}
                className="movie__video-background"
            />
        </div>
    );
}

export default Videoplayer;
