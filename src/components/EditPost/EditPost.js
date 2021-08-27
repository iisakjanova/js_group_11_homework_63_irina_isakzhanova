import React, {useState} from 'react';
import axiosApi from "../../axiosApi";
import dayjs from "dayjs";
import {useHistory} from "react-router-dom";

import Spinner from "../UI/Spinner/Spinner";
import './EditPost.css';

const EditPost = () => {
    const [post, setPost] = useState({
        title: '',
        text: '',
        date: ''
    });

    const [loading, setLoading] = useState(false);
    const [fieldError, setFieldError] = useState('');

    const history = useHistory();

    const handleFieldChange = e => {
        const {name, value} = e.target;

        setPost(prev => ({
            ...prev,
            [name]: value,
            date: dayjs().format('YYYY-MM-DD HH:mm'),
        }));
    };

    const sendCreatePostRequest = async () => {
        await axiosApi.post('/posts.json', {
            title: post.title,
            text: post.text,
            date: post.date
        });
    };

    const createPost = async e => {
        e.preventDefault();
        setLoading(true);

        try {
            if (post.title && post.text) {
                await sendCreatePostRequest();

                setPost({
                    title: '',
                    text: '',
                });

                setFieldError('');
                history.replace('/');
            } else {
                setFieldError('* Fill all the fields, please!');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="EditPostForm">
            {loading
                ?
                <Spinner />
                :
                <form onSubmit={createPost}>
                    <label>
                        <p>Title</p>
                        <input
                            type="text"
                            name="title"
                            value={post.title}
                            onChange={handleFieldChange}
                        />
                    </label>
                    <label>
                        <p>Description</p>
                        <textarea
                            name="text"
                            value={post.text}
                            onChange={handleFieldChange}
                        />
                    </label>
                    <button type="submit">Save</button>
                </form>
            }
            <p className="FieldError">{fieldError}</p>
        </div>
    );
};

export default EditPost;