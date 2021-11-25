import React from 'react';
import './footer.css'
import logo from '../../Assets/navbar/logo.png'
import { CgFacebook, FaTelegramPlane, SiViber, FaOdnoklassniki, FaWhatsapp, MdCopyright } from 'react-icons/all'

const Footer = () => {

    const year = new Date()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__column">
                        <h3 className="footer__title">Users and partners</h3>
                        <ul className="footer__list">
                            <li className="footer__list-items">All about subscriptions</li>
                            <li className="footer__list-items">Redeem promo code</li>
                            <li className="footer__list-items">Agreement</li>
                            <li className="footer__list-items">About us</li>
                            <li className="footer__list-items">Company news</li>
                            <li className="footer__list-items">Add a podcast</li>
                            <li className="footer__list-items">Partnership</li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <h3 className="footer__title">On devices</h3>
                        <ul className="footer__device-list">
                            <li className="footer__device__list-items">TVs and mediaplayers</li>
                            <li className="footer__device__list-items">Mobile devices</li>
                            <li className="footer__device__list-items">PC</li>
                            <li className="footer__device__list-items">Connect TV</li>
                        </ul>
                    </div>
                    <div className="footer__support-column">
                        <h3 className="footer__title">User support</h3>
                        <a href="mailto:support@megogo.net" className="footer__email">support@megogo.net</a>
                        <div className="footer__support-items">
                            <h3 className="all__contacts-link">All Contacts</h3>
                            <h3 className="faq">FAQ</h3>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="footer__application">
                            <h3 className="footer__title">Our applications</h3>
                            <img src="https://s6.vcdn.biz/static/39165961/applications-smart-tv.png/pt/r0x0x4" alt="app" className="app-icon" />
                            <img src="https://s7.vcdn.biz/static/39165971/applications-app-store.png/pt/r0x0x4" alt="app" className="app-icon" />
                            <img src="https://s9.vcdn.biz/static/39165991/applications-google-play.png/pt/r0x0x4" alt="app" className="app-icon" />
                            <img src="https://s8.vcdn.biz/static/f/2242444741/image.jpg/pt/r0x0x4" alt="app" className="app-icon" />
                        </div>
                        <div className="footer__social-media">
                            <h3 className="footer__title">Join us on social networks</h3>
                            <span className="social__media-icons facebook">
                                <CgFacebook color="#fff" />
                            </span>
                            <span className="social__media-icons whatsapp">
                                <FaWhatsapp color="#fff" />
                            </span>
                            <span className="social__media-icons ok">
                                <FaOdnoklassniki color="#fff" />
                            </span>
                            <span className="social__media-icons telegram">
                                <FaTelegramPlane color="#fff" />
                            </span>
                            <span className="social__media-icons wiber">
                                <SiViber color="#fff" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar__footer">
                <header className="navbar">
                    <div className="container">
                        <nav className='navbar__items'>
                            <ul className="items">
                                <img src={logo} alt="logo" className="main_logo-img" />
                                <li className="menue__item"> <span className="nav-links"> TV channels</span></li>
                                <li className="menue__item"> <span className="nav-links"> Premieres</span></li>
                                <li className="menue__item"> <span className="nav-links"> Movies</span></li>
                                <li className="menue__item"> <span className="nav-links">Cartoons</span></li>
                                <li className="menue__item"> <span className="nav-links">Series</span></li>
                                <li className="menue__item"> <span className="nav-links"> TV shows</span></li>
                                <li className="menue__item"> <span className="nav-links">Bloggers</span></li>
                                <li className="menue__item"> <span className="nav-links">Esports</span></li>

                            </ul>
                            <div className="copy__right">
                                <MdCopyright color="#fff" />
                                <p className="right-year">{year.getFullYear()} MEGOGO. All rights reserved.</p>
                                <div className="right__age">
                                    <span className="age-text" >18+</span>
                                </div>
                            </div>

                        </nav>

                    </div>

                </header>
            </div>
        </footer>
    );
}

export default Footer;

