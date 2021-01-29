import React from 'react';
import Navbar from './Navbar';

const Home = (props) => {
    return (
        <div className="home">
            <Navbar darkMode={props.darkMode} setDarkMode={props.setDarkMode} />           
        </div>
    )
}

export default Home;
