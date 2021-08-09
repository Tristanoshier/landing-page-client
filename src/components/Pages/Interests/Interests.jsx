import { useEffect, useState } from 'react';
import Tabs from 'antd/lib/tabs';
import { Recent } from './Recent';
import { Search } from './Search';
import { Projects } from './Projects';
import APIURL from '../../../Evironment/environment';

export const Interests = (props) => {
    const { TabPane } = Tabs;
    const [posts, setPosts] = useState([]);
    const [musicPosts, setMusicPosts] = useState([]);
    const [moviePosts, setMoviePosts] = useState([]);
    const [programmingPosts, setProgrammingPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${APIURL}/site/interests/search`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
                setMusicPosts(posts.filter(x => x.topic === 'music'));
                setMoviePosts(posts.filter(x => x.topic === 'movies'));
                setProgrammingPosts(posts.filter(x => x.topic === 'programming'));
                setIsLoading(false);
            }).catch(() => alert('Sorry, something went wrong. Check your network connection or try again in a few minutes.'))
    }, [])

    const InterestCategoryTabs = () => (
        <Tabs className={props.colorMode('ant-tabs', 'ant-tabs light')} defaultActiveKey='1'>
            <TabPane tab='Recent' key='1'>
                <Recent 
                    posts={posts} 
                    darkMode={props.darkMode}
                    colorMode={props.colorMode} 
                    isLoading={isLoading}
                    setIsLoading={setIsLoading} />
            </TabPane>
            <TabPane tab='Search' key='2'>
                <Search
                    posts={posts}
                    musicPosts={musicPosts}
                    moviePosts={moviePosts}
                    programmingPosts={programmingPosts}
                    darkMode={props.darkMode}
                    colorMode={props.colorMode}
                    isLoading={isLoading} />
            </TabPane>
            <TabPane tab='Projects' key='3'>
                <Projects 
                    darkMode={props.darkMode}
                    colorMode={props.colorMode}
                />
            </TabPane>
        </Tabs>
    );

    return (
        <div>
            <div className='blog'>
                <p id='main-header'>My Interests</p>
                <p className={props.colorMode('card-text', 'card-text light')}>
                I spend a lot of my time working on improving my programming skills, studying algorithms and data structures, building projects with friends, and collecting records for my vinyl collection. This is the place where I talk about what I'm working on, listening to, reading, and review recent movies I've watched. Feel free to read anything that interests you!
            </p>
                {isLoading ?
                    <div className="loader"></div>
                    : InterestCategoryTabs()}
            </div>
        </div>
    )
}
