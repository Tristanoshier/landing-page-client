import { useEffect, useState } from 'react';
import Tabs from 'antd/lib/tabs';
import { Recent } from './Recent';
import { Search } from './Search';
import { Projects } from './Projects';
import backToTop from '../../Shared/BackToTop';

export const Interests = (props) => {
    const { TabPane } = Tabs;
    const [posts, setPosts] = useState([]);
    const [musicPosts, setMusicPosts] = useState([]);
    const [moviePosts, setMoviePosts] = useState([]);
    const [programmingPosts, setProgrammingPosts] = useState([]);
    const getPostsURL = `http://localhost:3001/site/interests`;

    useEffect(() => {
        fetch(getPostsURL, {
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
            })

    }, [getPostsURL])

    const InterestCategoryTabs = () => (
        <Tabs className={props.colorMode('ant-tabs', 'ant-tabs light')} defaultActiveKey='1'>
            <TabPane tab='Recent' key='1'>
                <Recent posts={posts} darkMode={props.darkMode} />
            </TabPane>
            <TabPane tab='Search' key='2'>
                <Search
                    posts={posts}
                    musicPosts={musicPosts}
                    moviePosts={moviePosts}
                    programmingPosts={programmingPosts}
                    darkMode={props.darkMode} />
            </TabPane>
            <TabPane tab='Projects' key='3'>
                <Projects darkMode={props.darkMode} />
            </TabPane>
        </Tabs>
    );

    return (
        <>
            <div className='blog'>
                <p id='main-header'>Interests</p>
                <p className={props.colorMode('about-text-dark', 'about-text-light')}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
            </p>
                {InterestCategoryTabs()}
            </div>
            <button className={props.colorMode('back-to-top-btn', 'back-to-top-btn light')} onClick={() => backToTop()}>Back to top</button>
        </>
    )
}
