import { useEffect, useState, useRef, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import backToTop from '../Shared/BackToTop';
import postMapper from '../Shared/PostMapper';

const Blog = (props) => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [infiniteScrollLoading, setInfiniteScrollLoading] = useState(true);
    const [hasMore, setHasMore] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        pageNumber <= 1 ? setInfiniteScrollLoading(false) : setInfiniteScrollLoading(true);
        fetch(`http://localhost:3001/site/blog?page=${pageNumber}&limit=5`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json()).then(posts => {
            setBlogPosts(prevBlogPosts => {
                return [...prevBlogPosts, ...posts];
            });
            setHasMore(posts.length > 0);
            setIsLoading(false);
            setInfiniteScrollLoading(false);
        })
    }, [pageNumber])

    const observer = useRef();

    const lastPostOnScreen = useCallback(node => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1);
            }
        })
        if (node) observer.current.observe(node)
    }, [isLoading, hasMore])

    return (
        <>
            <div className='blog'>
                <p id='main-header'>Blog</p>
                <p className={props.colorMode('page-text', 'page-text light')}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                </p>
                {isLoading ?
                    <div className="loader"></div>
                    : postMapper(blogPosts, 'blog', lastPostOnScreen, props.darkMode)
                }
                {infiniteScrollLoading ? <div className="loader"></div> : <></>}
            </div>
            {props.isLoading || blogPosts.length < 3 ? <></> :
                <button className={props.colorMode('back-to-top-btn', 'back-to-top-btn light')} onClick={() => backToTop()}>Back to top</button>}
        </>

    )
}

export default withRouter(Blog);
