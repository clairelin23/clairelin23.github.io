import {Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";


const experiences = [
    {
      title: "M.S. ECE, AI/ML Systems",
      location: "Carnegie Mellon University, Pittsburgh, PA",
      duration: "2022 - 2023",
    },
    {
      title: "B.S. Computer Science, Minor in Math",
      location: "San Jose State University, San Jose, CA",
      duration: "2016 - 2021",
    },
  ];

  
const EdTimeline = () => {
  return (
    <Grid>
        <Box
          sx={{
            p: 1.5,
            borderRadius: 4,
            boxShadow: 2,
            bgcolor: "#f5f5f5",
            height: "100%",
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
            Education
          </Typography>
          <Timeline position="right">
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  {index < experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    flex: 1000, // Expands to take up more space
                    minWidth: "50px", // Minimum width to prevent wrapping
                    textAlign: "left", // Aligns text to the left
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {exp.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {exp.location}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {exp.duration}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Grid>

  );
};

export default EdTimeline;
