import React, { useState, useEffect } from "react";
import webDesignProjects from "../../../Data/WebDesignProjects";
import { Spring } from "react-spring/renderprops";
import { LoadingSpinner } from "../../Shared/LoadingSpinner";
import useImagePreloader from "../../Hooks/UseImagePreloader";
import webDesignProjectPhotos from "../../../Data/WebDesignProjects";

const preloadSrcList = [
  ...webDesignProjectPhotos.map((photo) => photo.thumbnailpath),
];

export const WebDesign = () => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(webDesignProjects);
  }, []);

  const displayWebDesignPojects = () => {
    return projects.map((project) => (
      <div className="web-project-container" key={project.id}>
        <a href={project.link} rel="noreferrer" target="_blank">
          <img
            className="web-project-image"
            src={project.thumbnailpath}
            alt={project.title}
          />
        </a>
        <div className="web-project-title">{project.title}</div>
        <div className="web-project-description">{project.description}</div>
      </div>
    ));
  };

  return (
    <>
      {!imagesPreloaded ? (
        <div className="loading-spinner-container">
          <LoadingSpinner />
          <p className="photo-title">Loading web projects...</p>
        </div>
      ) : (
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 500, duration: 1000 }}
        >
          {(props) => (
            <div style={props}>
              <div className="web-design-section">
                {displayWebDesignPojects()}
              </div>
            </div>
          )}
        </Spring>
      )}
    </>
  );
};
