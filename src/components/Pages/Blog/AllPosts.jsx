import React, { useState, useEffect } from "react";
import { FilterPosts } from "./FilterPosts";
import { Spring } from "react-spring/renderprops";
// import backToTop from "../../Shared/BackToTop";
import { LoadingSkeleton } from "../../Shared/LoadingSkeleton";
import allPosts from '../../../Data/Post';

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [musicPosts, setMusicPosts] = useState([]);
  const [moviePosts, setMoviePosts] = useState([]);
  const [programmingPosts, setProgrammingPosts] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    setPosts(allPosts);

    if (posts.length >= 6) {
      setShowBackToTop(true);
    }

    setMusicPosts(allPosts.filter((post) => post.topic === "music"));
    setMoviePosts(allPosts.filter((post) => post.topic === "movies"));
    setProgrammingPosts(
      allPosts.filter((post) => post.topic === "programming")
    );
    setBlogPosts(allPosts.filter((post) => post.topic === "blog"));

    setIsLoading(false);
  }, []);

  return (
    <div>
      <div>
        <div className="blog">
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 500, duration: 1000 }}
          >
            {(props) => (
              <div style={props}>
                <div className="blog-header">
                  <p className="page-header">All Blog Posts</p>
                </div>
              </div>
            )}
          </Spring>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 1000, duration: 1000 }}
          >
            {(props) => (
              <div style={props}>
                {!isLoading ? (
                  <>
                    <div className="all-blog-container">
                      <FilterPosts
                        posts={allPosts}
                        musicPosts={musicPosts}
                        moviePosts={moviePosts}
                        programmingPosts={programmingPosts}
                        blogPosts={blogPosts}
                        isLoading={isLoading}
                      />
                    </div>
                    {/* {showBackToTop ? (
                <button
                  className="landing-btn back-to-top"
                  onClick={() => backToTop()}
                >
                  Back to top
                </button>
              ) : (
                <></>
              )} */}
                  </>
                ) : (
                  <div className="loading-skeletons-wrapper">
                    <LoadingSkeleton numberOfCards={6} />
                  </div>
                )}
              </div>
            )}
          </Spring>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AllPosts);
