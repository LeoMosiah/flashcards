import React, { Component } from "react";
import { Router } from "./presentation/components/Router";
import { Provider } from "react-redux";
import { initializeDomainLayer } from "./domain";

export default class App extends Component {
  render() {
    return (
      <Provider store={initializeDomainLayer()}>
        <Router />;
      </Provider>
    );
  }
}
