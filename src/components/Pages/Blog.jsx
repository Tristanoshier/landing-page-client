import { useEffect, useState } from "react";
import { Search } from "./Search";
import APIURL from "../../Evironment/environment";

export const Blog = props => {
  const [posts, setPosts] = useState([]);
  const [musicPosts, setMusicPosts] = useState([]);
  const [moviePosts, setMoviePosts] = useState([]);
  const [programmingPosts, setProgrammingPosts] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${APIURL}/site/interests/search`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
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
      <div className="blog">
        <p id="main-header">Blog</p>
        <p className={props.colorMode("card-text", "card-text light")}>
          Random updates on what I'm doing in life and what I've learned along the way. Thanks for stopping by!
        </p>
        {isLoading ? (
          <div className="loader"></div>
        ) : (
          <Search
            posts={posts}
            musicPosts={musicPosts}
            moviePosts={moviePosts}
            programmingPosts={programmingPosts}
            blogPosts={blogPosts}
            darkMode={props.darkMode}
            colorMode={props.colorMode}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
};
