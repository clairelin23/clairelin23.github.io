// Footer.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        bgcolor: "#2c2f33", // Dark background color
        color: "#b0b3b8", // Light gray text color for contrast
        py: 3, // Padding for top and bottom
        px: 2, // Padding for left and right
        mt: 4, // Margin top to separate footer from content above
      }}
    >
      <Grid container spacing={50}>
        {/* Left side content */}
        <Grid item size={6}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#6c6f72" }}>
            CLAIRE LIN
          </Typography>
          <Typography variant="body2">
            2024 © Version 1.6
          </Typography>
          <Typography variant="body2">All rights reserved</Typography>
        </Grid>

        {/* Right side content */}
        <Grid size={6}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#6c6f72" }}>
            CONTACT INFORMATION
          </Typography>
          <Typography variant="body2">shaoyuli@alumni.cmu.edu</Typography>
          <Typography variant="body2">(+1) 669-238-8568</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
