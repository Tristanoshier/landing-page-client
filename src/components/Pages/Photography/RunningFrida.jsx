import React from "react";
import { withRouter } from "react-router-dom";
import { Spring } from "react-spring/renderprops";
import { LoadingSpinner } from "../../Shared/LoadingSpinner";
import useImagePreloader from "../../Hooks/UseImagePreloader";
import photos from "../../../Data/runningFridaPhotos";
import Gallery from "react-photo-gallery";

const preloadSrcList = [...photos.map((photo) => photo.path)];

const runningFridaPhotos = [
  {
    src: "/images/runningFrida-9.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/runningFrida-3.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/runningFrida-2.jpg",
    width: 4,
    height: 3,
  },

  {
    src: "/images/runningFrida-4.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/runningFrida-5.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/runningFrida-1.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/runningFrida-6.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/runningFrida-7.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/runningFrida-8.jpg",
    width: 3,
    height: 4,
  },
];

const RunningFrida = () => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);

  const loadImages = () => {
    return <Gallery photos={runningFridaPhotos} direction={"column"} />;
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

export default React.memo(withRouter(RunningFrida));
