import React from 'react';

export const Main = (props) => {
    return (
        <div className="main">
            <p className={props.darkMode ? "intro-darkmode" : "intro-lightmode"}><span id="main-header">Welcome!</span><br />I'm Tristan,<br />a software engineer<br />specializing in<br />front-end.</p>           
        </div>
    )
}
