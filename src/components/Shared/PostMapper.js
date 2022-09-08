import convertDate from './DateConverter';
import { Link } from 'react-router-dom';

const savePostInLocalStorage = post => {
    localStorage.setItem('post', JSON.stringify(post))
}

const postMapper = (posts, lastElementOnPage) => {
        return posts.map((post, index) => {
                    return (
                        <div className="container" ref={lastElementOnPage} key={index}>
                            <div className="card" style={
                                { backgroundImage: `url(${post.thumbnailpath})`}}>
                                <div className="contentBx">
                                    <h2>{post.title}</h2>
                                    <div className="color">
                                        <span>posted on {convertDate(post.createdAt)} | {post.readtime} min read time</span>
                                    </div>
                                     <Link 
                                        onClick={() => savePostInLocalStorage(post)}
                                        className="card-link"
                                        to={{
                                            pathname: `/post-details/${post.title}`,
                                            post: post,
                                        }}
                                    >
                                        Read
                                    </Link>
                                </div>
                            </div>
                        </div>  
                    )
        })
}
export default postMapper;
