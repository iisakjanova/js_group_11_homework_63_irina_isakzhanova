import React from 'react';
import './Post.css';

const Post = ({date, title}) => {
    return (
        <div className="Post">
            <p>Created on: {date}</p>
            <h3>{title}</h3>
            <button>Read more >></button>
        </div>
    );
};

export default Post;