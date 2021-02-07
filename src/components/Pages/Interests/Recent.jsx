import { Link } from 'react-router-dom';
import convertDate from '../../Shared/DateConverter';

export const Recent = (props) => {

    const recentPostsMapper = () => {
        if (props.posts.length > 0) {
            let recentPosts = props.posts.length < 3 ? props.posts : props.posts.slice(0, 3);
            return recentPosts.map((post, index) => {
                return (
                    <div className={props.darkMode ? "card" : "card light"} key={index}>
                        <div className={props.darkMode ? "interest-card-header" : "interest-card-header light"}>
                            <span className="top-row">
                                <p className={props.darkMode ? "card-title" : "card-title light"}>{post.title}</p>
                                <p className={props.darkMode ? "card-date" : "card-date light"}>{convertDate(post.createdAt)}</p>
                            </span>
                            <span className={props.darkMode ? "card-topic" : "card-topic light"}>{post.topic}</span>
                        </div>
                        {
                            post.body.length > 300 ?
                                <p className="card-body">{post.body.substr(1, 300)}. . . <Link className={props.darkMode ? "card-link" : "card-link light"} to={{ pathname: `/Focused/${post}`, post: post }}>Read More</Link></p>
                                : <p className="card-body">{post.body}</p>
                        }
                    </div>
                )
            })
        } else {
            return <h2>no recent activity</h2>
        }
    }

    return (
        <div>
            {recentPostsMapper()}
        </div>
    )
}
