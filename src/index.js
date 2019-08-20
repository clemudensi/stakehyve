import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Firebase, { FirebaseContext } from './providers/authProvider';

ReactDOM.render(
  <FirebaseContext.Provider >
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
