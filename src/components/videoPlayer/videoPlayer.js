import React, { useRef, useEffect } from 'react';
import './videoPlayer.css'
import ReactHlsPlayer from 'react-hls-player'


const Videoplayer = ({ fullScreen, getState }) => {

    const trillerSrc = "https://vs431.vcdn.biz/d823c226f41dc6d2d64ba0e8d3a6447a_mgg/vod/hls/b/450_900_1350_1500_2000_5000/u_sid/0/o/129225081/u_uid/0/u_vod/1/u_device/cms_html5/u_devicekey/_site/a/0/type.amlst/playlist.m3u8"

    const movieSrc = "https://meta.vcdn.biz/222bf5e8abeab82109c480ce1ce20c8e_mgg/vod/hls/b/450_900_1350_1500_2000_5000/u_sid/0/o/127294721/u_uid/0/u_vod/1/u_device/cms_html5/u_devicekey/_site/a/0/type.amlst/playlist.m3u8"

    const playerRef = useRef()
    console.log("🚀 ~ file: videoPlayer.js ~ line 13 ~ Videoplayer ~ playerRef", playerRef)

    useEffect(() => {
        const video = document.getElementById("myVideo")

        if (fullScreen && !video.fullscreenElement) {
            video.requestFullscreen()
        }

        video.onfullscreenchange = (e) => {
            if (!document.fullscreenElement) {
                getState(false)
            }
        }

    })

    return (
        <div className="video-player">
            <ReactHlsPlayer
                id="myVideo"
                src={!fullScreen ? trillerSrc : movieSrc}
                autoPlay={true}
                muted={!fullScreen? true: false}
                controls={false}
                loop={true}
                playerRef={playerRef}
                className="movie__video-background"

            />
        </div>
    );
}

export default Videoplayer;
