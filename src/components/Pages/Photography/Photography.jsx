import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spring } from "react-spring/renderprops";
import { LoadingSpinner } from "../../Shared/LoadingSpinner";
import photoProjects from "../../../Data/photoProjects";
import useImagePreloader from "../../Hooks/UseImagePreloader";
const preloadSrcList = [
  ...photoProjects.map((project) => project.thumbnailImage),
];

export const Photography = () => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);
  let [photoProjectList, setPhotoProjectList] = useState([]);

  useEffect(() => {
    setPhotoProjectList(photoProjects);
  }, []);

  const storePhotoProject = (photoProject) => {
    localStorage.setItem("photoProject", JSON.stringify(photoProject));
  };

  const formatTitle = (title) => {
    const newTitle = title.split(" ").join("-");
    return newTitle.toLowerCase();
  };

  const loadPhotoProjects = () => {
    return photoProjectList.map((photoProject) => (
      <div key={photoProject.id}>
        <Link
          onClick={() => storePhotoProject(photoProject)}
          to={{
            pathname: `/photography/${formatTitle(photoProject.title)}`,
            photoProject: photoProject,
          }}
        >
          <img
            src={photoProject.thumbnailImage}
            alt={photoProject.title}
            className="photo-project"
          />
        </Link>
      </div>
    ));
  };

  return (
    <div className="photo-project-section">
      {!imagesPreloaded ? (
        <div className="loading-spinner-container">
          <LoadingSpinner />
          <p className="photo-title">Loading photo projects...</p>
        </div>
      ) : (
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 500, duration: 1000 }}
        >
          {(props) => <div style={props}>{loadPhotoProjects()}</div>}
        </Spring>
      )}
    </div>
  );
};
