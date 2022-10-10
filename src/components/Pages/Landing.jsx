import React from "react";
import { Spring } from "react-spring/renderprops";

const Landing = () => {
  return (
    <div>
      <section className="landing-section">
        <div className="landing-title">
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 500, duration: 1000 }}
          >
            {(props) => (
              <div style={props}>
                <h1 className="headline">
                  I'm Tristan A <br /> Software Engineer
                </h1>
              </div>
            )}
          </Spring>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 1000, duration: 1000 }}
          >
            {(props) => (
              <div style={props}>
                <h4 className="sub-headline">
                  I craft high-performing, fully customizable websites that are
                  engaging,
                  <br /> brand-accurate, & people-friendly.
                </h4>
                <button
                  className="landing-btn"
                  onClick={() => window.location.replace("/#projects")}
                >
                  See My Work
                </button>
              </div>
            )}
          </Spring>
        </div>
        <div className="landing-picture">
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 1500, duration: 1000 }}
          >
            {(props) => (
              <div style={props}>
                <img
                  className="main-pic"
                  src="/images/thelandingpagepic.jpg"
                  alt="desk and remote location"
                />
              </div>
            )}
          </Spring>
        </div>
      </section>
    </div>
  );
};

export default React.memo(Landing);
