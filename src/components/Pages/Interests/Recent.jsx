import postMapper from '../../Shared/PostMapper';

export const Recent = (props) => {
    let recentPosts = props.posts.length < 3 ? props.posts : props.posts.slice(0, 3);
    return (
        <>
            {postMapper(recentPosts, 'interests', props.darkMode)}
        </>
    )
}
