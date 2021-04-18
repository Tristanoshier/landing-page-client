import { useEffect, useState, useRef, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import backToTop from '../Shared/BackToTop';
import postMapper from '../Shared/PostMapper';
import APIURL from '../../Evironment/environment';

const Blog = (props) => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [infiniteScrollLoading, setInfiniteScrollLoading] = useState(true);
    const [hasMore, setHasMore] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        pageNumber <= 1 ? setInfiniteScrollLoading(false) : setInfiniteScrollLoading(true);
        fetch(`${APIURL}/site/blog?page=${pageNumber}&limit=5`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json()).then(posts => {
            setBlogPosts(prevBlogPosts => {
                return [...prevBlogPosts, ...posts];
            });
            setHasMore(posts.length > 0);
            loadFormattedPosts()
            setIsLoading(false);
            setInfiniteScrollLoading(false);
        }).catch(() => alert('Sorry, something went wrong. Check your network connection or try again in a few minutes.'))

    }, [pageNumber])

    const loadFormattedPosts = () => {
        return postMapper(blogPosts, 'blog', lastPostOnScreen, props.darkMode)
    }

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
                <p id='main-header'>My Blog</p>
                <p className={props.colorMode('page-text', 'page-text light')}>
                    Welcome to my blog. This is the place where I talk about what im doing in life as well as my experience as a young engineer navigating through the large world of software engineering. I try and post something weekly so keep an eye out for new content!
                </p>
                <div dangerouslySetInnerHTML={{__html: 'apply<br><br>me'}} />
                {isLoading ?
                    <div className='loader'></div>
                    : loadFormattedPosts()
                }
                {infiniteScrollLoading ? <div className='loader'></div> : <></>}
            </div>
            {props.isLoading || blogPosts.length < 3 ? <></> :
                <button className={props.colorMode('back-to-top-btn', 'back-to-top-btn light')} onClick={() => backToTop()}>Back to top</button>}
        </>

    )
}

export default withRouter(Blog);
