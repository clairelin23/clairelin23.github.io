import { Avatar, Box, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import profilePic from "../assets/profile1.png";

const Intro = () => {
  return (
    <Grid size={7}>
      <Box
        sx={{
          p: 1.5,
          borderRadius: 4,
          boxShadow: 2,
          bgcolor: "#f5f5f5",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Claire Lin"
            src={profilePic} // Replace with your actual image URL
            sx={{ width: 140, height: 140, mr: 3 }}
          />
          <Box>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
              Claire Lin
            </Typography>

            <Typography variant="body1">
              I am a machine learning engineer at Veytel working on medical imaging. I recently obtained my master's degree in Electrical and
              Computer Engineering (AI/ML Systems concentration) from Carnegie Mellon
              University. My research interests span machine learning, computational neuroscience, and systems architecture. 
            </Typography>

            {/* Slogan */}
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "medium",
                color: "#ff5722", // Orange color for the slogan
                letterSpacing: 1,
                mb: 2,
                mt: 2, // Add margin-top for space above the slogan
              }}
            >
              Research | Engineer | Develop
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Intro;
