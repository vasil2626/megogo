import React, { useRef, useEffect, useState } from 'react';
import './videoPlayer.css'
import ReactHlsPlayer from 'react-hls-player'


const Videoplayer = ({ fullScreen, getState }) => {

    const trillerSrc = "https://vs431.vcdn.biz/d823c226f41dc6d2d64ba0e8d3a6447a_mgg/vod/hls/b/450_900_1350_1500_2000_5000/u_sid/0/o/129225081/u_uid/0/u_vod/1/u_device/cms_html5/u_devicekey/_site/a/0/type.amlst/playlist.m3u8"

    const movieSrc = "https://meta.vcdn.biz/222bf5e8abeab82109c480ce1ce20c8e_mgg/vod/hls/b/450_900_1350_1500_2000_5000/u_sid/0/o/127294721/u_uid/0/u_vod/1/u_device/cms_html5/u_devicekey/_site/a/0/type.amlst/playlist.m3u8"

    const playerRef = useRef()

    const progressRef = useRef()

    const [progress, setProgress] = useState(0)

    const [isDrag, setIsDrag] = useState(false)

    const timeUpdate = (e) => {
        if (isDrag) {
            return
        }

        let durationTime =  (100 * Math.round(playerRef.current.currentTime)) / playerRef.current.duration

        setProgress(durationTime)
    }

    const handleProgress = (e) => {
        e.preventDefault()

        setIsDrag(true)
    }

    const handleMove = (e) => {
        // console.log(e, 'eee');
        
        let videoRevived = progressRef.current.getBoundingClientRect().x
        let progressPosition = e.layerX
        playerRef.current.pause()
        playerRef.current.currentTime = 12 * (Math.round(progressPosition)) / Math.round(videoRevived)
        
        if(isDrag ){

            let time = 55 * Math.round(playerRef.current.currentTime)  /  Math.round(videoRevived)
            console.log( time, e );
            setProgress( time )
        }
    }


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

    useEffect(() => {
        const player = playerRef.current

        if (!fullScreen) {
            player.pause()
            player.currentTime = 0
        }
        player.addEventListener("timeupdate", timeUpdate)


        return () => {
            player.removeEventListener("timeupdate", timeUpdate)
        }
    })


    useEffect(() => {
        if (isDrag) {
            window.addEventListener("mousemove", handleMove)
        }
    }, [isDrag])

    useEffect(() => {
        window.addEventListener("mouseup", () => {
            setIsDrag(false)
        })
        return () => {
            window.removeEventListener("mousemove", handleMove)
        }
    },[isDrag])

    return (
        <div className="video-player">
            <ReactHlsPlayer
                src={trillerSrc}
                autoPlay={true}
                muted={true}
                controls={false}
                loop={true}
                className="movie__video-background"
            />
            <div className={fullScreen ? "movie__video-fullscreen" : "fullscreen__hid"} id="myVideo">
                <ReactHlsPlayer
                    height="100%"
                    width="100%"
                    src={movieSrc}
                    autoPlay={true}
                    controls={true}
                    loop={false}
                    playerRef={playerRef}

                />
                <div className="videoControls">
                    <div className="container">
                        <div
                            className="video__progress"
                            ref={progressRef}
                        >
                            <div className="video__progress-point"
                                // style={{ left: `${progress}%` }}
                                style={{ left: `${progress}%` }}

                                onMouseDown={(e) => handleProgress(e)}></div>
                            <div
                                className="video__progress-control"
                                style={{ width: `${progress}%` }}
                            >

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Videoplayer;
