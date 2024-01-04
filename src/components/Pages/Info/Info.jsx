import React from "react";
import { Spring } from "react-spring/renderprops";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import useImagePreloader from "../../Hooks/UseImagePreloader";
import { LoadingSpinner } from "../../Shared/LoadingSpinner";
const preloadSrcList = ["/images/profilePicture.jpg"];

const Info = () => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);
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
              <div className="info-section">
                <div className="portrait-section">
                  <img
                    className="self-portrait"
                    src="/images/profilePicture.jpg"
                    alt="self portrait"
                  />
                </div>
                <div className="bio-section">
                  <div>
                    Tristan Oshier is a software engineer and photographer based
                    in New York City.
                  </div>
                  <br />
                  <div>
                    In addition to his role as a senior software engineer at
                    Crowe, he also dedicates his free time to freelancing in web
                    design and photography. For inquiries regarding website
                    development or photography services, reach out via the email
                    provided below:
                  </div>
                  <br />
                  <p>
                    <a
                      className="info-link"
                      href="mailto:tristan.oshier2000@gmail.com"
                    >
                      {" "}
                      tristan.oshier2000@gmail.com
                    </a>
                  </p>
                  <br />

                  <div>
                    If you are considering Tristan for a software engineering
                    role, please refer to his resume:{" "}
                    <a
                      className="resume-link"
                      href="/files/Tristan Oshier's Resume.pdf"
                      download
                    >
                      here
                    </a>{" "}
                    for comprehensive details. Feel free to reach out via email
                    for any further questions or discussions.
                  </div>
                  <br />
                  <div className="social-section">
                    <p>
                      <a
                        className="info-link"
                        href="https://www.instagram.com/tristanoshier/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                      </a>
                    </p>
                    <p>
                      <a
                        className="info-link"
                        href="https://www.linkedin.com/in/tristanoshier/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ marginLeft: 10 }}
                      >
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="info-section-mobile">
                <div style={{ marginTop: 100 }} className="bio-section">
                  <div>
                    Tristan Oshier is a software engineer and photographer based
                    in New York City.
                  </div>
                  <br />
                </div>
                <div className="portrait-section">
                  <img
                    className="self-portrait"
                    src="/images/profilePicture.jpg"
                    alt="self portrait"
                  />
                </div>
                <div className="bio-section">
                  <div>
                    In addition to his role as a senior software engineer at
                    Crowe, he also dedicates his free time to freelancing in web
                    design and BTS photography. For inquiries regarding website
                    development or photography services, reach out via the email
                    provided below:
                  </div>
                  <br />
                  <p>
                    <a
                      className="info-link"
                      href="mailto:tristan.oshier2000@gmail.com"
                    >
                      {" "}
                      tristan.oshier2000@gmail.com
                    </a>
                  </p>
                  <br />

                  <div>
                    If you are considering Tristan for a software engineering
                    role, please refer to his resume:{" "}
                    <a
                      className="resume-link"
                      href="/files/Tristan Oshier's Resume.pdf"
                      download
                    >
                      here
                    </a>{" "}
                    for comprehensive details. Feel free to reach out via email
                    for any further questions or discussions.
                  </div>
                  <br />
                  <br />
                  <div className="social-section">
                    <p>
                      <a
                        className="info-link"
                        href="https://www.instagram.com/tristanoshier/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                      </a>
                    </p>
                    <p>
                      <a
                        className="info-link"
                        href="https://www.linkedin.com/in/tristanoshier/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ marginLeft: 10 }}
                      >
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Spring>
      )}
    </>
  );
};

export default React.memo(Info);
