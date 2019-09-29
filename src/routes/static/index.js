import React from 'react';
import { AsyncHome, NotFound } from './static';

const authRoutes = [
  { path: '/', name: 'Home', render: props => <AsyncHome {...props} />  },
  { path: '*', name: 'Not-Found', render: props => <NotFound  {...props} /> },
];

export default authRoutes;
