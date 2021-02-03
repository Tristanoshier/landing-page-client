import { useEffect, useState } from 'react';

export const Blog = (props) => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/site/blog`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((res) => res.json())
            .then((posts) => {
                setBlogPosts(posts);
            })
    }, [])

    const blogMapper = () => {
        return blogPosts.map((post, index) => {
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
    }

    return (
        <div className="blog">
            <p id="main-header">Blog</p>
            {blogMapper()}
        </div>
    )
}
