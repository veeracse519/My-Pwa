import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./about";
import Home from "./home";
import Users from "./users";
class App extends React.Component {
  render(){
    return (
      <Router>
          <Switch>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/users">
              <Users/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
      </Router>
    );
  }
}
export default App
