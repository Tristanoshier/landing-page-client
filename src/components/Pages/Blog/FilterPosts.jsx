import { useState, useEffect } from "react";
import postMapper from "../../Shared/PostMapper";

export const FilterPosts = (props) => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [topic, setTopic] = useState("");

  useEffect(() => {
    const filterSearch = () => {
      topic === "music"
        ? setFilteredPosts(props.musicPosts)
        : topic === "movies"
        ? setFilteredPosts(props.moviePosts)
        : topic === "programming"
        ? setFilteredPosts(props.programmingPosts)
        : topic === "blog"
        ? setFilteredPosts(props.blogPosts)
        : setFilteredPosts(props.posts);
    };
    filterSearch();
  }, [
    topic,
    props.musicPosts,
    props.moviePosts,
    props.posts,
    props.programmingPosts,
    props.blogPosts,
    filteredPosts.length,
  ]);

  const chooseTopic = (topic) => {
    setTopic(topic);
  };

  return (
    <div className="search-page">
      <div className="filter-form">
        <div className="filter-options">
          <button
            className={topic === "" ? "filter-option active" : "filter-option"}
            onClick={() => chooseTopic("")}
          >
            All
          </button>
          <button
            className={topic === "blog" ? "filter-option active" : "filter-option"}
            onClick={() => chooseTopic("blog")}
          >
            Life
          </button>
          <button
            className={topic === "programming" ? "filter-option active" : "filter-option"}
            onClick={() => chooseTopic("programming")}
          >
            Programming
          </button>
          <button
            className={topic === "music" ? "filter-option active" : "filter-option"}
            onClick={() => chooseTopic("music")}
          >
            Music
          </button>
          <button
            className={topic === "movies" ? "filter-option active" : "filter-option"}
            onClick={() => chooseTopic("movies")}
          >
            Movies
          </button>
        </div>
      </div>
      <div className="blog-container all">
        {postMapper(filteredPosts, null)}
      </div>
    </div>
  );
};
