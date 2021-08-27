import React from 'react';
import EditPost from "../../components/EditPost/EditPost";

import './AddPage.css';

const AddPage = () => {
    return (
        <div className="AddPage Container">
            <h2>Add new post</h2>
            <EditPost />
        </div>
    );
};

export default AddPage;