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
  let [imageIdx, setImageIdx] = useState(0);
  let [showControlsMessage, setShowControlsMessage] = useState(true);

  useEffect(() => {
    let filteredPhotos = photos.filter(
      (photo) => photo.categoryId === focusedProject.id
    );

    setSampleImages(filteredPhotos);
    // loadImages();
  }, []);

  // useEffect(() => {
  //   loadImage();
  // }, [imageIdx]);

  const loadImage = () => {
    return (
      <div className="photo-container">
        <div>
          <img
            src={sampleImages[imageIdx]?.path}
            alt={sampleImages[imageIdx]?.alt}
            onClick={() => showNextImage()}
            className="photo"
          />
        </div>
        <p className="photo-title">{sampleImages[imageIdx]?.title}</p>
      </div>
    );
  };

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

  function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == "37") {
      showPreviousImage();
    } else if (e.keyCode == "39") {
      showNextImage();
    }

    if (showControlsMessage) {
      setShowControlsMessage(false);
    }
  }

  const showNextImage = () => {
    if (imageIdx === sampleImages.length - 1) {
      setImageIdx(0);
    } else {
      let newIdx = imageIdx + 1;
      setImageIdx(newIdx);
    }

    if (showControlsMessage) setShowControlsMessage(false);

    if (showControlsMessage) {
      setShowControlsMessage(false);
    }
  };

  const showPreviousImage = () => {
    if (imageIdx === 0) {
      setImageIdx(sampleImages.length - 1);
    } else {
      let newIdx = imageIdx - 1;
      setImageIdx(newIdx);
    }

    if (showControlsMessage) setShowControlsMessage(false);

    if (showControlsMessage) {
      setShowControlsMessage(false);
    }
  };

  document.onkeydown = checkKey;

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
                {/* <p
                  className={
                    showControlsMessage
                      ? "controlsMessage"
                      : "controlsMessage hide"
                  }
                >
                  Click or use arrow keys to navigate
                </p> */}
              </div>
            </div>
          )}
        </Spring>
      )}
    </>
  );
};

export default React.memo(withRouter(PhotographyProject));
