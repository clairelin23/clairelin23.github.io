// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home.js";
import ResumePage from "./resume.js";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
    </Router>
  );
};

export default App;
