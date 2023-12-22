import React from "react";
import { Spring } from "react-spring/renderprops";
const Landing = () => {
  return (
    <section className="landing-section">
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 500, duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            <video className="landing-video" playsinline autoPlay loop muted>
              <source src="/video/landing_vid.mp4" type="video/mp4" />
            </video>
          </div>
        )}
      </Spring>
    </section>
  );
};

export default React.memo(Landing);
