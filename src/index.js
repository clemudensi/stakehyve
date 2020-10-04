import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
import {Router, BrowserRouter} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import * as serviceWorker from './serviceWorker';
import App from './App';
const history = createBrowserHistory();

ReactDOM.render(
    <BrowserRouter>
    <Router history={history}>
        <App/>
    </Router>
</BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
