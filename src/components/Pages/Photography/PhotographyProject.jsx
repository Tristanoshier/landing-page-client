import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Spring } from "react-spring/renderprops";
import { LoadingSpinner } from "../../Shared/LoadingSpinner";
import useImagePreloader from "../../Hooks/UseImagePreloader";
import photos from "../../../Data/photos";

const preloadSrcList = [...photos.map((photo) => photo.path)];

const PhotographyProject = (props) => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);
  const project = props.location.photoProject;
  let storedProject = JSON.parse(localStorage.getItem("photoProject"));
  let focusedProject = project === undefined ? storedProject : project;

  let [sampleImages, setSampleImages] = useState([]);

  useEffect(() => {
    let filteredPhotos = photos.filter(
      (photo) => photo.categoryId === focusedProject.id
    );

    setSampleImages(filteredPhotos);
  }, []);


  const loadImages = () => {
    return sampleImages.map((photo) => (
      <div key={photo.id}>
          <img
            src={photo.path}
            alt={photo.alt}
            className="photo"
          />
        <p className="photo-title">{photo.title}</p>
        <br />
      </div>
    ));
  }

  return (
    <>
      {!imagesPreloaded ? (
        <div className="loading-spinner-container">
          <LoadingSpinner />
          <p className="photo-title">Loading images...</p>
        </div>
      ) : (
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 500, duration: 1000 }}
        >
          {(props) => (
            <div style={props}>
              <div className="photo-section">
                {loadImages()}
              </div>
            </div>
          )}
        </Spring>
      )}
    </>
  );
};

export default React.memo(withRouter(PhotographyProject));
