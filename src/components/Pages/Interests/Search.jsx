import { useState, useEffect } from 'react';
import { Input, Form } from 'reactstrap';
import postMapper from '../../Shared/PostMapper';

export const Search = (props) => { 
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [topic, setTopic] = useState('');

    const handleSubmit = (e) => e.preventDefault();

    useEffect(() => {
        const filterSearch = () => {
            topic === 'music' ? setFilteredPosts(props.musicPosts) : 
            topic === 'movies' ? setFilteredPosts(props.moviePosts) :
            topic === 'programming' ? setFilteredPosts(props.programmingPosts)
            : setFilteredPosts(props.posts);

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
        filterSearch();
    }, [topic, searchTerm, props.musicPosts, props.moviePosts, props.posts, props.programmingPosts])

    const chooseTopic = (e) => {
        setTopic(e.target.value);
    }

    const userSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div>
            <Form className='search-form' onSubmit={handleSubmit}>
                <Input className={props.darkMode ? 'topic-filter' : 'topic-filter light'} type='select' name='topic' value={topic} onChange={(e) => chooseTopic(e)} >
                    <option value=''>All</option>
                    <option value='programming'>Programming</option>
                    <option value='music'>Music</option>
                    <option value='movies'>Movies</option>
                </Input>
                <input className={props.darkMode ? 'searchbar' : 'searchbar light'} onChange={(e) => userSearch(e)} id='search' type='text' placeholder='Search...' autoComplete='off' />
            </Form>
            {postMapper(filteredPosts, 'interests', props.darkMode)}
        </div>
    )
}
