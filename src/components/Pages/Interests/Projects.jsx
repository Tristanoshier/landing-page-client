import { useEffect, useState } from 'react';

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
                setProjects(projects)
            })
    }, [])


    const projectMapper = () => {
        if (projects.length > 0) {
            return projects.map((project, index) => {
                return (
                    <div key={index}>
                        <h2 className={props.darkMode ? "sub-heading-dark" : "sub-heading-light"}>- {project.title} -</h2>
                        <p className={props.darkMode ? "about-text-dark" : "about-text-light"}>
                            {project.desc}
                        </p>
                        <p className={props.darkMode ? "about-text-dark" : "about-text-light"}>
                            {project.link}
                        </p>
                    </div>
                )
            })
        } else {
            return (
                <h2 className={props.darkMode ? "about-text-dark" : "about-text-light"}>
                    currently no projects
                </h2>
            )
        }
    }

    return (
        <div>
           {projectMapper()}
        </div>
    )
}
