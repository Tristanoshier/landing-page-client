import { useState } from 'react';
import { Redirect, withRouter } from "react-router-dom"
import convertDate from '../Shared/DateConverter';

const FocusedBlog = (props) => {
    const [redirect, setRedirect] = useState(false);
    let post = props.location.post;

    const back = () => {
        setRedirect(true);
    }

    if(redirect) {
        return <Redirect to='/Interests' />
    }

    return (
        <div className="focused-blog">
            <span className="back-button-dark" onClick={() => back()}>Back</span>
            {
                post !== undefined ? <div className="card">
                <div className="card-header">
                    <p className="card-title">{post.title}</p>
                    <p className="card-date">{convertDate(post.createdAt)}</p>
                </div>
                <p className="card-body">{post.body}</p>
            </div> :
                <p className="about-text-dark">whoops, looks like we lost the article. Click the back button to go back to the interests page.</p>
            }
        </div>
    )
}

export default withRouter(FocusedBlog);
