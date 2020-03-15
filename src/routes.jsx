import React, { lazy, Suspense } from 'react';
import {
  Switch, BrowserRouter as Router, Route, Redirect,
} from 'react-router-dom';

const Login = lazy(() => import('./components/login/Login'));
const PostList = lazy(() => import('./components/post-list/PostList'));
const PostDetail = lazy(() => import('./components/post-detail/PostDetail'));
const PostEditCreate = lazy(() => import('./components/post-edit-create/PostEditCreate'));

export default function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Carregando...</div>}>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route path="/posts">
            <PostList />
          </Route>

          <Route path="/post/visualizar/:postId">
            <PostDetail />
          </Route>

          <Route path="/post/editar/:postId">
            <PostEditCreate />
          </Route>

          <Route path="/post/criar">
            <PostEditCreate />
          </Route>

          <Route path="*">
            <Redirect to="/posts" />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}
