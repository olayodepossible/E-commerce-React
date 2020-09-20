import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/pages/Footer/Footer";
import Home from "./components/pages/HomePage/Home";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
