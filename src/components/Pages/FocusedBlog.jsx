import { withRouter, useHistory } from 'react-router-dom'
import convertDate from '../Shared/DateConverter';
import backToTop from '../Shared/BackToTop';

const FocusedBlog = (props) => {
    const history = useHistory();
    const post = props.location.post;

    const back = () => {
       history.goBack();
       localStorage.clear();
    }

    const focusedBlogMapper = () => {
        let storedPost = JSON.parse(localStorage.getItem('post'));
        let focusedPost = post === undefined ? storedPost : post;
        return (
            <div className='focused-blog'>
                <span className={props.colorMode('back-button','back-button light')} onClick={() => back()}>Back</span>
                {
                        <div className={props.colorMode('card', 'card light')}>
                            <div className={props.colorMode('card-header','card-header light')}>
                                <p className={props.colorMode('card-title','card-title light')}>{focusedPost.title}</p>
                                <p className={props.colorMode('card-date','card-date light')}>{convertDate(focusedPost.createdAt)}</p>
                            </div>
                            <p className='card-body'>{focusedPost.body}</p>
                        </div> 
                }
            </div>
        )
    }

    return (
        <>
            {focusedBlogMapper()}
            <button className={props.colorMode('back-to-top-btn focused', 'back-to-top-btn focused light')} onClick={() => backToTop()}>Back to top</button>
        </>
    )

    
}

export default withRouter(FocusedBlog);
