import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ResetPassword from './PassResetForm';
import { Redirect } from 'react-router';
import AuthError from './AuthError';

const googleUrl =
  'https://www.googleapis.com/identitytoolkit/v3/relyingparty/setAccountInfo?key=';

export const verifyUserEmail = async (apiKey, oobCode) => {
  try {
    await axios.post(`${googleUrl}${apiKey}`, { oobCode });
    return 'EMAIL_VERIFIED';
  } catch (error) {
    return error.response.data.error.message;
  }
};


const Auth = ({ history, location, handlePassReset, email, password, handleChange, error }) => {
  const [state, setState] = useState('');
  const { done, redirectTo } = state;
  const params = new URLSearchParams(window.location.search);
  const apiKey = params.get('apiKey');
  const mode = params.get('mode');
  const oobCode = params.get('oobCode');
  const continueUrl = params.get('continueUrl');

  const runVerifyUserEmail = async () => {
    const response = await verifyUserEmail(apiKey, oobCode);
    if (response === 'EMAIL_VERIFIED') {
      setState(() => ({ done: true, error: '', continueUrl }));
      window.location.replace('/verify-success')
    } else if (response === 'INVALID_OOB_CODE') {
      setState(() => ({ done: true, error: 'INVALID_OOB_CODE' }));
      return <AuthError errorType={'INVALID_OOB_CODE'}/>;
    } else {
      setState(() => ({ done: true, error: 'UNKNOWN_ERROR' }));
      return <AuthError errorType={'INVALID_OOB_CODE'}/>;
    }
  };

  // useEffect(() => {
  // if (mode === 'verifyEmail') {
  //   return runVerifyUserEmail();
  // }else if(mode === 'resetPassword'){
  //   return  <ResetPassword
  //     history={history}
  //     location={location}
  //     email={email}
  //     handlePassReset={handlePassReset}
  //     password={password}
  //     error={error}
  //     handleChange={handleChange}
  //   />
  // }
  //
  // }, [done, error, redirectTo]);
  switch (mode) {
    case 'resetPassword':
      return <ResetPassword
        history={history}
        location={location}
        email={email}
        handlePassReset={handlePassReset}
        password={password}
        error={error}
        handleChange={handleChange}
      />;
    case 'verifyEmail':
      return runVerifyUserEmail();
    default:
      return <Redirect to={'/'}/>;
  }
};

export default Auth;
