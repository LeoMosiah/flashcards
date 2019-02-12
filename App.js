import React, { Component } from "react";
import { Router } from "./presentation/components/Router";
import { Provider } from "react-redux";
import { initializeDomainLayer } from "./domain";
import { setLocalNotification } from "./data/api";

export default class App extends Component {
  async componentDidMount() {
    await setLocalNotification();
  }

  render() {
    return (
      <Provider store={initializeDomainLayer()}>
        <Router />
      </Provider>
    );
  }
}
