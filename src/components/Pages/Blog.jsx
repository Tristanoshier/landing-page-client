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
        if (blogPosts.length > 0) {
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
        } else {
            return (
                <h2 className={props.darkMode ? "about-text-dark" : "about-text-light"}>
                    currently no blogs have been posted
                </h2>
            )
        }
    }

    return (
        <div className="blog">
            <p id="main-header">Blog</p>
            <p className={props.darkMode ? "about-text-dark" : "about-text-light"}>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
            </p>
            {blogMapper()}
        </div>
    )
}
