import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NaviBar from "./components/NaviBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NaviBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/project" element={<Project />} />
          <Route path="/member" element={<Member />} />
          <Route path="/board" element={<Board />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;