import React from 'react';
import { Redirect } from 'react-router';
import AuthService from '../../services/auth.service';

export default function PrivatePage({ unauthorizedRedirectPath, children }) {
  if (AuthService.user == null) return <Redirect to={unauthorizedRedirectPath} />;
  return children;
}
