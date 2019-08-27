import React from 'react';
import {
  AsyncLogin,
  AsyncSignUp,
  AsyncAllAssets,
  AsyncEmailVerify,
  EmailVerifySuccess,
  AsyncForgot,
  PassReset
} from './auth';

const authRoutes = [
  { path: '/login', name: 'Login', render: props => <AsyncLogin {...props} />  },
  { path: '/signup', name: 'SignUp', render: props => <AsyncSignUp {...props} /> },
  { path: '/assets', name: 'Assets', render: props => <AsyncAllAssets {...props} /> },
  { path: '/auth', name: 'Verify', render: props => <AsyncEmailVerify {...props} /> },
  { path: '/verify-success', name: 'Verify Success', render: props => <EmailVerifySuccess {...props} /> },
  { path: '/forgot', name: 'Forgot', render: props => <AsyncForgot {...props} /> },
  { path: '/reset', name: 'Reset', render: props => <PassReset {...props} /> },
];

export default authRoutes;
