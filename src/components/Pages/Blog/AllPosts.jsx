import React, { useState, useEffect } from "react";
import { FilterPosts } from "./FilterPosts";
import APIURL from "../../../Evironment/environment";
// import backToTop from "../../Shared/BackToTop";
import { LoadingSkeleton } from "../../Shared/LoadingSkeleton";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [musicPosts, setMusicPosts] = useState([]);
  const [moviePosts, setMoviePosts] = useState([]);
  const [programmingPosts, setProgrammingPosts] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    fetch(`${APIURL}/site/posts`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);

        if (posts.length >= 6) {
          setShowBackToTop(true);
        }

        setMusicPosts(posts.filter((post) => post.topic === "music"));
        setMoviePosts(posts.filter((post) => post.topic === "movies"));
        setProgrammingPosts(
          posts.filter((post) => post.topic === "programming")
        );
        setBlogPosts(posts.filter((post) => post.topic === "blog"));
        setIsLoading(false);
      })
      .catch(() =>
        alert(
          "Sorry, something went wrong. Check your network connection or try again in a few minutes."
        )
      );
  }, []);

  return (
    <div>
      <div>
        <div className="blog">
          <div className="blog-header">
            <p className="page-header">All Blog Posts</p>
          </div>
          {!isLoading ? (
            <>
              <div className="all-blog-container">
                <FilterPosts
                  posts={posts}
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
      </div>
    </div>
  );
};

export default React.memo(AllPosts);