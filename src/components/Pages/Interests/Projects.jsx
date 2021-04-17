import { useEffect, useState } from 'react';
import backToTop from '../../Shared/BackToTop';
import convertDate from '../../Shared/DateConverter';

export const Projects = (props) => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:3001/site/projects`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((res) => res.json())
            .then((projects) => {
                setProjects(projects);
                setIsLoading(false);
            }).catch(() => alert('Sorry, something went wrong. Check your network connection or try again in a few minutes.'))
    }, [])

    const projectMapper = () => {
        if (projects.length > 0) {
            return projects.map((project, index) => {
                return (
                    <div className={props.darkMode ? 'card' : 'card light'} key={index}>
                        <div className={props.darkMode ? 'interest-card-header' : 'interest-card-header light'}>
                            <span className='top-row'>
                                <p className={props.darkMode ? 'card-title' : 'card-title light'}>{project.title}</p>
                                <p className={props.darkMode ? 'card-date' : 'card-date light'}>{convertDate(project.createdAt)}</p>
                            </span>
                            <span className={props.darkMode ? 'card-topic' : 'card-topic light'}>{project.languages}</span>
                        </div>
                        <p className='card-body'>{project.description} <a href={project.link} className={props.darkMode ? 'card-link' : 'card-link light'} rel="noreferrer" target="_blank">Github Repo</a></p>
                           
                    </div>
                )
            })
        } else {
            return (
                <h2 className={props.darkMode ? "page-text" : "page-text light"}>
                    currently not working on any projects
                </h2>
            )
        }
    }

    return (
        <div>
            {isLoading ?
                    <div className="loader"></div>
                    : projectMapper()}
            {props.isLoading || projects.length < 3 ? <></> :
                <button className={props.colorMode('back-to-top-btn', 'back-to-top-btn light')} onClick={() => backToTop()}>Back to top</button>}
        </div>

    )
}
