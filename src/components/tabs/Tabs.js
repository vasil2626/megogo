import React, {useState} from 'react';

const Tabs = () => {

    const [toggleState, setToggleState] = useState(1);


    const toggleTab = (index) => {
        setToggleState(index);
      };

    return (
        <>
        <div className="container">
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
            
        </>
    );
}

export default Tabs;
