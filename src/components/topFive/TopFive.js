import React, { useState } from "react";
import "./topFive.css";
import { movies, animations, showsSeries } from "./data";
import Bannerimage from "./bannerImage/BannerImage";
import Tabs from '../tabs/Tabs'



const TopFive = () => {
  const [toggleState, setToggleState] = useState(1);

  const [bannerImage, setBannerImage] = useState(movies[0].img);

  const [isHover, setIsHover] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const getActiveClass = (index, className) =>
    toggleState === index ? className : "";

  const mousHandler = (img) => {
    setBannerImage(img);
    setIsHover(true);
  };

  return (
    <div className="top__five">
      <div className="container">
        <div className="top__five-tabs">
          <h1 className="top__five-title">TOP 5</h1>
          <ul className="tab-list">
            <li
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              MOVIES
            </li>
            <li
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              ANIMATIONS
            </li>
            <li
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              SERIES AND SHOWS
            </li>
          </ul>
        </div>
        <div className="content-container">
          <div className={`content ${getActiveClass(1, "active-content")}`}>
            <Bannerimage url={bannerImage} isHover={isHover}/>
            <div className="top__five-info">
              {movies.map((movies) => {
                return (
                  <ul
                    className="top__five-list"
                    onMouseOver={() => mousHandler(movies.img)}
                    onMouseLeave={() => setIsHover(false)}
                    key={movies.id}
                  >
                    <li className="top__five-items">
                      <div className="list-items">
                        <span className="list__title">{movies.title}</span>
                        <span className="list__description">
                          {movies.description}
                        </span>
                      </div>
                      <div className="info">
                        <span className="list__info-imdb">
                          <p className="key">{movies.imbd}</p>
                          <p className="info-text">imdb</p>
                        </span>
                        <span className="list__info-mgg">
                          <p className="key">{movies.mgg}</p>
                          <p className="info-text">mgg</p>
                        </span>
                      </div>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
          <div className={`content ${getActiveClass(2, "active-content")}`}>
            <Bannerimage url={bannerImage} isHover={isHover} />
            <div className="top__five-info">
              {animations.map((animations) => {
                return (
                  <ul
                    className="top__five-list"
                    onMouseOver={() => mousHandler(animations.img)}
                    onMouseLeave={() => setIsHover(false)}
                    key={animations.id}
                  >
                    <li className="top__five-items">
                      <div className="list-items">
                        <span className="list__title">{animations.title}</span>
                        <span className="list__description">
                          {animations.description}
                        </span>
                      </div>
                      <div className="info">
                        <span className="list__info-imdb">
                          <p className="key">{animations.imbd}</p>
                          <p className="info-text">imdb</p>
                        </span>
                        <span className="list__info-mgg">
                          <p className="key">{animations.mgg}</p>
                          <p className="info-text">mgg</p>
                        </span>
                      </div>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
          <div className={`content ${getActiveClass(3, "active-content")}`}>
            <Bannerimage url={bannerImage} isHover={isHover} />
            <div className="top__five-info">
              {showsSeries.map((showsSeries) => {
                return (
                  <ul
                    className="top__five-list"
                    onMouseOver={() => mousHandler(showsSeries.img)}
                    onMouseLeave={() => setIsHover(false)}
                    key={showsSeries.id}
                  >
                    <li className="top__five-items">
                      <div className="list-items">
                        <span className="list__title">{showsSeries.title}</span>
                        <span className="list__description">
                          {showsSeries.description}
                        </span>
                      </div>
                      <div className="info">
                        <span className="list__info-imdb">
                          <p className="key">{showsSeries.imbd}</p>
                          <p className="info-text">imdb</p>
                        </span>
                        <span className="list__info-mgg">
                          <p className="key">{showsSeries.mgg}</p>
                          <p className="info-text">mgg</p>
                        </span>
                      </div>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFive;
