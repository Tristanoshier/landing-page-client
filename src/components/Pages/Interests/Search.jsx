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

        const checkName = (name, str) => {
            var pattern = str.split("").map((x)=>{
                return `(?=.*${x})`
            }).join("");
            var regex = new RegExp(`${pattern}`, "g")
            return name.match(regex);
        }

        const result = post => {
            let firstLetters = post.title.substring(0, 4).toLowerCase();
            return post.title.toLowerCase().includes(searchTerm.toLowerCase().trim()) 
            || checkName(firstLetters, searchTerm.toLowerCase()) 
            || searchTerm.toLowerCase().includes(post.title.toLowerCase().trim());
        }
        
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
                    } else {
                        return result(post);
                    }
                })
            } else if (topic === 'movies') {
                filtered = props.moviePosts.filter(post => {
                    if (searchTerm === '') {
                        return props.moviePosts;
                    } else {
                        return result(post);
                    }
                })
            } else if (topic === 'programming') {
                filtered = props.programmingPosts.filter(post => {
                    if (searchTerm === '') {
                        return props.programmingPosts;
                    } else {
                        return result(post);
                    }
                })
            } else if (topic === '') {
                filtered = props.posts.filter(post => {
                    if (searchTerm === '') {
                        return props.posts;
                    } else {
                        return result(post);
                    }
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
