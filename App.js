import React, { Component } from "react";
import { Router } from "./presentation/components/Router";
import { fetchInitialData } from "./data/api";

export default class App extends Component {
  async componentDidMount() {
    await fetchInitialData();
  }
  render() {
    return <Router />;
  }
}
