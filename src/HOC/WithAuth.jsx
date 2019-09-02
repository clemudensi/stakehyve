import React, {useState} from 'react';
import AppProvider from '../providers/appProvider';
import AppContext from '../utils/appContext';
import { fb } from '../utils/firebase';
import querySearch from 'stringquery';

const withAuth = (AuthComponent) => (
  ({ history }) => {
    const [inputs, setInputs] = useState({ email: '', password: '', firstName: '', lastName: ''});
    const [error, setError] = useState('');
    const [ signUp, signUpSuccess ] = useState('');
    const [response, setResponse] = useState('');
    const { email, password, firstName, lastName } = inputs;
    const { oobCode } = querySearch(window.location.search);

    const handleChange = (event) => {
      event.persist();
      setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    };

    //create user account
    const handleSignUp = async e => {
      e.preventDefault();
      try {
        const res = await fb.doCreateUserWithEmailAndPassword(
          email,
          password,
          firstName,
          lastName,
          history
        );
        if (res.code === 'auth/email-already-in-use') {
          setError(res.message);
          setInputs({ email: '', password: ''})
        } else {
          setInputs({ email: '', password: ''});
          signUpSuccess('You have successfully created an account check your email to continue')
        }
      } catch (err) {
        if(err.code){
          setError(err.message);
          setInputs({ email: '', password: ''})
        }
      }
    };

    //user login
    const handleLogin = e => {
      e.preventDefault();
      fb.doSignInWithEmailAndPassword(
        email,
        password)
        .then(() => {
          switch ((fb.getCurrentUser()).emailVerified) {
          case true:
            window.location.replace('/dashboard');
            break;
          case false:
            setError('Email has not been verified');
            break;
          default:
            return null;
          }
        })
        .catch((error) =>{
          switch (error.code) {
          case 'auth/wrong-password':
            setError('Wrong Password');
            break;
          case 'auth/user-not-found':
            setError('User with email address not Found');
            break;
          default:
            setError('');
          }
        });
    };

    //send password reset link
    const handleForgotPass = e => {
      e.preventDefault();
      fb.sendResetToken(
        email
      )
        .then(() => {
          localStorage.setItem('user', email);
          setResponse('Check your email to continue');
          setError('');
          setInputs({ email: ''})
        })
        .catch((error) =>{
          return error.code ?
            setError(error.code) :
            setResponse('');
        });
    };

    // reset password
    const handlePassReset = e => {
      e.preventDefault();
      fb.doResetPassword(
        oobCode,
        password
      )
        .then(() => {
          fb.doSignInWithEmailAndPassword(localStorage.getItem('user'), password).
          then(() => {
            switch ((fb.getCurrentUser()).emailVerified) {
            case true:
              localStorage.removeItem('user');
              history.push('/dashboard');
              break;
            case false:
              setError('Email has not been verified');
              break;
            default:
              return null;
            }
          });
        })
        .catch((error) => {
          switch (error.code) {
          case 'auth/invalid-action-code':
            setError('Reset code has expired or have been used previously');
            break;
          case 'auth/expired-action-code':
            setError('Reset Code is invalid try resetting password again');
            break;
          default:
            setError(error.code);
          }
        });
    };

    return (
      <AppProvider>
        <AppContext.Consumer>
          {
            (context) => (
              <AuthComponent
                email={ email }
                password={ password }
                firstName={ firstName }
                lastName={ lastName }
                oobCode={ context.oobCode }
                error={ error }
                response={response}
                handleChange={ handleChange }
                handleSignUp={handleSignUp}
                handleLogin={handleLogin}
                handleForgotPass={handleForgotPass}
                handlePassReset={handlePassReset}
              />
            )
          }
        </AppContext.Consumer>
      </AppProvider>
    )
  }
);

export default withAuth;

