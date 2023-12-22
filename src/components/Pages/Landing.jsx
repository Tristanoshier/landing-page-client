import React, { useEffect, useState } from "react";
import { Spring } from "react-spring/renderprops";
const Landing = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setIsMobile(true);
    }
  }, []);
  return (
    <section className="landing-section">
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 500, duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            {!isMobile ? (
              <div className="landing-container">
                <video
                  className="landing-video"
                  autoplay="autoplay"
                  loop="loop"
                  muted
                  defaultMuted
                  playsinline
                  oncontextmenu="return false;"
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
              <div className="landing-container-mobile">
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
            ) : (
              <></>
            )}
          </div>
        )}
      </Spring>
    </section>
  );
};

export default React.memo(Landing);
