export const Recent = (props) => {
    let recentPosts = props.posts;

    const recentPostsMapper = () => {
        if(recentPosts){
            return recentPosts.map((post, index) => {
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
            return <h2>no recent activity</h2>
        }
    }

    return (
        <div>
             {recentPostsMapper()}
        </div>
    )
}
