import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const linkedInURL = "https://www.linkedin.com/in/tristanoshier/";
  const githubURL = "https://github.com/Tristanoshier";

  return (
    <div className="footer">
      <div className="social-links">
      <div className="follow-me">Follow Me</div>
        <span>
          <a className="social-link" href={linkedInURL} target="_linkedin">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </span>
        <span>
          <a className="social-link" href={githubURL} target="_github">
            <FontAwesomeIcon icon={faGithubSquare} size="2x" />
          </a>
        </span>
      </div>
      <div className="copyright">© Tristan Oshier 2023</div>
    </div>
  );
};

export default React.memo(Footer);
