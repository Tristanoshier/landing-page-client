import React from "react";
import { withRouter } from "react-router-dom";
import { Spring } from "react-spring/renderprops";
import { LoadingSpinner } from "../../Shared/LoadingSpinner";
import useImagePreloader from "../../Hooks/UseImagePreloader";
import photos from "../../../Data/paulPhotos";
import Gallery from "react-photo-gallery";

const preloadSrcList = [...photos.map((photo) => photo.path)];

const paulPhotos = [
  {
    src: "/images/PAUL_INSTA-03.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/PAUL_INSTA-01.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/PAUL_INSTA-15.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/PAUL_INSTA-02.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/PAUL_INSTA-05.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/PAUL_INSTA-06.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/PAUL_INSTA-07.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/PAUL_INSTA-08.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/PAUL_INSTA-09.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/PAUL_INSTA-10.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/PAUL_INSTA-11.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/PAUL_INSTA-12.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/PAUL_INSTA-14.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/PAUL_INSTA-16.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/PAUL_INSTA-18.jpg",
    width: 3,
    height: 4,
  },
];

const Paul = () => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);

  const loadImages = () => {
    return <Gallery photos={paulPhotos} direction={"column"} />;
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
