import { useState, useEffect } from "react";
import convertDate from '../../Shared/DateConverter';
import { Link } from "react-router-dom";

export const FilterProjects = (props) => {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    const filterSearch = () => {
      type === "portfolio"
        ? setFilteredProjects(props.portfolioProjects)
        : type === "shop"
        ? setFilteredProjects(props.storeProjects)
        : type === "other"
        ? setFilteredProjects(props.otherProjects)
        : setFilteredProjects(props.projects);
    };
    filterSearch();
  }, [
    type,
    props.portfolioProjects,
    props.storeProjects,
    props.projects,
    props.otherProjects,
    filteredProjects.length,
  ]);

  const chooseType = (type) => {
    setType(type);
  };

  const saveProjectInLocalStorage = (project) => {
    localStorage.setItem("project", JSON.stringify(project));
  };

  const projectMapper = (projects) => {
    return projects.map((project, index) => {
      return (
        <div className="container" key={index}>
          <div
            className="card"
            style={{ backgroundImage: `url(${project.thumbnailpath})` }}
          >
            <div className="contentBx">
              <h2>{project.title}</h2>
              <div className="color">
                <h3>Date Created :</h3>
                <span>{convertDate(project.createdAt)}</span>
              </div>
              <div className="size">
                <h3>Project Category :</h3>
                <span>{project.projecttype}</span>
              </div>
              <Link
                onClick={() => saveProjectInLocalStorage(project)}
                className="card-link"
                to={{
                  pathname: `/project-details/${project.title}`,
                  project: project,
                }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="search-page">
      <div className="filter-form">
        <div className="filter-options">
          <button
            className={type === "" ? "filter-option active" : "filter-option"}
            onClick={() => chooseType("")}
          >
            All
          </button>
          <button
            className={type === "portfolio" ? "filter-option active" : "filter-option"}
            onClick={() => chooseType("portfolio")}
          >
            Portfolio
          </button>
          <button
            className={type === "shop" ? "filter-option active" : "filter-option"}
            onClick={() => chooseType("shop")}
          >
            Store
          </button>
          <button
            className={type === "other" ? "filter-option active" : "filter-option"}
            onClick={() => chooseType("other")}
          >
            Other
          </button>
        </div>
      </div>
      <div className="project-container all">
        {projectMapper(filteredProjects)}
      </div>
    </div>
  );
};
