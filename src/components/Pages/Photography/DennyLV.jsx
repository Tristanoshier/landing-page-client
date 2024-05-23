import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Spring } from "react-spring/renderprops";
import { LoadingSpinner } from "../../Shared/LoadingSpinner";
import useImagePreloader from "../../Hooks/UseImagePreloader";
import photos from "../../../Data/dennyLVPhotos";
import Gallery from "react-photo-gallery";

const preloadSrcList = [...photos.map((photo) => photo.path)];

const dennyLVPhotos = [
  {
    src: "/images/dennyLV-12.jpg",
    width: 3,
    height: 4,
  },
   {
    src: "/images/dennyLV-20.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/dennyLV-03.jpg",
    width: 3,
    height: 4,
  },

  {
    src: "/images/dennyLV-07.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/dennyLV-01.jpg",
    width: 3,
    height: 4,
  },

  {
    src: "/images/dennyLV-11.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/dennyLV-02.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/dennyLV-09.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/dennyLV-10.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/dennyLV-08.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/dennyLV-06.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/images/dennyLV-05.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/dennyLV-14.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/dennyLV-18.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/dennyLV-19.jpg",
    width: 3,
    height: 4,
  },
 
];

const DennyLV = () => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);

  let [sampleImages, setSampleImages] = useState([]);

  // useEffect(() => {
  //   setSampleImages(photos);
  // }, []);

  const loadImages = () => {
    return <Gallery photos={dennyLVPhotos} direction={"column"} />;
    // return sampleImages.map((photo) => (
    //   <div key={photo.id}>
    //     <img src={photo.path} alt={photo.alt} className="photo" />
    //   </div>
    // ));
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

export default React.memo(withRouter(DennyLV));
