import React, { lazy, Suspense } from 'react';
import {
  Switch, BrowserRouter as Router, Route, Redirect,
} from 'react-router-dom';
import PrivatePage from './components/util/PrivatePage';

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

          <PrivatePage path="/post/visualizar/:postId">
            <PostDetail />
          </PrivatePage>

          <PrivatePage path="/post/editar/:postId">
            <PostEditCreate />
          </PrivatePage>

          <PrivatePage path="/post/criar">
            <PostEditCreate />
          </PrivatePage>

          <Route path="*">
            <Redirect to="/posts" />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}
