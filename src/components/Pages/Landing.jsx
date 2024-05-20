import React from "react";
import { Spring } from "react-spring/renderprops";
import useImagePreloader from "../Hooks/UseImagePreloader";
import { LoadingSpinner } from "../Shared/LoadingSpinner";
import Gallery from "react-photo-gallery";

const preloadSrcList = [
  "/images/profilePicture.jpg",
];

const photos = [
  {
    src: "/images/frida-07.jpg",
    width: 8,
    height: 6,
  },
  {
    src: "/images/NiceFrance-19.JPG",
    width: 4,
    height: 3,
  },
  {
    src: "/images/PAUL_INSTA-15.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/NiceFrance-21.JPG",
    width: 3,
    height: 4,
  },
  {
    src: "/images/duina-04.jpg",
    width: 4,
    height: 3,
  },
 
  {
    src: "/images/frida-11.jpg",
    width: 3,
    height: 4,
  },
  {
    src: "/images/duina-08.jpg",
    width: 3,
    height: 4,
  },
];

const Landing = () => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);

  return (
    <section className="landing-section">
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
              <div className="landing-container">
                <Gallery photos={photos} direction={"column"} />
              </div>
            </div>
          )}
        </Spring>
      )}
    </section>
  );
};

export default React.memo(Landing);
