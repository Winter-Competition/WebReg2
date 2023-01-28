import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NaviBar from "./components/NaviBar";
import Home from "./pages/Home";
import WebReg from "./pages/Webreg";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <div className="App">
      <NaviBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webreg" element={<WebReg />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;