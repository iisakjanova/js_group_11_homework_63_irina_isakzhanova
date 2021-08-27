import React, {useState} from 'react';
import './EditPost.css';

const EditPost = () => {
    const [post, setPost] = useState({
        title: '',
        text: '',
    });

    const handleFieldChange = e => {
        const {name, value} = e.target;
        setPost(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const createPost = e => {
        e.preventDefault();
        console.log(post);
    };

    return (
        <div className="EditPostForm">
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
        </div>

    );
};

export default EditPost;