import React from 'react';
import Dashboard from '../../components/dashboard/Dashboard';

const protectedRoute = [
  { path: '/dashboard', name: 'Dashboard', render: props => <Dashboard {...props} /> },
];

export default protectedRoute;