import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {useHistory} from "react-router-dom";

import Spinner from "../UI/Spinner/Spinner";
import './FullPost.css';

const FullPost = ({match}) => {
    const [fullPost, setFullPost] = useState(null);
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const post = await getOnePost(match.params.id);
                setFullPost(post);
            } finally {
                setLoading(false);
            }
        })();
    }, [match.params.id]);

    const getOnePost = async (id) => {
        const response = await axiosApi.get('posts/' + id + '.json');
        return response.data;
    };

    const removePost = async () => {
        setLoading(true);
        await axiosApi.delete('posts/' + match.params.id + '.json');
        history.replace('/posts');
    };

    const handleEditPost = () => {
        history.replace('/posts/' + match.params.id + '/edit', {
            id: match.params.id,
            title: fullPost.title,
            text: fullPost.text
        });
    };

    return (
        <>
            {loading
                ?
                <Spinner />
                :
                <div className="Container">
                    <div className="FullPost">
                        <p>Created on: {fullPost?.date}</p>
                        <h3>{fullPost?.title}</h3>
                        <div className="PostBody">{fullPost?.text}</div>
                        <button
                            onClick={handleEditPost}
                        >
                            Edit
                        </button>
                        <button
                            onClick={removePost}
                            disabled={loading}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            }
        </>
    );
};

export default FullPost;