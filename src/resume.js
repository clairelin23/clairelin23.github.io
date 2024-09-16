// ResumePage.jsx
import React from "react";
import {
  Container
} from "@mui/material";

import Grid from "@mui/material/Grid2";
// Correct imports for Timeline components from MUI

import Intro from "./components/intro";
import MyTimeline from "./components/timeline";
import EdTimeline from "./components/education_timeline";
import NewsSection from "./components/news";
import Projects from "./components/project";
import TopRowLinks from "./components/header";
import Footer from "./components/footer.js";
import TopRowLinksResume from "./components/header_resume.js";

// Import the resume PDF file
import resumePDF from "./assets/ClaireShaoyu_Lin_Resume.pdf"; // Ensure the path is correct

const ResumePage = () => {
  return (
    <div>
    <Container maxWidth={false}  sx = {{marginY: 3}}>
      <Grid container spacing={3} rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       
      <TopRowLinksResume/>
      <iframe
        src={resumePDF}
        title="Resume PDF"
        width="100%"
        height="800px"
        style={{ border: 'none' }}
      />

        
      </Grid>
    
      
    </Container>
    <Footer/>
    </div>
    
  );
};

export default ResumePage;
