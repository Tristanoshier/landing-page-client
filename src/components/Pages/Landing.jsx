import React from "react";
import { Spring } from "react-spring/renderprops";
import useImagePreloader from "../Hooks/UseImagePreloader";
import { LoadingSpinner } from "../Shared/LoadingSpinner";
import Gallery from "react-photo-gallery";

const preloadSrcList = [
  "/images/profilePicture.jpg",
];

const landingPhotos = [
  { 
    src: "/images/dennyLV-12.jpg",
    width: 3,
    height: 4
  },
  { 
    src: "/images/frida-08.jpg",
    width: 4,
    height: 3
  },

  { 
    src: "/images/duina-07.jpg",
    width: 4,
    height: 3
  },
  { 
    src: "/images/NiceFrance-13.jpg",
    width: 4,
    height: 3
  },
]

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
                <img class="img-one" src="/images/dennyLV-12.jpg" alt="Sample photo" />
              </div>
            </div>
          )}
        </Spring>
      )}
    </section>
  );
};

export default React.memo(Landing);
