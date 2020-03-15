import React, { lazy, Suspense } from 'react';
import {
  Switch, BrowserRouter as Router, Route, Redirect,
} from 'react-router-dom';
import PrivatePage from './components/util/PrivatePage';

const Login = lazy(() => import('./components/login/Login'));
const PostList = lazy(() => import('./components/post-list/PostList'));
const PostDetail = lazy(() => import('./components/post-detail/PostDetail'));
const PostEditCreate = lazy(() => import('./components/post-create-update/PostEditCreate'));

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

          <PrivatePage unauthorizedRedirectPath="/login">
            <Route path="/post/criar">
              <PostEditCreate />
            </Route>
          </PrivatePage>

          <PrivatePage unauthorizedRedirectPath="/login">
            <Route path="/post/editar/:postId">
              <PostEditCreate />
            </Route>
          </PrivatePage>

          <Route exact path="/post/:postId">
            <PostDetail />
          </Route>

          <Route path="*">
            <Redirect to="/posts" />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}
