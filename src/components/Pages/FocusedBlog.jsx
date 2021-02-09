import { useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom'
import convertDate from '../Shared/DateConverter';
import backToTop from '../Shared/BackToTop';

const FocusedBlog = (props) => {
    const [redirect, setRedirect] = useState(false);
    const post = props.location.post;

    const back = () => {
        setRedirect(true);
    }

    if (redirect && post.topic !== 'blog') {
        return <Redirect to='/Interests' />
    } else if (redirect && post.topic === 'blog') {
        return <Redirect to='/Blog' />
    }

    const focusedBlogMapper = () => {
        return (
            <div className='focused-blog'>
                <span className={props.darkMode ? 'back-button' : 'back-button light'} onClick={() => back()}>Back</span>
                {
                    post !== undefined ?
                        <div className={props.darkMode ? 'card' : 'card light'}>
                            <div className={props.darkMode ? 'card-header' : 'card-header light'}>
                                <p className={props.darkMode ? 'card-title' : 'card-title light'}>{post.title}</p>
                                <p className={props.darkMode ? 'card-date' : 'card-date light'}>{convertDate(post.createdAt)}</p>
                            </div>
                            <p className='card-body'>{post.body}</p>
                        </div> :
                        <p className={props.darkMode ? 'about-text-dark' : 'about-text-light'}>whoops, looks like we lost the article. Click the back button to go back to the interests page.</p>
                }
            </div>
        )
    }

    return (
        <>
            {focusedBlogMapper()}
            <button className={props.darkMode ? 'back-to-top-btn focused' : 'back-to-top-btn focused light'} onClick={() => backToTop()}>Back to top</button>
        </>
    )

    
}

export default withRouter(FocusedBlog);
