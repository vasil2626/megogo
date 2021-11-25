import React, { useEffect, useState } from 'react';
import './navbar.css'
import logo from '../../Assets/navbar/logo.png'
import { BsThreeDots } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from "react-icons/cg"

const Navbar = () => {


    const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth)

    const [menuOpen, setMenuOpen] = useState(true)

    const getWindowInnerWidth = e => {

        setWindowInnerWidth(e.srcElement.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', getWindowInnerWidth)

        return () => window.removeEventListener('resize', getWindowInnerWidth)
    }, [windowInnerWidth])


    useEffect(() => {
        if (windowInnerWidth >= 1143) {
            setMenuOpen(true)
        }
    }, [windowInnerWidth])



    return (
        <>
            <header className="navbar">
                <div className={windowInnerWidth <= 1143 ? "unset-container" : "container"}>
                    <nav className={!menuOpen ? 'navbar__items' : 'closed__navbar-items'}>
                        {
                            windowInnerWidth <= 1143 ? <div onClick={() => setMenuOpen(!menuOpen)}>
                                {
                                    menuOpen ?
                                        <GiHamburgerMenu color="#fff" className="navbar__hamburger-icon" size="1.3em" />
                                        : <CgClose color="#fff" size="1.3em" style={{ margin: "0 40px" }} />

                                }
                            </div> : null
                        }
                        <ul className={!menuOpen ? "hamburger__items" : "items"}>

                        {/* <ul className="items"> */}
                            <img src={logo} alt="logo" className={menuOpen ? "main_logo-img" : "main__logo-hid"} />
                            <li className="menue__item"> <span className="nav-links"> TV channels</span></li>
                            <li className="menue__item"> <span className="nav-links"> Premieres</span></li>
                            <li className="menue__item"> <span className="nav-links"> Movies</span></li>
                            <li className="menue__item"> <span className="nav-links">Cartoons</span></li>
                            <li className="menue__item"> <span className="nav-links">Series</span></li>
                            <li className="menue__item"> <span className="nav-links"> TV shows</span></li>
                            <li className="menue__item"> <span className="nav-links">Bloggers</span></li>
                            <li className="menue__item"> <span className="nav-links">Esports</span></li>
                            <div className="navbar__more__items">
                                {
                                    menuOpen &&
                                <BsThreeDots size="1.5em" />
                                }
                                <ul className="more__dropdown">
                                    <li className="mor__items"><span className="nav-links">Enter promo code</span></li>
                                    <li className="mor__items"><span className="nav-links">Link TV</span></li>
                                    <li className="mor__items"><span className="nav-links">All about subscriptions</span></li>
                                    <li className="mor__items"><span className="nav-links">MEGOGO on devices</span></li>
                                    <li className="mor__items"><span className="nav-links">Movies by subscription</span></li>
                                    <li className="mor__items"><span className="nav-links">Trailers</span></li>
                                    <li className="mor__items"><span className="nav-links">Discovery+</span></li>
                                    <li className="mor__items"><span className="nav-links">Movies and series of START</span></li>
                                    <li className="mor__items"><span className="nav-links">Look how it's heard</span></li>
                                    <li className="mor__items"><span className="nav-links">Selections</span></li>

                                </ul>
                            </div>
                        </ul>
                        <div className="navbr__widgets-content">
                            <ul className="navbar__witgets">
                                <button className={!menuOpen || windowInnerWidth >= 1098 ? "navbar__button" : "navbar__button-hid"}>Try for 19 AMD</button>

                                <AiOutlineSearch className={menuOpen ? "navbar__search__icon" : "navbar__search__icon-hid"} size="1.3em" />

                                <p className={!menuOpen || windowInnerWidth >= 1098 ? "navbar__lang" : "navbar__lang-hid"}>EN</p>
                                <p className={!menuOpen || windowInnerWidth >= 1098 ? "navbar__login" : "navbar__login-hid"}>LOG IN</p>

                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navbar;
