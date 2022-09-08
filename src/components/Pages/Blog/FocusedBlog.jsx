import React from 'react';
import { withRouter } from 'react-router-dom';
import convertDate from '../../Shared/DateConverter';

const FocusedBlog = props => {
    const post = props.location.post;

    const focusedBlogMapper = () => {
        let storedPost = JSON.parse(localStorage.getItem('post'));
        let focusedPost = post === undefined ? storedPost : post;
        return (
            <div className="focused-post-container">
              <div className="post-title">{focusedPost?.title}</div>
              <div className="post-info">
                <div>Posted on {convertDate(focusedPost?.createdAt)} | {focusedPost?.readtime} minute read time</div>
              </div>
              <div
                className="post-body"
                dangerouslySetInnerHTML={{ __html: focusedPost?.body }}
              ></div>
          </div>
        )
    }

    return (
        <div className="focused-post">
            {focusedBlogMapper()}
        </div>
    )
}

export default React.memo(withRouter(FocusedBlog));
