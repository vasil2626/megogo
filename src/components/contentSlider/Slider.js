/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './slider.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'


const Slider = ({ children, title, length }) => {

    const [client, setClient] = useState(0)

    const [pos, setPos] = useState(0)

    const [drag, setDrag] = useState(false)

    const prev = () => {
        pos === 0 ? setPos(-27 * length - 1) : setPos(pos + 27)
    }

    const next = () => {
        (pos === - 27 * length - 1) ? setPos(0) : setPos(pos - 27)
    }

    const downHandler = (e) => {
        setClient(e.clientX)
        setDrag(true)
    }

    const moveHandler = (e) => {

        if (e.clientX + 100 < client) {
            next()

            if (pos <= -54) {
                setPos(-54)
            }
        }
        if (e.clientX - 100 > client) {
            prev()
            if (pos >= 0) {
                setPos(0)
            }
        }

    }

    useEffect(() => {
        if (drag) {
            window.addEventListener("mousemove", moveHandler)
        }
    }, [drag])

    useEffect(() => {
        window.addEventListener("mouseup", function () {
            setDrag(false);
            window.removeEventListener("mousemove", moveHandler);
        });
    },[drag]);


    return (
        <div className="slider">
            <div className="container">
                <div className="slider__content">
                    <h1 className="title">{title.split("_").join("  ")}</h1>

                    <div className="slider__button-container">
                        <button
                            disabled={pos >= 0 ? true : false}
                            className="slider__buttons-prev"
                            onClick={prev}
                        >
                            <MdKeyboardArrowLeft size="1.3em" className="slider__arrows"/>
                        </button>
                        <button
                            disabled={pos <= -54 ? true : false}
                            className="slider__buttons-next"
                            onClick={next}
                        >
                            <MdKeyboardArrowRight size="1.3em" className="slider__arrows"/>
                        </button>
                    </div>
                </div>
                <div className="slider__cards-component">
                    <div className="slider__cards-content"
                        style={{ transform: `translateX(${pos}%)` }}
                        onMouseDown={(e) => downHandler(e)}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
