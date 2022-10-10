import React, { useState, useEffect } from "react";
import APIURL from "../../../Evironment/environment";
import { LoadingSkeleton } from "../../Shared/LoadingSkeleton";
import { FilterProjects } from "./FilterProjects";
import { Spring } from "react-spring/renderprops";
// import backToTop from "../../Shared/BackToTop";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [portfolioProjects, setPortfolioProjects] = useState([]);
  const [storeProjects, setStoreProjects] = useState([]);
  const [otherProjects, setOtherProjects] = useState([]);
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

        projects.length >= 6 ? setShowBackToTop(true) : setShowBackToTop(false);

        setPortfolioProjects(
          projects.filter((project) => project.projecttype === "portfolio")
        );
        setStoreProjects(
          projects.filter((project) => project.projecttype === "shop")
        );
        setOtherProjects(
          projects.filter((project) => project.projecttype === "other")
        );

        setIsLoading(false);
      })
      .catch(() =>
        alert(
          "Sorry, something went wrong. Check your network connection or try again in a few minutes."
        )
      );
  }, []);

  return (
    <div className="projects">
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 500, duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            <div className="project-header">
              <div></div>

              <p className="page-header project">All Work</p>
            </div>
          </div>
        )}
      </Spring>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            {!isLoading ? (
              <>
                <FilterProjects
                  projects={projects}
                  portfolioProjects={portfolioProjects}
                  storeProjects={storeProjects}
                  otherProjects={otherProjects}
                  isLoading={isLoading}
                />

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
        )}
      </Spring>
    </div>
  );
};

export default React.memo(AllProjects);
