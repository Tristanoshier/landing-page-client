import { useEffect, useState } from 'react';
import backToTop from '../../Shared/BackToTop';

export const Projects = (props) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/site/projects`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((res) => res.json())
            .then((projects) => {
                setProjects(projects);
            })
    }, [])


    const projectMapper = () => {
        if (projects.length > 0) {
            return projects.map((project, index) => {
                return (
                    <div key={index}>
                        <h2 className={props.darkMode ? "sub-heading-dark" : "sub-heading-light"}>- {project.title} -</h2>
                        <p className={props.darkMode ? "page-text-dark" : "page-text-light"}>
                            {project.desc}
                        </p>
                        <p className={props.darkMode ? "page-text-dark" : "page-text-light"}>
                            {project.link}
                        </p>
                    </div>
                )
            })
        } else {
            return (
                <h2 className={props.darkMode ? "page-text-dark" : "page-text-light"}>
                    currently not working on any projects
                </h2>
            )
        }
    }

    return (
        <div className="projects">
           {projectMapper()}
           {props.isLoading || projects.length < 3 ? <></> :
                <button className={props.colorMode('back-to-top-btn', 'back-to-top-btn light')} onClick={() => backToTop()}>Back to top</button>}
        </div>
        
    )
}
