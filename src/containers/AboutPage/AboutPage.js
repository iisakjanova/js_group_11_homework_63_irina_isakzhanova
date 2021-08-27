import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="Container">
            <div className="AboutPage">
                <h3>Hello! This is my personal blog.</h3>
                <h4>Something about me:</h4>
                <p>My first name is <b>Irina</b></p>
                <p>My last name is <b>Isakzhanova</b></p>
                <p>My hobby is dancing, watching good movies and painting</p>
                <p>My main occupation is programming, but I spend my spare time writing interesting posts in this blog</p>
            </div>
        </div>
    );
};

export default AboutPage;