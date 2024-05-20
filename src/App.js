import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Landing from "./components/Pages/Landing";
import Info from "./components/Pages/Info/Info";
import { WebDesign } from "./components/Pages/WebDesign/WebDesign";
import { Photography } from "./components/Pages/Photography/Photography";
import "./css/app.scss";
import PhotographyProject from "./components/Pages/Photography/PhotographyProject";
import Frida from "./components/Pages/Photography/Frida";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Landing />
        </Route>
        <Route exact path="/photography">
          <Navbar />
          <Photography />
        </Route>
        <Route exact path="/photography/:photoProject">
          <Navbar />
          <PhotographyProject />
        </Route>
        <Route exact path="/photography/frida-in-paris">
          <Navbar />
          <Frida />
        </Route>
        <Route exact path="/web-design">
          <Navbar />
          <WebDesign />
        </Route>
        <Route exact path="/info">
          <Navbar />
          <Info />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
