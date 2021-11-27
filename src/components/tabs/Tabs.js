import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './tabs.css'
import {
    CgFacebook,
    FaTelegramPlane,
    SiViber,
    FaOdnoklassniki,
    FaWhatsapp,
    AiFillApple,
    FaTv,
    GiVhs,
    AiFillAndroid,
    IoLogoGameControllerA
} from 'react-icons/all'
import ReactHlsPlayer from 'react-hls-player/dist';

const Tabs = () => {


    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const getActiveClass = (index, className) =>
        toggleState === index ? className : "";


    return (
        <>
            <div className="movie__ino">
                <ul className="movies__tab-list">
                    <li
                        className={toggleState === 1 ? "movies__tabs movies__active-tabs" : "movies__tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Description
                    </li>
                    <li
                        className={toggleState === 2 ? "movies__tabs movies__active-tabs" : "movies__tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        Persons and teams
                    </li>
                    <li
                        className={toggleState === 3 ? "movies__tabs movies__active-tabs" : "movies__tabs"}
                        onClick={() => toggleTab(3)}
                    >
                        Trailers and gallery
                    </li>
                </ul>
            </div>
            <div className={`movies__tab-content ${getActiveClass(1, "movies__active-content")}`}>
                <div className="video__links">
                    <p className="movies__year-info">2021,</p>
                    <Link to="#" className="movies__content-links">Action,</Link>
                    <Link to="#" className="movies__content-links">Thriller,</Link>
                    <Link to="#" className="movies__content-links">Horror,</Link>
                    <Link to="#" className="movies__content-links">Fiction,</Link>
                    <Link to="#" className="movies__content-links">Foreign,</Link>
                    <Link to="#" className="movies__content-links">USA,</Link>
                </div>
                <div className="video__label">
                    <span className="video__quality">Full HD</span>
                    <span className="video__duration">97 minutes</span>
                </div>
                <div className="video__description">
                    <p className="description__paragraph">
                        A symbiote from outer space, Venom lives in the earthly journalist,
                        Eddie Brock. Soon he will have to confront the ruthless serial killer Cletus Kasady.
                        The latter also merges with another alien symbiote,
                        after which he transforms into a bloodthirsty monster named Carnage...
                    </p>
                </div>
                <div className="movies__social-media">
                    <span className="social__media-box facebook">
                        <CgFacebook color="#000" />
                    </span>
                    <span className="social__media-box whatsapp">
                        <FaWhatsapp color="#000" />
                    </span>
                    <span className="social__media-box ok">
                        <FaOdnoklassniki color="#000" />
                    </span>
                    <span className="social__media-box telegram">
                        <FaTelegramPlane color="#000" />
                    </span>
                    <span className="social__media-box wiber">
                        <SiViber color="#000" />
                    </span>
                </div>
                <div className="lists__block">
                    <ul className="app__store-list">
                        <p className="lists__title">AVAILABLE ON DEVICES</p>
                        <li className="lists"><AiFillApple size="1.3em" className="icons" /> iOS</li>
                        <li className="lists"><FaTv size="1.3em" className="icons" /> Smart TV</li>
                        <li className="lists"><GiVhs size="1.3em" className="icons" /> Media Players</li>
                        <li className="lists"><AiFillAndroid size="1.3em" className="icons" /> Android</li>
                        <li className="lists"><IoLogoGameControllerA size="1.3em" className="icons" /> consoles</li>
                    </ul>
                    <div className="translation__list">
                        <p className="lists__title">TRANSLATION</p>
                        <span className="translation__languages">
                            Russian, Ukrainian, English
                        </span>
                    </div>
                    <div className="subtitle__list">
                        <span className="subtitle__list">
                            <p className="lists__title">SUBTITLES</p>
                            Russian, Ukrainian
                        </span>
                    </div>
                </div>
            </div>
            <div className={`movies__tab-content ${getActiveClass(2, "movies__active-content")}`}>
                <div className="team__info">
                    <img src="https://s9.vcdn.biz/static/f/2314732941/image.jpg/pt/r0x0x4" alt="person" className="person__image" />
                    <span className="person">
                        <h3 className="person__name">Stephen Graham</h3>
                        <p className="person__surname">Stephen Graham</p>
                    </span>
                    <img src="https://s9.vcdn.biz/static/f/2314732941/image.jpg/pt/r0x0x4" alt="person" className="person__image" />
                    <span className="person">
                        <h3 className="person__name">Stephen Graham</h3>
                        <p className="person__surname">Stephen Graham</p>
                    </span>
                    <img src="https://s9.vcdn.biz/static/f/2314732941/image.jpg/pt/r0x0x4" alt="person" className="person__image" />
                    <span className="person">
                        <h3 className="person__name">Stephen Graham</h3>
                        <p className="person__surname">Stephen Graham</p>
                    </span>
                    <img src="https://s9.vcdn.biz/static/f/2314732941/image.jpg/pt/r0x0x4" alt="person" className="person__image" />
                    <span className="person">
                        <h3 className="person__name">Stephen Graham</h3>
                        <p className="person__surname">Stephen Graham</p>
                    </span>
                    <ul className="team__list">
                        <p className="lists__title">DIRECTOR</p>
                        <li className="team__lists-items">Stephen Graham</li>
                    </ul>
                    <ul className="team__list">
                        <p className="lists__title">PRODUCERS</p>
                        <li className="team__lists-items">Stephen Graham</li>
                        <li className="team__lists-items">Stephen Graham</li>
                        <li className="team__lists-items">Stephen Graham</li>
                    </ul>
                    <ul className="team__list">
                        <p className="lists__title">SCENARIO</p>
                        <li className="team__lists-items">Stephen Graham</li>
                    </ul>
                </div>
            </div>
            <div className={`movies__tab-content ${getActiveClass(3, "movies__active-content")}`}>
                <div className="movie__trailer">
                    <ReactHlsPlayer
                        src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
                        autoPlay={false}
                        controls={true}
                        width="100%"
                        height="auto"
                    />
                </div>
            </div>
        </>
    );
}

export default Tabs;
