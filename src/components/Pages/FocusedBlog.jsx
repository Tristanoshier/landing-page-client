import { withRouter, useHistory } from 'react-router-dom'
import convertDate from '../Shared/DateConverter'

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
                            <p className='card-body'><div dangerouslySetInnerHTML={{__html: focusedPost.body}} /></p>
                        </div> 
                }
            </div>
        )
    }

    return (
        <>
            {focusedBlogMapper()}
        </>
    )

    
}

export default withRouter(FocusedBlog);
