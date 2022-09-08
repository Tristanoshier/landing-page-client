import React from "react";

export const LoadingSkeleton = (props) => {

  const displayLoadingSkeletons = () => {
    return [...Array(props.numberOfCards)].map((i, index) => (
      <div className="card loading" key={index}>
        <div className="image"></div>
        <div className="content">
          <h4> </h4>
          <div className="description"></div>
        </div>
      </div>
    ));
  };

  return <div className="loading-skeletons-container">{displayLoadingSkeletons()}</div>;
};
