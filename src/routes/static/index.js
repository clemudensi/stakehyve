import React from 'react';
import { AsyncHome, NotFound } from './static';

const authRoutes = [
  { path: '/', name: 'Home', render: props => <AsyncHome {...props} />  },
  { path: '*', name: 'Not-Found', render: NotFound  },
];

export default authRoutes;
