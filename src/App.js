import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/AuthForms/signup";
import Login from "./components/AuthForms/index";
import verify from "./components/AuthForms/verify";
import Login2 from "./components/Authentication/login";
import SignUp2 from "./components/Authentication/signup";
import emailV from "./components/Authentication/emailVerify";
import forgot from "./components/Authentication/forgot";
import Home from "./pages/Home";
import Assets from "./pages/AllAssets";
// import "./assets/css/style.css";
// import "./assets/css/main.css";
// import "./assets/css/rtl.css";
// import "./assets/css/azalea.css";
// import "./assets/css/vendor.bundle.css";

const App = () => {

  
  return (
    <Router>
    <div>
      {/* <PrivateRoute exact path="/" component={Home} /> */}
      <Route exact path="/signup" component={SignUp2} />
      <Route exact path="/signin" component={Login2} />
      <Route exact path="/assets" component={Assets} />
      <Route exact  path="/" component={Home} />
      <Route exact  path="/verify" component={emailV} />
      <Route exact  path="/forgot" component={forgot} />
      {/* <Route exact  path="/verification" scomponent={verify} /> */}
    </div>
  </Router>
  );
}

export default App;
