import React from "react";
import { Mostpopular, Gaminglibrary, Hero, Profile, Header } from "../export";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "../container/container.css";
import { Home } from "../export.js";

const Container = () => {
  return (
    <div className="main-container">
      <Home />
    </div>
  );
};

export default Container;
