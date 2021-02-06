import { Link } from 'react-router-dom';
import convertDate from '../../Shared/DateConverter';

export const Recent = (props) => {

    const recentPostsMapper = () => {
        if (props.posts.length > 0) {
            let recentPosts = props.posts.length < 3 ? props.posts : props.posts.slice(0, 3);
            return recentPosts.map((post, index) => {
                return (
                    <div className="card" key={index}>
                        <div className="interest-card-header">
                            <span className="top-row">
                                <p className="card-title">{post.title}</p>
                                <p className="card-date">{convertDate(post.createdAt)}</p>
                            </span>
                            <span className="card-topic">{post.topic}</span>
                        </div>
                        {
                            post.body.length > 400 ?
                            <p className="card-body">{post.body.substr(1, 400)}. . . <Link className="card-link" to={{pathname: `/Focused/${post}`, post: post}}>Read More</Link></p>
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
