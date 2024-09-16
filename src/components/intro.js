import { Avatar, Box, Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import profilePic from "../assets/profile1.png";

const Intro = () => {
  return (
    <Grid size={8}>
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
            sx={{ width: 300, height: 300, mr: 3 }}
          />
          <Box>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
              Claire Lin
            </Typography>
            <Typography variant="body1" paragraph>
            Hi there! 👋 I have three years of full-time experience working with Python and medical imaging algorithms development, data pipeline, and cloud deployment, at Veytel and Clario. 
            I thoroughly enjoy coding and learning state-of-the-art technologies. I am an enthusiast for developing data-driven solutions that optimize operational efficiency and elevate human well-being, particularly in healthcare and environmental sustainability.
            </Typography>
            <Typography variant="body1" paragraph>
            I recently graduated from Carnegie Mellon University with a master's degree in Electrical and
              Computer Engineering (AI/ML Systems concentration). 
                My research interests span across <Box component="span" fontWeight="bold">machine learning</Box>, <Box component="span" fontWeight="bold">3D vision</Box>, <Box component="span" fontWeight="bold">image segmentation</Box>, and <Box component="span" fontWeight="bold">model deployment</Box>.
            </Typography>
            <Typography variant="body1" paragraph>
            I’m excited to keep learning and collaborating throughout my journey.
            Feel free to reach out at <Box component="span" sx={{ color: "#ff5722" }}>shaoyuli@alumni.cmu.edu</Box> or send me an invite on LinkedIn — I’m always open to new conversations!







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
              Research | Engineer | Impact
            </Typography>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Intro;
