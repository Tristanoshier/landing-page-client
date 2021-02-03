import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Recent } from './Recent'
import { Search } from './Search'
import { Projects } from './Projects'

export const Interests = (props) => {
    const [posts, setPosts] = useState([]);
    const [musicPosts, setMusicPosts] = useState([]);
    const [moviePosts, setMoviePosts] = useState([]);
    const [programmingPosts, setProgrammingPosts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/site/interests`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((res) => res.json())
            .then((posts) => {
                setPosts(posts)
                setMusicPosts(posts.filter(x => x.topic === 'music'))
                setMoviePosts(posts.filter(x => x.topic === 'movies'))
                setProgrammingPosts(posts.filter(x => x.topic === 'programming'))
            })
    }, [])

    return (
        <div className="blog">
            <p id="main-header">Interests</p>

           {/* <Link to="/Interests/Recent">Recent</Link>
            <Switch>
                <Route exact path="/Interests/Recent"><Recent /></Route>
                <Route exact path="/Interests/Search"><Search /></Route>
                <Route exact path="/Interests/Projects"><Projects /></Route>
            </Switch> */}
        </div>
    )
}
