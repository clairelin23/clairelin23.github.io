// TopRowLinks.jsx
import React from "react";
import { Box, Typography, AppBar, IconButton, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google"; // Example of using Google icon
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

const TopRowLinksResume = () => {
  return (
    <Grid size={12}>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1.5,
          borderRadius: 4,
          bgcolor: "#f5f5f5",
          boxShadow: 2,
          height: "100%",
          
        }}
      >
        {/* Left side with text links */}
        <Box sx={{ display: "flex", gap: 2 }}>
        <Button
            component={Link}
            to="/"
            variant="contained"
            color="primary"
            style={{maxHeight: '55px' }}>
    
            About
          </Button>
    
        <Button
            component={Link}
            to="/resume"
            variant="outlined"
            color="primary"
            style={{maxHeight: '55px' }}>
    
            Resume
          </Button>
        </Box>

        {/* Right side with icon links */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            component="a"
            href="https://scholar.google.com"
            target="_blank"
            aria-label="Google Scholar"
          >
            <GoogleIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/clairelin23"
            target="_blank"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
          

        </Box>
      </Box>
    </Grid>
  );
};

export default TopRowLinksResume;
