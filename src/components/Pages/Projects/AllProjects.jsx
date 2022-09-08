import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import APIURL from "../../../Evironment/environment";
import convertDate from "../../Shared/DateConverter";
// import backToTop from "../../Shared/BackToTop";
import { LoadingSkeleton } from "../../Shared/LoadingSkeleton";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    fetch(`${APIURL}/site/projects`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((projects) => {
        setProjects(projects);
        setIsLoading(false);
        projects.length >= 6 ? setShowBackToTop(true) : setShowBackToTop(false);
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
                  <h3>Date Created :</h3>
                  <span>{convertDate(project.createdAt)}</span>
                </div>
                <div className="size">
                  <h3>Project Category :</h3>
                  <span>{project.projecttype}</span>
                </div>
                <Link
                  onClick={() => saveProjectInLocalStorage(project)}
                  className="card-link"
                  to={{
                    pathname: `/project-details/${project.title}`,
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
    <div className="projects">
      <div className="project-header">
        <div></div>
        <p className="page-header project">All Work</p>
      </div>
      {!isLoading ? (
        <>
          <div className="project-container all">{projectMapper()}</div>
          {/* {showBackToTop ? (
            <button
              className="landing-btn back-to-top"
              onClick={() => backToTop()}
            >
              Back to top
            </button>
          ) : (
            <></>
          )} */}
        </>
      ) : (
        <div className="loading-skeletons-wrapper">
          <LoadingSkeleton numberOfCards={6} />
        </div>
      )}
    </div>
  );
};

export default React.memo(AllProjects);
