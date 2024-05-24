import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Spring } from "react-spring/renderprops";
import { LoadingSpinner } from "../../Shared/LoadingSpinner";
import useImagePreloader from "../../Hooks/UseImagePreloader";
import photos from "../../../Data/duinaPhotos";
import Gallery from "react-photo-gallery";

const preloadSrcList = [...photos.map((photo) => photo.path)];

const duinaPhotos = [
  { 
    src: "/images/duina-09.jpg",
    width: 3,
    height: 4
  },
  { 
    src: "/images/duina-07.jpg",
    width: 4,
    height: 3
  },
  { 
    src: "/images/duina-01.jpg",
    width: 3,
    height: 4
  },
  { 
    src: "/images/duina-12.jpg",
    width: 3,
    height: 4
  },
  
  { 
    src: "/images/duina-02.jpg",
    width: 3,
    height: 4
  },
  { 
    src: "/images/duina-13.jpg",
    width: 3,
    height: 4
  },
  { 
    src: "/images/duina-03.jpg",
    width: 3,
    height: 4
  },
  { 
    src: "/images/duina-10.jpg",
    width: 3,
    height: 4
  },
  { 
    src: "/images/duina-04.jpg",
    width: 3,
    height: 4
  },
  { 
    src: "/images/duina-05.jpg",
    width: 3,
    height: 4
  },
  { 
    src: "/images/duina-06.jpg",
    width: 3,
    height: 4
  },
  { 
    src: "/images/duina-08.jpg",
    width: 3,
    height: 4
  },
  { 
    src: "/images/duina-11.jpg",
    width: 3,
    height: 4
  },
];

const Duina = () => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);

  let [sampleImages, setSampleImages] = useState([]);

  // useEffect(() => {
  //   setSampleImages(photos);
  // }, []);

  const loadImages = () => {
    return <Gallery photos={duinaPhotos} direction={"column"} />;
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

export default React.memo(withRouter(Duina));
