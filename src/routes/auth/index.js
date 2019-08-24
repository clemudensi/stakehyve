import React from 'react';
import {
  AsyncLogin,
  AsyncSignUp,
  AsyncAllAssets,
  AsyncEmailVerify,
  AsyncForgot,
  PassReset
} from './auth';

const authRoutes = [
  { path: '/login', name: 'Login', render: props => <AsyncLogin {...props} />  },
  { path: '/signup', name: 'SignUp', render: props => <AsyncSignUp {...props} /> },
  { path: '/assets', name: 'Assets', render: props => <AsyncAllAssets {...props} /> },
  { path: '/verify', name: 'Verify', render: props => <AsyncEmailVerify {...props} /> },
  { path: '/forgot', name: 'Forgot', render: props => <AsyncForgot {...props} /> },
  { path: '/reset', name: 'Reset', render: props => <PassReset {...props} /> },
];

export default authRoutes;
