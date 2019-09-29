import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Routes from './routes';
import ProtectedRoutes from './routes/protected';
import MyLoader from './components/shared/loaders';
import Home from './pages/Home';
// import Homer from './components/notFound/NotFound';
import allAsset from './pages/AllAssets';
import Asset from './pages/Assets';
import withAuth from './HOC/WithAuth';
import 'antd/dist/antd.css'

const App = (props) => {

  return (
    <Fragment>
      <React.Suspense fallback={<MyLoader />}>
        <Router>
          <Route exact  path="/" component={ Home} />
          <Route exact  path="/load" component={ MyLoader } />
          <Route exact  path="/explore" component={ allAsset } />
          <Route exact  path="/assets/:coin" component={ Asset } />
          {/* <Route exact  path="*" component={ Homer } /> */}
          {/* <Route exact  path="/" component={ Home } />
          <Route exact  path="/" component={ Home } /> */}
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
