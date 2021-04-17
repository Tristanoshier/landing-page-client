import { useEffect, useState } from 'react';
import postMapper from '../../Shared/PostMapper';
import APIURL from '../../../Evironment/environment';

export const Recent = (props) => {
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        fetch(`${APIURL}/site/interests?page=1&limit=3`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((res) => res.json())
            .then((posts) => {
                setRecentPosts(posts);
                props.setIsLoading(false);
            }).catch(() => alert('Sorry, something went wrong. Check your network connection or try again in a few minutes.'))
    }, [props])
    return (
        <>
            {props.isLoading ?
                <div className="loader"></div>
                : postMapper(recentPosts, 'interests', null, props.darkMode)}
        </>
    )
}
