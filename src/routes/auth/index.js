import React from 'react';
import {
  AsyncLogin,
  AsyncSignUp,
  AsyncAllAssets,
  AsyncAuthAction,
  EmailVerifySuccess,
  AsyncForgot,
  PassReset,
  EmailSent,
  ResetSent
} from './auth';

const authRoutes = [
  { path: '/signin', name: 'Login', render: props => <AsyncLogin {...props} />  },
  { path: '/signup', name: 'SignUp', render: props => <AsyncSignUp {...props} /> },
  // { path: '/assets', name: 'Assets', render: props => <AsyncAllAssets {...props} /> },
  { path: '/auth', name: 'Verify', render: props => <AsyncAuthAction {...props} /> },
  { path: '/verify-success', name: 'Verify Success', render: props => <EmailVerifySuccess {...props} /> },
  { path: '/forgot', name: 'Forgot', render: props => <AsyncForgot {...props} /> },
  { path: '/reset', name: 'Reset', render: props => <PassReset {...props} /> },
  { path: '/verify', name: 'email sent', render: props => <EmailSent {...props} /> },
  { path: '/reset-sent', name: 'reset sent', render: props => <ResetSent {...props} /> },

];

export default authRoutes;
