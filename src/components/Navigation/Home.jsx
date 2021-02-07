import Navbar from './Navbar';

const Home = (props) => {
    return (
        <div className="home">
            <Navbar darkMode={props.darkMode} setDarkMode={props.setDarkMode} colorMode={props.colorMode} />
        </div>
    )
}

export default Home;
