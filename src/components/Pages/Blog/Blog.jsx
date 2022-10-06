import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import APIURL from "../../../Evironment/environment";
import { LoadingSkeleton } from "../../Shared/LoadingSkeleton";
import postMapper from "../../Shared/PostMapper";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${APIURL}/site/post/favorites`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
        setIsLoading(false);
      })
      .catch(() =>
        alert(
          "Sorry, something went wrong. Check your network connection or try again in a few minutes."
        )
      );
  }, []);

  return (
    <div id="blog" className="blog">
      <p className="page-header">Interests & Advice</p>
      <>
        {!isLoading ? (
          <>
            <div className="blog-container"> {postMapper(posts, null)}</div>
            {posts.length >= 3 ? (
              <div className="btn-container">
                <Link className="btn-link" to="/Blog">
                  <button className="landing-btn browse-all">Browse All</button>
                </Link>
              </div>
            ) : (
              <></>
            )}
          </>
        ) : (
          <LoadingSkeleton numberOfCards={3} />
        )}
      </>
    </div>
  );
};

export default React.memo(Blog);
