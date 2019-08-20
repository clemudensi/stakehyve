import React from 'react';
import { AsyncHome } from './static';

const authRoutes = [
  { path: '/', name: 'Home', render: props => <AsyncHome {...props} />  },
];

export default authRoutes;
