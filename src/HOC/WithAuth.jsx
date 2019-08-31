import React from 'react';
import AppProvider from '../providers/appProvider';
import AppContext from '../utils/appContext';

const withAuth = (AuthComponent) => () => (
  <AppProvider>
    <AppContext.Consumer>
      {
        (context) => (
          <AuthComponent
            email={ context.email }
            password={ context.password }
            firstName={ context.firstName }
            lastname={ context.lastName }
            oobCode={ context.oobCode }
            error={ context.error }
            handleChange={ context.handleChange }
          />
        )
      }
    </AppContext.Consumer>
  </AppProvider>
);

export default withAuth;

