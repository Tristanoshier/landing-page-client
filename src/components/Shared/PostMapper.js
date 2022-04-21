import convertDate from './DateConverter';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const interestHeader = (title, date, topic, darkMode) => {
    return (
        <div className={darkMode ? 'interest-card-header' : 'interest-card-header light'}>
            <span className='top-row'>
                <p className={darkMode ? 'card-title' : 'card-title light'}>{title}</p>
                <p className={darkMode ? 'card-date' : 'card-date light'}>{convertDate(date)}</p>
            </span>
            <span className={darkMode ? 'card-topic' : 'card-topic light'}>{topic}</span>
        </div>
    )
}

const savePostInLocalStorage = (post) => {
    localStorage.setItem('post', JSON.stringify(post))
}

const postMapper = (posts, lastElementOnPage, darkMode) => {
    if (posts.length > 0) {
        return posts.map((post, index) => {
                if (posts.length === index + 1 && lastElementOnPage !== null) {
                    return (
                        <div ref={lastElementOnPage} className={darkMode ? 'card' : 'card light'} key={index}>
                            { interestHeader(post.title, post.createdAt, post.topic, darkMode) }
                            {
                                post.body.length > 299 ?
                                    <div className='card-body'>
                                            <div className={darkMode ? 'card-text' : 'card-text light'}>
                                                { parse(`${post.body.substr(0, 299)}. . .`) }
                                            </div>
                                            <br/>
                                            <Link onClick={() => savePostInLocalStorage(post)} className={darkMode ? 'card-link' : 'card-link light'} to={{ pathname: `/Focused/${post.title}`, post: post }}>Read More</Link>
                                    </div>
                                    : 
                                    <div className='card-body'>
                                        <div className={darkMode ? 'card-text' : 'card-text light'}>
                                            {parse(post.body)}
                                        </div>
                                    </div>
                            }
                        </div>
                    )
                } else { 
                return (
                    <div className={darkMode ? 'card' : 'card light'} key={index}>
                        { interestHeader(post.title, post.createdAt, post.topic, darkMode) }
                        {
                            post.body.length > 299 ?
                                <div className='card-body'>
                                    <div className={darkMode ? 'card-text' : 'card-text light'}>
                                    {parse(`${post.body.substr(0, 299)}. . .`)}
                                    </div>
                                    <br />
                                    <Link onClick={() => savePostInLocalStorage(post)} className={darkMode ? 'card-link' : 'card-link light'} to={{ pathname: `/Focused/${post.title}`, post: post }}>Read More</Link>
                                </div>
                                : 
                                <div className='card-body'>
                                    <div className={darkMode ? 'card-text' : 'card-text light'}>
                                        {parse(post.body)}  
                                    </div>
                                </div>
                        }
                    </div>
                )
                }
        })
    } else {
        return (
            <h2 className={darkMode ? 'page-text' : 'page-text light'}>
                no results found
            </h2>
        )
        
    }
}
export default postMapper;
