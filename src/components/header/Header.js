import React, { useState } from 'react'
import sliderImg from '../../Assets/header-slider/slider-1.webp'
import header_1 from '../../Assets/header/header-1.webp'
import header_2 from '../../Assets/header/header-2.webp'
import header_3 from '../../Assets/header/header-3.webp'
import header_4 from '../../Assets/header/header-4.webp'
import header_5 from '../../Assets/header/header-5.webp'
import './header.css'
import Slider from '../contentSlider/Slider'
import Tv from '../tv/tv';
import Categories from '../categories/Categories'
import TopFive from '../topFive/TopFive'
import Staticvidgets from "../staticWidgets/StaticVidgets"
import { data } from './data'

const Header = () => {

    const [componentTitle, setComponentTitle] = useState("")

    const [imageLength, setImageLength] = useState(0)


    const images = [header_1, header_2, header_3, header_4, header_5]

    const getTitle = (title) => {
        setComponentTitle(title)
    }

    const getLength = (length) => {
        setImageLength(length)
    }


    return (
        <>
            <div className="header">
                <img src={sliderImg} alt="" className="header__slider__image" />
                <div className="heder__categories">
                <div className="header__image-blocks">
                            {
                                images.map((item, index) => {
                                    return (
                                        <div className="header__image-cards" key={index}>
                                            <img src={item} alt="" className="Header-img" />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    <div className="container">
                    </div>
                </div>
                <div className="header__mein">
                    <Slider
                        title={componentTitle}
                        length={imageLength}
                    >
                        <Tv
                            title={getTitle}
                            length={getLength}
                        />
                    </Slider>
                    {
                        Object.keys(data).map((item, i) => {
                            return (
                                <Slider 
                                title={item} 
                                key={i}
                                length={data[item].length}
                                >
                                    <Categories 
                                    content={data[item]}
                                    length={getLength}
                                     />
                                </Slider>
                            )
                        })

                    }
                    <TopFive/>
                    <Staticvidgets/>
                </div>
            </div>
        </>
    );
};




export default Header;
