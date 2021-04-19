import convertDate from './DateConverter';
import { Link } from 'react-router-dom';

const blogHeader = (title, date, darkMode) => {
    return (
        <div className={darkMode ? 'card-header' : 'card-header light'}>
            <p className={darkMode ? 'card-title' : 'card-title light'}>{title}</p>
            <p className={darkMode ? 'card-date' : 'card-date light'}>{convertDate(date)}</p>
        </div>
    )
}

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

const postMapper = (posts, type, lastElementOnPage, darkMode) => {
    if (posts.length > 0) {
        return posts.map((post, index) => {
                if (posts.length === index + 1 && lastElementOnPage !== null) {
                    return (
                        <div ref={lastElementOnPage} className={darkMode ? 'card' : 'card light'} key={index}>
                            {
                                type === 'blog' ? blogHeader(post.title, post.createdAt, darkMode)
                                    : interestHeader(post.title, post.createdAt, post.topic, darkMode)
                            }
                            {
                                post.body.length > 299 ?
                                    <p className='card-body'><div dangerouslySetInnerHTML={{__html: `${post.body.substr(0, 299)}. . .`}} /><br/><Link onClick={() => savePostInLocalStorage(post)} className={darkMode ? 'card-link' : 'card-link light'} to={{ pathname: `/Focused/${post.title}`, post: post }}>Read More</Link></p>
                                    : <p className='card-body'><div dangerouslySetInnerHTML={{__html: post.body}} /></p>
                            }
                        </div>
                    )
                } else { 
                return (
                    <div className={darkMode ? 'card' : 'card light'} key={index}>
                        {
                            type === 'blog' ? blogHeader(post.title, post.createdAt, darkMode)
                                : interestHeader(post.title, post.createdAt, post.topic, darkMode)
                        }
                        {
                            post.body.length > 299 ?
                                <p className='card-body'><div dangerouslySetInnerHTML={{__html: `${post.body.substr(0, 299)}. . .`}} /><br /><Link onClick={() => savePostInLocalStorage(post)} className={darkMode ? 'card-link' : 'card-link light'} to={{ pathname: `/Focused/${post.title}`, post: post }}>Read More</Link></p>
                                : <p className='card-body'><div dangerouslySetInnerHTML={{__html: post.body}} /></p>
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
