import convertDate from './DateConverter';
import { Link } from 'react-router-dom';

const blogHeader = (title, date, darkMode) => {
    return (
        <div className={darkMode ? "card-header" : "card-header light"}>
            <p className={darkMode ? "card-title" : "card-title light"}>{title}</p>
            <p className={darkMode ? "card-date" : "card-date light"}>{convertDate(date)}</p>
        </div>
    )
}

const interestHeader = (title, date, topic, darkMode) => {
    return (
        <div className={darkMode ? "interest-card-header" : "interest-card-header light"}>
            <span className="top-row">
                <p className={darkMode ? "card-title" : "card-title light"}>{title}</p>
                <p className={darkMode ? "card-date" : "card-date light"}>{convertDate(date)}</p>
            </span>
            <span className={darkMode ? "card-topic" : "card-topic light"}>{topic}</span>
        </div>
    )
}

const postMapper = (posts, type, darkMode) => {
    if (posts.length > 0) {
        return posts.map((post, index) => {
            return (
                <div className={darkMode ? "card" : "card light"} key={index}>
                    {
                        type === 'blog' ? blogHeader(post.title, post.createdAt, darkMode)
                            : interestHeader(post.title, post.createdAt, post.topic, darkMode)
                    }
                    {
                        post.body.length > 300 ?
                            <p className="card-body">{post.body.substr(1, 300)}. . . <Link className={darkMode ? "card-link" : "card-link light"} to={{ pathname: `/Focused/${post}`, post: post }}>Read More</Link></p>
                            : <p className="card-body">{post.body}</p>
                    }
                </div>
            )
        })
    } else {
        <h2 className={darkMode ? "about-text-dark" : "about-text-light"}>
            no results found
                </h2>
    }
}
export default postMapper;