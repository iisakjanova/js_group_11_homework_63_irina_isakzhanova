import React from 'react';
import EditPost from "../../components/EditPost/EditPost";

import './EditPage.css';

const EditPage = () => {
    return (
        <div className="EditPage Container">
            <h2>Edit post</h2>
            <EditPost />
        </div>
    );
};

export default EditPage;