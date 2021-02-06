import { useState, useEffect } from 'react';
import { Input, Form } from 'reactstrap';

export const Search = (props) => {
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [topic, setTopic] = useState('');
    
    useEffect(() => {
        filterSearch();
    }, [topic, searchTerm])

    const handleSubmit = (e) => e.preventDefault();

    const filterSearch = () => {

        if (topic === 'music') {
            setFilteredPosts(props.musicPosts);
        } else if (topic === 'movies') {
            setFilteredPosts(props.moviePosts);
        } else if (topic === 'programming') {
            setFilteredPosts(props.programmingPosts);
        } else if (topic === '') {
            setFilteredPosts(props.posts);
        }

        let filtered;
        if (topic === 'music') {
            filtered = props.musicPosts.filter(post => {
                if (searchTerm === '') {
                    return props.musicPosts;
                } else if (post.title.toLowerCase().includes(searchTerm.toLowerCase().trim())) {
                    return post;
                } return null;
            })
        } else if (topic === 'movies') {
            filtered = props.moviePosts.filter(post => {
                if (searchTerm === '') {
                    return props.moviePosts;
                } else if (post.title.toLowerCase().includes(searchTerm.toLowerCase().trim())) {
                    return post;
                } return null;
            })
        } else if (topic === 'programming') {
            filtered = props.programmingPosts.filter(post => {
                if (searchTerm === '') {
                    return props.programmingPosts;
                } else if (post.title.toLowerCase().includes(searchTerm.toLowerCase().trim())) {
                    return post;
                } return null;
            })
        } else if (topic === '') {
            filtered = props.posts.filter(post => {
                if (searchTerm === '') {
                    return props.posts;
                } else if (post.title.toLowerCase().includes(searchTerm.toLowerCase().trim())) {
                    return post;
                } return null;
            })
        }
        setFilteredPosts(filtered);
    }


    const postMapper = () => {
        if (filteredPosts.length > 0) {
            return filteredPosts.map((post, index) => {
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
                    no results found
                </h2>
            )

        }
    }

    const chooseTopic = (e) => {
        setTopic(e.target.value);
    }

    const userSearch = (e) => {
        setSearchTerm(e.target.value);
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
                <input onChange={(e) => userSearch(e)} id="search" type="text" placeholder="Search by title" />
            </Form>
            {postMapper()}
        </div>
    )
}
