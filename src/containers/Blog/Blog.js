import React from 'react';
import {Route, Switch} from "react-router-dom";

import HomePage from "../HomePage/HomePage";
import AddPage from "../AddPage/AddPage";
import AboutPage from "../AboutPage/AboutPage";
import ContactsPage from "../ContactsPage/ContactsPage";
import Header from "../../components/Header/Header";
import FullPost from "../../components/FullPost/FullPost";
import EditPage from "../EditPage/EditPage";

import './Blog.css';

const Blog = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/posts" exact>
                    <HomePage />
                </Route>
                <Route path="/posts/add">
                    <AddPage />
                </Route>
                <Route path="/posts/:id/edit" component={EditPage} />
                <Route path="/posts/:id" exact component={FullPost} />
                <Route path="/about">
                    <AboutPage />
                </Route>
                <Route path="/contacts">
                    <ContactsPage />
                </Route>
                <Route render={() => <h1>Not found</h1>} />
            </Switch>
        </div>
    );
};

export default Blog;