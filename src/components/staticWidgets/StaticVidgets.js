import React from 'react';
import './staticWidgets.css'

const Staticvidgets = () => {
    return (
        <>
            <div className="static__widget">
                <div className="container">
                    <div className="widgets__content">
                        <h1 className="widgets__title">MEGOGO FOR ALL YOUR DEVICES</h1>
                        <p className="widgets__description">Find our application on your Smart TV, tablet <br />
                            or smartphone and watch TV & Movies wherever you want.</p>
                        <div className="widget__app-icons">
                            <img src="https://s6.vcdn.biz/static/39165961/applications-smart-tv.png/pt/r0x0x4" alt="app" className="app-icon" />
                            <img src="https://s7.vcdn.biz/static/39165971/applications-app-store.png/pt/r0x0x4" alt="app" className="app-icon" />
                            <img src="https://s9.vcdn.biz/static/39165991/applications-google-play.png/pt/r0x0x4" alt="app" className="app-icon" />
                            <img src="https://s8.vcdn.biz/static/f/2242444741/image.jpg/pt/r0x0x4" alt="app" className="app-icon" />
                        </div>
                    </div>

                    <img src="https://s9.vcdn.biz/static/83186261/1576x794_9.jpg" alt="" className="widgets__main-image" />
                    <div className="widget__bottom">
                        <h1 className="witget__bottom-title">SUBSCRIPTION «TV & MOVIES»</h1>
                        <p className="widget__bottom-description">225 channels and movies, AMEDIATEKA and START series, discounts + audiobooks.</p>
                        <button className="widget__button">Try for 19AMD</button>
                        <span className="promo"><span className="promo__red">PROMO</span> First month for 19 AMD, next — 1 500 AMD/mo.</span>
                        <a href="/#" className="promo__link">About promo</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Staticvidgets;
