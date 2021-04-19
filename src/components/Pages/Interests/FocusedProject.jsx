import { withRouter, useHistory } from 'react-router-dom'
import convertDate from '../../Shared/DateConverter';

const FocusedProject = (props) => {
    const history = useHistory();
    const project = props.location.project;

    const back = () => {
       history.goBack();
       localStorage.clear();
    }

    const focusedProjectMapper = () => {
        let storedProject = JSON.parse(localStorage.getItem('project'));
        let focusedProject = project === undefined ? storedProject : project;
        return (
            <div className='focused-blog'>
                <span className={props.colorMode('back-button','back-button light')} onClick={() => back()}>Back</span>
                {
                        <div className={props.colorMode('card', 'card light')}>
                            <div className={props.colorMode('card-header','card-header light')}>
                                <p className={props.colorMode('card-title','card-title light')}>{focusedProject.title}</p>
                                <p className={props.colorMode('card-date','card-date light')}>{convertDate(focusedProject.createdAt)}</p>
                            </div>
                            <p className='card-body'><div dangerouslySetInnerHTML={{__html: focusedProject.description}} /><br />
                            <a href={focusedProject.link} className={props.colorMode('card-link', 'card-link light')} rel="noreferrer" target="_blank">See Live</a></p>
                        </div> 
                }
            </div>
        )
    }

    return (
        <>
            {focusedProjectMapper()}
        </>
    )
}

export default withRouter(FocusedProject);
