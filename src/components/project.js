// NewsSection.jsx
import {
  Typography,
  Box,
  Divider,
  Link,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import WorkIcon from '@mui/icons-material/Work';
import Grid from "@mui/material/Grid2";
import depthPic from '../assets/depth.png'; 
import ganPic from '../assets/ganalytics.png';
import facePic from '../assets/face.png';
import wearPic from '../assets/wear.png';

const projects = [
  {
    title: "Metric from Human: Zero‑shot Monocular Metric Depth Estimation via Test‑time Adaptation",
    authors:
      "Y ZHOU, H BiAN*, K CHEN*, L QU*, P Ji, S LiN*, W YU, H Li, H CHEN, J SHEN, B RAJ, M XU",
    status: "in Submission, May 2024",
    description:"Our approach, termed Metric from Human (MfH), bridges from generalizable MRDE to zero-shot MMDE in a generate-and-estimate manner. MfH generates humans on the input image with generative painting and estimates human dimensions. Through this annotation-free test-time adaptation, MfH achieves superior zero-shot performance in MMDE.",
      imageUrl: depthPic, // Replace with actual image URLs
    links: [
      { label: "ABS", url: "#" },
      { label: "PAGE", url: "#" },
      { label: "PDF", url: "#" },
      { label: "CODE", url: "#" },
    ],
  },
  {
    title: "GANalytics: A Re‑implementation of Nvidia's StyleGAN",
    authors: "Claire Lin",
    status: "Published, Oct 2023",
    description:
      "This project contains the pytorch implementation StyleGAN and conducts detailed analysis on its performance with various other generative models.",
    imageUrl: ganPic, // Replace with actual image URLs
    links: [
      { label: "ABS", url: "#" },
      { label: "PAGE", url: "#" },
      { label: "PDF", url: "#" },
      { label: "CODE", url: "#" },
    ],
  },
  {
    title: "Automated MRI Face‑Removal Pipeline to Anonymize Patient Scans for Clinical Trials",
    // authors: "Sam Lee, Maria Garcia, David Wang",
    status: "Accepted, July 2021",
    description:
      "A fully automated pipeline for face removal of 3D T1-weighted MRI sequences was proposed. This method showed very high reliability and did not have any impact on subsequent qualitative review, as well as various quantitative assessments.",
    imageUrl: facePic, // Replace with actual image URLs
    links: [
      { label: "ABS", url: "#" },
      { label: "PAGE", url: "#" },
      { label: "PDF", url: "#" },
      { label: "CODE", url: "#" },
    ],
  },
  {
    title: "What do I wear?",
    status: "Published, 2019",
    description:
      "The goal of this project was to create a user-friendly application capable of providing users with a convenient way to collect, organize and share various articles of clothing in an ever growing market of apparel. Users are presented with collection and sorting functionality in their closets via a GUI.",
    imageUrl: wearPic, // Replace with actual image URLs
    links: [
      { label: "ABS", url: "#" },
      { label: "PAGE", url: "#" },
      { label: "PDF", url: "#" },
      { label: "CODE", url: "#" },
    ],
  }
  // Add more projects as needed
];

const Projects = () => {
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
        <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
          Selected Projects <WorkIcon />
        </Typography>

        <Grid container spacing={4} style={{maxHeight: '100vh', overflow: 'auto'}}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  display: "flex",
                  bgcolor: "#2E3440",
                  color: "#ECEFF4",
                  borderRadius: 2,
                }}
              >
                {/* Project Image */}
                <Box
                  component="img"
                  src={project.imageUrl}
                  alt={project.title}
                  sx={{
                    width: 400,
                    height: "auto",
                    objectFit: "cover",
                    borderTopLeftRadius: 8,
                    borderBottomLeftRadius: 8,
                  }}
                />

                {/* Project Details */}
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>
                    {project.authors}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mb: 2 }}
                  >
                    {project.status}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>

                  {/* Project Links */}
                  {/* <Box sx={{ display: "flex", gap: 1 }}>
                    {project.links.map((link, linkIndex) => (
                      <Button
                        key={linkIndex}
                        variant="outlined"
                        href={link.url}
                        sx={{ color: "#ECEFF4", borderColor: "#ECEFF4" }}
                      >
                        {link.label}
                      </Button>
                    ))}
                  </Box> */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default Projects;
