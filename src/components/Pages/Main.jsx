import React from 'react';

export const Main = (props) => {
    return (
        <div className="main">
            <p className={props.darkMode ? "intro-darkmode" : "intro-lightmode"}><span id="welcome-header">Welcome!</span><br />I'm Tristan,<br />a software engineer<br />specializing in<br />front-end.</p>

            {/* svg mountains */}
            <svg className="abstract-mountains" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill={props.darkMode ? "#EE6B5C" : "#8C8C8C" } fillOpacity="1" d="M0,288L180,192L360,192L540,256L720,160L900,32L1080,96L1260,224L1440,32L1440,320L1260,320L1080,320L900,320L720,320L540,320L360,320L180,320L0,320Z"></path>
            </svg>
        </div>
    )
}
