import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {useHistory} from "react-router-dom";

import Spinner from "../../components/UI/Spinner/Spinner";
import Post from "../../components/Post/Post";

const HomePage = () => {
    const [posts, setPosts] = useState('');
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    useEffect(() => {
        (async () => {
            setLoading(true);

            try {
                const posts = await getPosts();
                setPosts(posts);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const getPosts = async () => {
        const response = await axiosApi.get('/posts.json');
        return response.data;
    };

    return (
        <div className="Container">
            {loading
                ?
                <Spinner />
                :
                posts
                    ?
                    Object.keys(posts).map(key => (
                        <Post
                            key={key}
                            date={posts[key].date}
                            title={posts[key].title}
                            onClick={() => history.push('/posts/' + key)}
                        />
                    ))
                    :
                    <h3>No posts yet</h3>
            }
        </div>
    );
};

export default HomePage;