import { useState, useEffect } from 'react';
import { Input, Form } from 'reactstrap';
import postMapper from '../../Shared/PostMapper';
import backToTop from '../../Shared/BackToTop';

export const Search = (props) => { 
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [topic, setTopic] = useState('');
    const [showBackToTop, setShowBackToTop] = useState(false);

    const handleSubmit = (e) => e.preventDefault();

    useEffect(() => {
        /* in case user mistypes first four letters */
        const checkTitle = (title, searchTerm) => {
            let pattern = searchTerm.split("").map((letter)=>{
                return `(?=.*${letter})`
            }).join("");
            let regex = new RegExp(`${pattern}`, "g")
            return title.match(regex);
        }

        const result = post => {
            let firstLetters = post.title.substring(0, 4).toLowerCase();
            let title = post.title.toLowerCase().trim();
            let entry = searchTerm.toLowerCase().trim();

            return title.includes(entry) 
            || checkTitle(firstLetters, entry) 
            || entry.includes(title);
        }
        
        const filterSearch = () => {
            topic === 'music' ? setFilteredPosts(props.musicPosts) : 
            topic === 'movies' ? setFilteredPosts(props.moviePosts) :
            topic === 'programming' ? setFilteredPosts(props.programmingPosts)
            : setFilteredPosts(props.posts);

            let filtered;
            if (topic === 'music') {
                filtered = props.musicPosts.filter(post => {
                    let results = (searchTerm === '') ? props.musicPosts : result(post);
                    return results;
                })
            } else if (topic === 'movies') {
                filtered = props.moviePosts.filter(post => {
                    let results = (searchTerm === '') ? props.moviePosts : result(post);
                    return results;
                })
            } else if (topic === 'programming') {
                filtered = props.programmingPosts.filter(post => {
                    let results = (searchTerm === '') ? props.programmingPosts : result(post);
                    return results;
                })
            } else if (topic === '') {
                filtered = props.posts.filter(post => {
                    let results = (searchTerm === '') ? props.posts : result(post);
                    return results;
                })
            }
            setFilteredPosts(filtered);
            filteredPosts.length < 3 ? setShowBackToTop(false) : setShowBackToTop(true);
        } 
        filterSearch();
    }, [topic, searchTerm, props.musicPosts, props.moviePosts, props.posts, props.programmingPosts, filteredPosts.length])

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
            {props.isLoading || !showBackToTop ? <></> :
                <button className={props.colorMode('back-to-top-btn', 'back-to-top-btn light')} onClick={() => backToTop()}>Back to top</button>}
        </div>
    )
}
