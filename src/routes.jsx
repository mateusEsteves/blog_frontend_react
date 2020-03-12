import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './components/login/Login';
import PostList from './components/post-list/PostList';
import PostDetail from './components/post-detail/PostDetail';
import PostEditCreate from './components/post-create-update/PostEditCreate';

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
                <Route exact path="/post/:postId">
                    <PostDetail />
                </Route>
                <Route path="/post/criar">
                    <PostEditCreate />
                </Route>
                <Route path="/post/editar/:postId">
                    <PostEditCreate />
                </Route>
                <Route path="*">
                    <Redirect to="/posts" />
                </Route>
            </Switch>
        </Router>
    );
}