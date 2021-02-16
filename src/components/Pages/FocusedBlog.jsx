import { withRouter, useHistory } from 'react-router-dom'
import convertDate from '../Shared/DateConverter';
import backToTop from '../Shared/BackToTop';

const FocusedBlog = (props) => {
    const history = useHistory();
    const post = props.location.post;

    const back = () => {
       history.goBack();
    }

    const focusedBlogMapper = () => {
        return (
            <div className='focused-blog'>
                <span className={props.colorMode('back-button','back-button light')} onClick={() => back()}>Back</span>
                {
                    post !== undefined ?
                        <div className={props.colorMode('card', 'card light')}>
                            <div className={props.colorMode('card-header','card-header light')}>
                                <p className={props.colorMode('card-title','card-title light')}>{post.title}</p>
                                <p className={props.colorMode('card-date','card-date light')}>{convertDate(post.createdAt)}</p>
                            </div>
                            <p className='card-body'>{post.body}</p>
                        </div> :
                        <p className={props.colorMode('page-text-dark', 'page-text-light')}>whoops, looks like we lost the article. Click the back button to go back to the interests page.</p>
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
