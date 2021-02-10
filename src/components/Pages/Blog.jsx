import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import backToTop from '../Shared/BackToTop';
import postMapper from '../Shared/PostMapper';

const Blog = (props) => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const blogURL = `http://localhost:3001/site/blog`;

    useEffect(() => {
        fetch(blogURL, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((res) => res.json())
            .then((posts) => {
                setBlogPosts(posts);
                setIsLoading(false);
            })
    }, [blogURL])

    return (
        <>
            <div className='blog'>
                <p id='main-header'>Blog</p>
                <p className={props.darkMode ? 'about-text-dark' : 'about-text-light'}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                </p>
                {isLoading ?
                    <div className="loader"></div>
                    : postMapper(blogPosts, 'blog', props.darkMode)}
            </div>
            {props.isLoading || blogPosts.length < 3 ? <></> :
                <button className={props.colorMode('back-to-top-btn', 'back-to-top-btn light')} onClick={() => backToTop()}>Back to top</button>}
        </>

    )
}

export default withRouter(Blog);
