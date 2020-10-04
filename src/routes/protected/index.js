import React from 'react';
import Dashboard from '../../pages/dashboard';
import Settings from '../../pages/settings';

const protectedRoute = [
  { path: '/home', name: 'Dashboard', render: props => <Dashboard {...props} /> },
  { path: '/settings', name: 'Settings', render: props => <Settings {...props} /> },
];

export default protectedRoute;