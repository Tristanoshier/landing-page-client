import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Spring } from "react-spring/renderprops";
import { LoadingSpinner } from "../../Shared/LoadingSpinner";
import useImagePreloader from "../../Hooks/UseImagePreloader";
import photos from "../../../Data/bojanaPhotos";
import Gallery from "react-photo-gallery";

const preloadSrcList = [...photos.map((photo) => photo.path)];

const bojanaPhotos = [
  {
    src: "/images/Bojana-3.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/Bojana-16.jpg",
    width: 4,
    height: 3,
  },

  {
    src: "/images/Bojana-2.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/Bojana-5.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/Bojana-1.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/Bojana-15.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/Bojana-7.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/Bojana-8.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/Bojana-9.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/Bojana-19.jpg",
    width: 4,
    height: 3,
  },

  {
    src: "/images/Bojana-11.jpg",
    width: 5,
    height: 3,
  },
  {
    src: "/images/Bojana-21.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/Bojana-12.jpg",
    width: 5,
    height: 3,
  },
  {
    src: "/images/Bojana-14.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/Bojana-18.jpg",
    width: 4,
    height: 3,
  },

  {
    src: "/images/Bojana-20.jpg",
    width: 4,
    height: 3,
  },
];

const Bojana = () => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);

  const loadImages = () => {
    return <Gallery photos={bojanaPhotos} direction={"column"} />;
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

export default React.memo(withRouter(Bojana));
