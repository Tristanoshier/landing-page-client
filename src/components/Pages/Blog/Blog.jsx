import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoadingSkeleton } from "../../Shared/LoadingSkeleton";
import postMapper from "../../Shared/PostMapper";
import allPosts from '../../../Data/Post';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setPosts(allPosts);
    setIsLoading(false);
  }, []);

  return (
    <div id="blog" className="blog">
      <p className="page-header">Interests & Advice</p>
      <>
        {!isLoading ? (
          <>
            <div className="blog-container"> {postMapper(allPosts, null)}</div>
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
