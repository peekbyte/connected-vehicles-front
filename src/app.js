import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, NotFound, Customer } from "./containers";
class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/" >
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/Customer:id?' component={Customer} />
            <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
