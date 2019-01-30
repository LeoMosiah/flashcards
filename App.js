import React, { Component } from "react";
import { Router } from "./presentation/components/Router";
import { Provider } from "react-redux";
import { initializeDomainLayer } from "./domain";
import { setInitialData } from "./data/api";

export default class App extends Component {
  async componentDidMount() {
    await setInitialData();
  }
  render() {
    return (
      <Provider store={initializeDomainLayer()}>
        <Router />
      </Provider>
    );
  }
}
