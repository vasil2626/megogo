import React, { useRef, useEffect } from 'react';
import './videoPlayer.css'
import ReactHlsPlayer from 'react-hls-player'

const Videoplayer = ({ fullScreen }) => {


    console.log(fullScreen);

    const playerRef = useRef()


    // const video = playerRef.current.id
    const video = document.getElementById("myVideo")

    useEffect(() =>{
        if(fullScreen){
            video.requestFullscreen()   
        }
    })

    return (
        <div className="video-player">
            <ReactHlsPlayer
                id="myVideo"
                // src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
                src="https://vs431.vcdn.biz/d823c226f41dc6d2d64ba0e8d3a6447a_mgg/vod/hls/b/450_900_1350_1500_2000_5000/u_sid/0/o/129225081/u_uid/0/u_vod/1/u_device/cms_html5/u_devicekey/_site/a/0/type.amlst/playlist.m3u8"
                autoPlay={true}
                muted={true}
                controls={false}
                loop={true}
                playerRef={playerRef}
                className="movie__video-background"
            />
        </div>
    );
}

export default Videoplayer;
