import React from 'react';
import './Post.css';

const Post = ({date, title, onClick}) => {

    return (
        <div className="Post">
            <p>Created on: {date}</p>
            <h3>{title}</h3>
            <button
                onClick={onClick}
            >
                Read more >>
            </button>
        </div>
    );
};

export default Post;