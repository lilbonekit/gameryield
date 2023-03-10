import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Calculator,
  Dashboard,
  EtherYield,
  MintGamerhunt,
  Unstake,
} from "./pages/dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/mintgamerhunt" element={<MintGamerhunt />}></Route>
          <Route path="/unstake" element={<Unstake />}></Route>
          <Route path="/calculator" element={<Calculator />}></Route>
          <Route path="/etheryield" element={<EtherYield />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
