import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import signupAuthorization from "./components/pages/signupAuthorization";
import loginAuthorization from "./components/pages/loginAuthorization";
import Feed from "./components/pages/Feed";
import Chat from "./components/pages/Chat";
import Homepage from "./components/pages/Homepage"
import Profile from "./components/pages/Profile"

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/signupAuthorization" component={signupAuthorization} />
            <Route exact path="/loginAuthorization" component={loginAuthorization} />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/" component={Homepage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
