import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import backToTop from '../../Shared/BackToTop';
import convertDate from '../../Shared/DateConverter';
import APIURL from '../../../Evironment/environment';

export const Projects = (props) => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${APIURL}/site/projects`, {
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

    const saveProjectInLocalStorage = (project) => {
        localStorage.setItem('project', JSON.stringify(project))
    }

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
                        {
                        project.description.length > 299 ?
                                    <p className='card-body'><div dangerouslySetInnerHTML={{__html: `${project.description.substr(0, 299)}. . .`}} /><br/><Link onClick={() => saveProjectInLocalStorage(project)} className={props.darkMode ? 'card-link' : 'card-link light'} to={{ pathname: `/FocusedProject/${project.title}`, project: project }}>See More</Link></p>
                                    : <p className='card-body'><div dangerouslySetInnerHTML={{__html: project.description}} /></p>
                        }  
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
