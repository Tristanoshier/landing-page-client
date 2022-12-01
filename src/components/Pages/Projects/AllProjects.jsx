import React, { useState, useEffect } from "react";
import { LoadingSkeleton } from "../../Shared/LoadingSkeleton";
import { FilterProjects } from "./FilterProjects";
import { Spring } from "react-spring/renderprops";
import allProjects from '../../../Data/Project';
// import backToTop from "../../Shared/BackToTop";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [portfolioProjects, setPortfolioProjects] = useState([]);
  const [storeProjects, setStoreProjects] = useState([]);
  const [otherProjects, setOtherProjects] = useState([]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    setProjects(allProjects);

    allProjects.length >= 6 ? setShowBackToTop(true) : setShowBackToTop(false);

    setPortfolioProjects(
      allProjects.filter((project) => project.projecttype === "portfolio")
    );
    setStoreProjects(
      allProjects.filter((project) => project.projecttype === "shop")
    );
    setOtherProjects(
      allProjects.filter((project) => project.projecttype === "other")
    );

    setIsLoading(false);
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
                  projects={allProjects}
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
