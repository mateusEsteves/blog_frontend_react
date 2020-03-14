import React from 'react';
import AuthService from '../../services/auth.service';
import { Redirect } from 'react-router';

export default function PrivatePage({ unauthorizedRedirectPath, children }) {
    if (AuthService.user == null)
        return <Redirect to={unauthorizedRedirectPath} />
    else
        return children;
}