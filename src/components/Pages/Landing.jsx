import React, { useEffect, useState } from "react";
import { Spring } from "react-spring/renderprops";
import useImagePreloader from "../Hooks/UseImagePreloader";
import { LoadingSpinner } from "../Shared/LoadingSpinner";
const preloadSrcList = [
  "/images/inMyRoom-1.jpg",
  "/images/inMyRoom-2.jpg",
  "/images/inMyRoom-4.jpg",
];

const Landing = () => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setIsMobile(true);
    }
  }, []);
  return (
    <section className="landing-section">
      {!isMobile ? (
        <div className="landing-container">
          <video
            className="landing-video"
            autoPlay="autoplay"
            loop="loop"
            muted
            defaultmuted="true"
            playsInline
            onContextMenu="return false;"
            preload="auto"
            id="myVideo"
          >
            <source src="/video/landing_vid.mp4" type="video/mp4" />
          </video>
        </div>
      ) : (
        <></>
      )}
      {isMobile ? (
        !imagesPreloaded ? (
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
                <div className="landing-container-mobile">
                  <div className="title-section">
                    <div className="landing-title">TRISTAN</div>
                    <div className="landing-title">OSHIER</div>
                  </div>
                  <div className="image-section">
                    <img
                      className="landing-img"
                      src="/images/inMyRoom-1.jpg"
                      alt=""
                    />
                    <img
                      className="landing-img"
                      src="/images/inMyRoom-2.jpg"
                      alt=""
                    />
                    <img
                      className="landing-img"
                      src="/images/inMyRoom-4.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}
          </Spring>
        )
      ) : (
        <></>
      )}
    </section>
  );
};

export default React.memo(Landing);
