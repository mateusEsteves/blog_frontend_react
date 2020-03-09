import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/login/Login';
import PostList from './components/post-list/PostList';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/posts">
                    <PostList />
                </Route>
            </Switch>
        </Router>
    );
}