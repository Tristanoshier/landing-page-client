import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import APIURL from "../../../Evironment/environment";
import { LoadingSkeleton } from "../../Shared/LoadingSkeleton";
import formatTitle from "../../Shared/FormatTitle";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${APIURL}/site/projects/favorites`,
    {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    }
    )
      .then((res) => res.json())
      .then((projects) => {
        setProjects(projects);
        setIsLoading(false);
      })
      .catch(() =>
        alert(
          "Sorry, something went wrong. Check your network connection or try again in a few minutes."
        )
      );
  }, []);

  const saveProjectInLocalStorage = (project) => {
    localStorage.setItem("project", JSON.stringify(project));
  };

  const projectMapper = () => {
      return projects.map((project, index) => {
        return (
          <div className="container" key={index}>
            <div
              className="card"
              style={{ backgroundImage: `url(${project.thumbnailpath})` }}
            >
              <div className="contentBx">
                <h2>{project.title}</h2>
                <div className="color">
                  <span>{project.about}</span>
                </div>
                <Link
                  onClick={() => saveProjectInLocalStorage(project)}
                  className="card-link"
                  to={{
                    pathname: `/project-details/${formatTitle(project.title)}`,
                    project: project,
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        );
      });
  };

  return (
    <div id="projects" className="projects">
      <p className="page-header">Selected Works</p>
      <>
        {!isLoading ? (
          <>
            <div className="project-container">{projectMapper()}</div>
            {projects.length >= 3 ? (
              <div className="btn-container">
                <Link className="btn-link" to="/all-projects">
                  <button className="landing-btn browse-all">Browse All</button>
                </Link>
              </div>
            ) : (
              <></>
            )}
          </>
        ) : (
          <LoadingSkeleton numberOfCards={3} />
        )}
      </>
    </div>
  );
};

export default React.memo(Projects);
