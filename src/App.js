import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Landing from "./components/Pages/Landing";
import Info from "./components/Pages/Info/Info";
import { WebDesign } from "./components/Pages/WebDesign/WebDesign";
import { Photography } from "./components/Pages/Photography/Photography";
import "./css/app.scss";
import Frida from "./components/Pages/Photography/Frida";
import Paul from "./components/Pages/Photography/Paul";
import RunningFrida from "./components/Pages/Photography/RunningFrida";
import Duina from "./components/Pages/Photography/Duina";
import NiceFrance from "./components/Pages/Photography/NiceFrance";
import EliAsmara from "./components/Pages/Photography/EliAsmara";
import Bojana from "./components/Pages/Photography/Bojana";
import DennyLV from "./components/Pages/Photography/DennyLV";

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
        <Route exact path="/photography/eli-for-asmara">
          <Navbar />
          <EliAsmara />
        </Route>
        <Route exact path="/photography/nice,-france">
          <Navbar />
          <NiceFrance />
        </Route>
        <Route exact path="/photography/duina-in-paris">
          <Navbar />
          <Duina />
        </Route>
        <Route exact path="/photography/running-around-paris-with-frida">
          <Navbar />
          <RunningFrida />
        </Route>
        <Route exact path="/photography/paul-for-carmen-&-co">
          <Navbar />
          <Paul />
        </Route>
        <Route exact path="/photography/frida-in-paris">
          <Navbar />
          <Frida />
        </Route>
        <Route exact path="/photography/bojana-in-acne-studios">
          <Navbar />
          <Bojana />
        </Route>
        <Route exact path="/photography/denny-pham-for-athletica-&-louis-vuitton">
          <Navbar />
          <DennyLV />
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
