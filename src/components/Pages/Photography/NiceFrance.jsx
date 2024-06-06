import React from "react";
import { withRouter } from "react-router-dom";
import { Spring } from "react-spring/renderprops";
import { LoadingSpinner } from "../../Shared/LoadingSpinner";
import useImagePreloader from "../../Hooks/UseImagePreloader";
import photos from "../../../Data/niceFrancePhotos";
import Gallery from "react-photo-gallery";

const preloadSrcList = [...photos.map((photo) => photo.path)];

const niceFrancePhotos = [
  {
    src: "/images/NiceFrance-09.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/NiceFrance-19.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/NiceFrance-15.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/NiceFrance-25.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/NiceFrance-10.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/NiceFrance-23.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/NiceFrance-21.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/NiceFrance-01.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/NiceFrance-02.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/NiceFrance-13.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/NiceFrance-18.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/NiceFrance-06.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/NiceFrance-07.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/NiceFrance-08.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/NiceFrance-11.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/NiceFrance-12.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/NiceFrance-24.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/NiceFrance-20.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/NiceFrance-14.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/NiceFrance-03.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/NiceFrance-22.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/NiceFrance-16.jpg",
    width: 4,
    height: 3,
  },
];

const NiceFrance = () => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);

  const loadImages = () => {
    return <Gallery photos={niceFrancePhotos} direction={"column"} />;
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

export default React.memo(withRouter(NiceFrance));
