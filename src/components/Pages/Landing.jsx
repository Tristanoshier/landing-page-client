import React from "react";
import { Spring } from "react-spring/renderprops";
import useImagePreloader from "../Hooks/UseImagePreloader";
import { LoadingSpinner } from "../Shared/LoadingSpinner";

const preloadSrcList = [
  "/images/NilParis.jpg",
];

const Landing = () => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList);

  return (
    <section className="landing-section">
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
              <div className="landing-container">
                <img class="img-one" src="/images/NilParis.jpg" alt="picture of women with painted background" />
              </div>
            </div>
          )}
        </Spring>
      )}
    </section>
  );
};

export default React.memo(Landing);
