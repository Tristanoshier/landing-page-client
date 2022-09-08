import React from "react";

export const FocusedProjectMobile = (props) => {
  return (
    <div className="focused-project-container mobile">
      <div className="info-section mobile">
        <div className="project-title">{props.focusedProject?.title}</div>
        <div
          className="project-description mobile"
          dangerouslySetInnerHTML={{
            __html: props.focusedProject?.description,
          }}
        ></div>
      </div>
      <div className="image-section">
        <div className="carousel-wrapper">
          <div className="carousel-container">
            <div className="carousel">
              <div
                className="image-one"
                style={{
                  backgroundImage: `url(${props.focusedProject.images[0].path})`,
                }}
              ></div>
              <div
                className="image-two"
                style={{
                  backgroundImage: `url(${props.focusedProject.images[1].path})`,
                }}
              ></div>
              <div
                className="image-three"
                style={{
                  backgroundImage: `url(${props.focusedProject.images[2].path})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <a href={props.focusedProject?.link} rel="noreferrer" target="_blank">
        <button className="landing-btn submit-btn see-live mobile">
          See Live
        </button>
      </a>
    </div>
  );
};
