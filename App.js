import React, { Component } from "react";
import { Router } from "./presentation/components/Router";
import { fetchInitialData } from "./data/api";
import { initializeDomainLayer } from "./domain";
import { Provider } from "react-redux";

const { store } = initializeDomainLayer();

export default class App extends Component {
  async componentDidMount() {
    await fetchInitialData();
  }
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
