import React from "react";
import { Spring } from "react-spring/renderprops";
import useImagePreloader from "../Hooks/UseImagePreloader";
import { LoadingSpinner } from "../Shared/LoadingSpinner";

const preloadSrcList = [
  "/images/profilePicture.jpg",
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
                {/* <img class="img-one" src="/images/dennyLV-12.jpg" alt="Sample photo" />
                <img class="img-two" src="/images/NiceFrance-13.jpg" alt="Sample photo" />
                <img class="img-three" src="/images/frida-02.jpg" alt="Sample photo" />
                <img class="img-four" src="/images/BojanaHome.jpg" alt="Sample photo" />
                <img class="img-five" src="/images/duina-07.jpg" alt="Sample photo" />
                <img class="img-six" src="/images/NiceFrance-15.jpg" alt="Sample photo" />
                <img class="img-seven" src="/images/PAUL_INSTA-16.jpg" alt="Sample photo" />
                <img class="img-eight" src="/images/dennyLV-20.jpg" alt="Sample photo" />
                <img class="img-nine" src="/images/frida-11.jpg" alt="Sample photo" /> */}
              </div>
            </div>
          )}
        </Spring>
      )}
    </section>
  );
};

export default React.memo(Landing);
