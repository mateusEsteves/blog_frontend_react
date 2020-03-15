import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';
import AuthService from '../../services/auth.service';

export default function PrivatePage({ children, path }) {
  if (AuthService.user == null) return <Redirect to="/login" />;
  return <Route path={path}>{children}</Route>;
}

PrivatePage.propTypes = {
  children: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired,
};
