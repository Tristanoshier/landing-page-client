import { useState, useEffect } from 'react';
import { Input, Form } from 'reactstrap';

export const Search = (props) => {
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [topic, setTopic] = useState('');
    const [noResults, setNoResults] = useState(false);

    const handleSubmit = (e) => e.preventDefault();


    useEffect(() => {
        filterSearch();
    }, [topic])

    const filterSearch = () => {
        let entry = document.getElementById('search').value.toLowerCase();
        if (entry === '') {
            setNoResults(false)

            if (topic === 'music') {
                setFilteredPosts(props.musicPosts);
            } else if (topic === 'movies') {
                setFilteredPosts(props.moviePosts);
            } else if (topic === 'programming') {
                setFilteredPosts(props.programmingPosts);
            } else {
                setFilteredPosts([]);
            }

        } else {
            let filtered;
            if (topic === 'music') {
                filtered = props.musicPosts.filter(post => {
                    if (post.title.toLowerCase().includes(entry.trim())) {
                        return post;
                    } else {
                        return ''
                    }
                })
            } else if (topic === 'movies') {
                filtered = props.moviePosts.filter(post => {
                    if (post.title.toLowerCase().includes(entry.trim())) {
                        return post
                    } else {
                        return ''
                    }
                })

            } else if (topic === 'programming') {
                filtered = props.programmingPosts.filter(post => {
                    if (post.title.toLowerCase().includes(entry.trim())) {
                        return post
                    } else {
                        return ''
                    }
                })

            } else {
                filtered = props.posts.filter(post => {
                    if (post.title.toLowerCase().includes(entry.trim())) {
                        return post
                    } else {
                        return ''
                    }
                })
            }
            setFilteredPosts(filtered);
        }
    }


    const postMapper = () => {
        let posts;
        filteredPosts.length === 0 ? posts = props.posts :
            posts = filteredPosts;
        if (noResults === true) {
            return (
                <h2 className={props.darkMode ? "about-text-dark" : "about-text-light"}>
                    no results found
                </h2>
            )
        } else {
            if (posts.length > 0) {
                return posts.map((post, index) => {
                    return (
                        <div key={index}>
                            <h2 className={props.darkMode ? "sub-heading-dark" : "sub-heading-light"}>- {post.title} -</h2>
                            <h5>{post.createdAt}</h5>
                            <p className={props.darkMode ? "about-text-dark" : "about-text-light"}>
                                {post.body}
                            </p>
                        </div>
                    )
                })
            } else {
                return (
                    <h2 className={props.darkMode ? "about-text-dark" : "about-text-light"}>
                        Nothing is currently posted
                    </h2>
                )
            }
        }
    }

    const chooseTopic = (e) => {
        setTopic(e.target.value);
        filterSearch();
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Input type='select' name="topic" value={topic} onChange={(e) => chooseTopic(e)} >
                    <option value="">All</option>
                    <option value="programming">Programming</option>
                    <option value="music">Music</option>
                    <option value="movies">Movies</option>
                </Input>
                <input onChange={filterSearch} id="search" type="text" placeholder="Search by title" />
            </Form>
            {postMapper()}
        </div>
    )
}
