import React from "react";
import { withRouter } from "react-router-dom";
import { Spring } from "react-spring/renderprops";
import { LoadingSpinner } from "../../Shared/LoadingSpinner";
import useImagePreloader from "../../Hooks/UseImagePreloader";
import photos from "../../../Data/eliAsmaraPhotos";
import Gallery from "react-photo-gallery";

const preloadSrcList = [...photos.map((photo) => photo.path)];

const eliAsmaraPhotos = [
  {
    src: "/images/asmaranyc-08.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/asmaranyc-02.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/asmaranyc-01.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/asmaranyc-07.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/asmaranyc-05.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/asmaranyc-09.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/asmaranyc-10.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/asmaranyc-03.jpg",
    width: 4,
    height: 3,
  },
];

const EliAsmara = () => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);

  const loadImages = () => {
    return <Gallery photos={eliAsmaraPhotos} direction={"column"} />;
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

export default React.memo(withRouter(EliAsmara));
