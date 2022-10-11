import { withRouter } from "react-router-dom";
import { FocusedProjectMobile } from "./FocusedProjectMobile";
import { Spring } from "react-spring/renderprops";

const FocusedProject = (props) => {
  const project = props.location.project;
  let storedProject = JSON.parse(localStorage.getItem("project"));
  let focusedProject = project === undefined ? storedProject : project;

  const focusedProjectMapper = () => {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 500, duration: 1000 }}
      >
        {(props) => (
          <div style={props}>
            <div className="focused-project-container">
              <div className="image-section">
                <div className="project-title">{focusedProject?.title}</div>
                <div className="carousel-wrapper">
                  <div className="carousel-container">
                    <div className="carousel">
                      <div
                        className="image-one"
                        style={{
                          backgroundImage: `url(${focusedProject.images[0].path})`,
                        }}
                      ></div>
                      <div
                        className="image-two"
                        style={{
                          backgroundImage: `url(${focusedProject.images[1].path})`,
                        }}
                      ></div>
                      <div
                        className="image-three"
                        style={{
                          backgroundImage: `url(${focusedProject.images[2].path})`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info-section">
                <div
                  className="project-description"
                  dangerouslySetInnerHTML={{
                    __html: focusedProject?.description,
                  }}
                ></div>
                {focusedProject?.link === "not-live" ? (
                  <></>
                ) : (
                  <a
                    href={focusedProject?.link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <button className="landing-btn submit-btn see-live">
                      Visit Site
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  };

  return (
    <div className="focused-project">
      {focusedProjectMapper()}
      {<FocusedProjectMobile focusedProject={focusedProject} />}
    </div>
  );
};

export default withRouter(FocusedProject);
