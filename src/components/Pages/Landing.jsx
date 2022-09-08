import React from 'react';
const Landing = () => {
  return (
    <div>
      <section className="landing-section">
        <div className="landing-title">
          <h1 className="headline">I'm Tristan A Software Engineer</h1>
          <h4 className="sub-headline">
            I craft high-performing, fully customizable websites that are
            engaging, brand-accurate, & people-friendly.
          </h4>
          <button
            className="landing-btn"
            onClick={() => window.location.replace("/#projects")}
          >
            See My Work
          </button>
        </div>
        <div className="landing-picture">
          <img
            className="main-pic"
            src='/images/thelandingpagepic.jpg'
            alt="desk and remote location"
          />
        </div>
      </section>
    </div>
  );
};

export default React.memo(Landing);
