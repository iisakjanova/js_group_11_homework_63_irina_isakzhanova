import React, {useState} from 'react';
import axiosApi from "../../axiosApi";
import dayjs from "dayjs";
import {useHistory} from "react-router-dom";

import Spinner from "../UI/Spinner/Spinner";
import './EditPost.css';

const EditPost = () => {
    const history = useHistory();

    const [post, setPost] = useState({
        title: history.location.state?.title || '',
        text: history.location.state?.text || '',
        date: ''
    });

    const [loading, setLoading] = useState(false);
    const [fieldError, setFieldError] = useState('');

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

    const sendUpdatePostRequest = async () => {
        await axiosApi.put('posts/' + history.location.state?.id + '.json', {
            title: post.title,
            text: post.text,
        });
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        setLoading(true);

        if (history.location.state?.id) {
            updatePost();
        } else {
            createPost();
        }
    };

    const updatePost = async () => {
        try {
            if (post.title && post.text) {
                await sendUpdatePostRequest();
                setFieldError('');
            } else {
                setFieldError('* Fill all the fields, please!');
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    const createPost = async () => {
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
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <div className="EditPostForm">
            {loading
                ?
                <Spinner />
                :
                <form onSubmit={handleFormSubmit}>
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