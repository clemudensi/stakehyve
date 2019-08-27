import React from 'react';
import { Link } from 'react-router-dom';

const AuthError = ({ errorType }) => {
  switch (errorType) {
  case 'INVALID_OOB_CODE':
    return (
      <h2>Invalid Code</h2>
    );
  case 'UNKNOWN_ERROR':
    return (
      <h2>Unknown Error</h2>
    );
  default:
    return <div>Could not complete request<Link to={'/'}>Home</Link></div>;
  }
};

export default AuthError;
