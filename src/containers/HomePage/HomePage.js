import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";

const HomePage = () => {
    const [posts, setPosts] = useState('');
    const [loading, setLoading] = useState(false);

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
        <div>
            Home
        </div>
    );
};

export default HomePage;