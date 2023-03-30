import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from "./views/landing-page/Lading.jsx";
import Login from "./views/Login.jsx";
import Register from "./views/registration.jsx";
import Main from "./views/main"
import Personal from "./components/personal/index";

import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/main" component={Main} />
      <Route path="/register" component={Register} />
      <Route path="/landing" component={Landing} />
      <Route path="/calendar" component={Personal} />
      <Redirect from="/" to="/main" />
    </Switch>
  );
}

export default App;
