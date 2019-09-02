import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Routes from './routes';
import ProtectedRoutes from './routes/protected';
import MyLoader from './components/shared/loaders';
import Home from './components/Authentication/pages/Home';
import withAuth from './HOC/WithAuth';

const App = (props) => {

  return (
    <Fragment>
      <React.Suspense fallback={<MyLoader />}>
        <Router>
          <Route exact  path="/" component={ Home } />
          <Route>
            {ProtectedRoutes.map((routeProps, key) => (
              <Route
                key={key}
                path={routeProps.path}
                render={(renderProps)=> <routeProps.render key={key} {...renderProps} {...props} />}
              />
            ))}
            {Routes.map((routeProps, key) => (
              <Route
                key={key}
                path={routeProps.path}
                render={(renderProps)=> <routeProps.render key={key} {...renderProps} {...props} />}
              />
            ))}
          </Route>
        </Router>
      </React.Suspense>
    </Fragment>
  );
};

export default withRouter(withAuth(App));
