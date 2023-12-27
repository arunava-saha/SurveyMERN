import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { Header } from "./components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Details from "./components/Details";
import Survey from "./components/Survey";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Details />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/survey" element={<Survey />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
