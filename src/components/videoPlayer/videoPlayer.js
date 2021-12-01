import React, { useRef, useEffect, useState } from 'react';
import './videoPlayer.css'
import ReactHlsPlayer from 'react-hls-player'


const Videoplayer = ({ fullScreen, getState }) => {

    const trillerSrc = "https://vs431.vcdn.biz/d823c226f41dc6d2d64ba0e8d3a6447a_mgg/vod/hls/b/450_900_1350_1500_2000_5000/u_sid/0/o/129225081/u_uid/0/u_vod/1/u_device/cms_html5/u_devicekey/_site/a/0/type.amlst/playlist.m3u8"

    const movieSrc = "https://meta.vcdn.biz/222bf5e8abeab82109c480ce1ce20c8e_mgg/vod/hls/b/450_900_1350_1500_2000_5000/u_sid/0/o/127294721/u_uid/0/u_vod/1/u_device/cms_html5/u_devicekey/_site/a/0/type.amlst/playlist.m3u8"


    const playerRef = useRef()

    const progressRef = useRef()

    const [progress, setProgress] = useState(0);

    const [isDrag, setIsDrag] = useState(false)

    const timeUpdate = (e) => {
        setProgress((100 * Math.round(playerRef.current.currentTime)) / playerRef.current.duration)
    }
  
    const handleProgress =() =>{
        setIsDrag(true)
    }

    const handleMove = (e) =>{
        let videoRevived = e.target.offsetWidth
        let progressPosition = e.offsetX

        console.log(videoRevived,"videoRevived",  progressPosition, "progressPosition");

        if(Math.round(progressPosition)  + 100  < videoRevived){

            playerRef.current.pause()
            playerRef.current.currentTime = (110 * progressPosition) /videoRevived
            // setProgress(playerRef.current.currentTime)
        } 
  

    }
   console.log(progress);

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
        if (!fullScreen) {
            playerRef.current.pause()
            playerRef.current.currentTime = 0
        }
        playerRef.current.addEventListener("timeupdate", timeUpdate)
        return () => {
            playerRef.current.removeEventListener("timeupdate", timeUpdate)
        }
    })

  
    useEffect(() =>{
        if(isDrag){
            window.addEventListener("mousemove", handleMove)
        }
    },[isDrag])

    useEffect(() =>{
        window.addEventListener("mouseup", () =>{
            // window.removeEventListener("mousemove", handleMove)
            setIsDrag(false)
        })

        return () =>{
            window.removeEventListener("mousemove", handleMove)
        }

    },[isDrag, progress])

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
                        // onMouseDown={(e) => handleProgress(e)}
                        >
                            <div
                                ref={progressRef}
                                className="video__progress-control"
                                style={{ width: `${progress}%` }}
                                // onClick={progressClick}
                            // onProgress={handleProgress}
                        onMouseDown={(e) => handleProgress()}

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
