// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home.js";
import ResumePage from "./resume.js";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepOrange, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: purple,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
    </Router>
    </ThemeProvider>
  );
};

export default App;
