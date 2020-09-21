import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/pages/Footer/Footer";
import Home from "./components/pages/HomePage/Home";
import Product from "./components/pages/Product/Product";
import Service from "./components/pages/Service/service";
import SignUp from "./components/pages/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Service} />
        <Route path="/products" component={Product} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
