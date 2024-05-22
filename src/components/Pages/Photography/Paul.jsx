import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Spring } from "react-spring/renderprops";
import { LoadingSpinner } from "../../Shared/LoadingSpinner";
import useImagePreloader from "../../Hooks/UseImagePreloader";
import photos from "../../../Data/paulPhotos";

const preloadSrcList = [...photos.map((photo) => photo.path)];

const Paul = () => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);

  let [sampleImages, setSampleImages] = useState([]);

  useEffect(() => {
    setSampleImages(photos);
  }, []);

  const loadImages = () => {
    return sampleImages.map((photo) => (
      <div key={photo.id}>
        <img src={photo.path} alt={photo.alt} className="photo" />
      </div>
    ));
  };

  return (
    <>
      {!imagesPreloaded ? (
        <div className="loading-spinner-container">
          <LoadingSpinner />
        </div>
      ) : (
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 500, duration: 1000 }}
        >
          {(props) => (
            <div style={props}>
              <div className="photo-section">{loadImages()}</div>
            </div>
          )}
        </Spring>
      )}
    </>
  );
};

export default React.memo(withRouter(Paul));
