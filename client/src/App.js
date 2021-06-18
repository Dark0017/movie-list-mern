import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/header";
function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Routes />
      </React.Fragment>
    </Router>
  );
}

export default App;
