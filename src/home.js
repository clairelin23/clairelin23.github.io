// App.js
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

const Home = () => {
  return (
    <div>
    <Container maxWidth={false} sx = {{marginY: 3, width: '100%'}}>
      <Grid container spacing={3} rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       
      <TopRowLinks/>
        <Intro />
        <NewsSection />
        
        <Grid container size={3} rowSpacing={7} >

        <MyTimeline />
        <EdTimeline />
        </Grid>
        <Projects />
        
      </Grid>
    
      
    </Container>
    <Footer/>
    </div>
    
  );
};

export default Home;
