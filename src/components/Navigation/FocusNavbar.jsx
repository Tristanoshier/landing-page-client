import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const FocusNavbar = () => {
  const history = useHistory();

  const back = () => {
    history.goBack();
    localStorage.clear();
  };

  return (
    <div className="navbar-focused active">
      <button className="back-btn" onClick={() => back()}>
        <FontAwesomeIcon icon={faArrowLeft} size="2x" />
      </button>
    </div>
  );
};

export default React.memo(FocusNavbar);
