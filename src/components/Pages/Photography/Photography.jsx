import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spring } from "react-spring/renderprops";
import photoProjects from "../../../Data/photoProjects";

export const Photography = () => {
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
        <p className="photo-project-title">{photoProject.title}</p>
      </div>
    ));
  };

  return (
    <div className="photo-project-section">
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 500, duration: 1000 }}
      >
        {(props) => <div style={props}>{loadPhotoProjects()}</div>}
      </Spring>
    </div>
  );
};
