import React, { Component } from "react";
import Navbar from "./components/Navbar";

import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<News pagesize={5} key="general" country="in" />}
            />
            <Route
              path="/entertainment"
              element={
                <News
                  pagesize={5}
                  key="entertainment"
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  pagesize={5}
                  key="business"
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  pagesize={5}
                  country="in"
                  key="sports"
                  category="sports"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
