// NewsSection.jsx
import {
  Typography,
  Box,
  Divider,
  Link,
  Card,
  CardContent,
  Collapse,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import WorkIcon from "@mui/icons-material/Work";
import Grid from "@mui/material/Grid2";
import depthPic from "../assets/depth.png";
import ganPic from "../assets/ganalytics.png";
import facePic from "../assets/face.png";
import wearPic from "../assets/wear.png";
import wildPic from "../assets/SVM.png";

const projects = [
  // {
  //   title:
  //     "Metric from Human: Zero‑shot Monocular Metric Depth Estimation via Test‑time Adaptation",
  //   authors:
  //     "Y ZHOU, H BiAN*, K CHEN*, L QU*, P Ji, S LiN*, W YU, H Li, H CHEN, J SHEN, B RAJ, M XU",
  //   status: "in Submission, May 2024",
  //   description: "Metric from Human (MfH) overcomes the challenges of scene dependency in monocular metric depth estimation",
  //   abstract: "Monocular depth estimation (MDE) is fundamental for deriving 3D scene structures from 2D images. While state-of-the-art monocular relative depth estimation (MRDE) excels in estimating relative depths for in-the-wild images, current monocular metric depth estimation (MMDE) approaches still face challenges in handling unseen scenes. Since MMDE can be viewed as the composition of MRDE and metric scale recovery, we attribute this difficulty to scene dependency, where MMDE models rely on scenes observed during supervised training for predicting scene scales during inference.",
  //   imageUrl: depthPic, // Replace with actual image URLs
  //   links: [
  //     { label: "ABS", url: "#" },
  //     { label: "PAGE", url: "#" },
  //     { label: "PDF", url: "#" },
  //     { label: "CODE", url: "#" },
  //   ],
  // },
  {
    title: "GANalytics",
    // authors: "Claire Lin",
    status: "Published, Oct 2023",
    description: "Re-implementation of Nvidia's StyleGAN in pytorch and analysis of synthesized image",
    abstract:
      "This project includes a PyTorch implementation of StyleGAN and provides a detailed performance analysis comparing it with other generative models, including Wasserstein Generative Adversarial Network (WGAN) and Diffusion models.",
    imageUrl: ganPic, // Replace with actual image URLs
    links: [
      { label: "ABS", url: "#" },
      { label: "CODE", url: "https://github.com/clairelin23/GANalytics" },
    ],
  },
  {
    title:
      "Automated MRI Face‑Removal Pipeline to Anonymize Patient Scans for Clinical Trials",
    // authors: "Sam Lee, Maria Garcia, David Wang",
    status: "Clinical Trials on Alzheimer's Disease conference, 2021",
    description:
      "A fully automated pipeline for face removal of 3D T1-weighted MRI sequences was proposed. Quantitative assessments showed the algorithm did not have any impact on subsequent qualitative review.",
    imageUrl: facePic, // Replace with actual image URLs
    abstract: "MRI data are collected throughout clinical trials to determine patient’s eligibility, monitor their safety and assess treatment efficacy via quantitative analyses. While patient safety is of utmost importance, data privacy is of equal importance. Scientific and public attention was raised some years back that using modern face-recognition software in combination with 3D MRI data, determining patient’s identity may be possible. The aim of this work was to create a pipeline to automatically blur patient’s face, preventing automated facial recognition without impacting neither clinical diagnosis nor quantitative analyses. Assessments showed that for brain segmentation, FreeSurfer success rate after face removal on ADNI-3 was about 99%, which is higher than without face removal. ",
    links: [
      { label: "ABS", url: "#" },
      { label: "PAGE", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8589634/" },
    ],
  },
  {
    title: "Wild Fire Detection",
    // authors: "Claire Lin",
    status: "Published, Oct 2023",
    description: "Predict forest fires by identifying key meteorological factors and weather patterns",
    abstract: "This project employs machine learning to predict California wildfires in 2014, driven by increasing global warming and hotter, drier conditions. Using weather data from NOAA and wildfire data from Kaggle, we identified key meteorological factors such as temperature, dew point, and atmospheric pressure through Principal Component Analysis (PCA). Machine learning models, including Support Vector Machines (SVM) and Linear Discriminant Analysis (LDA) stacked with neural networks, were used to predict fire likelihood, demonstrating the potential of data-driven approaches to improve wildfire predictions and inform preventive actions.",
    imageUrl: wildPic, // Replace with actual image URLs
    links: [
      { label: "ABS", url: "#" },
      { label: "CODE", url: "https://github.com/clairelin23/Wild-Fire-Detection" },
    ],
  },
  {
    title: "What Do I Wear:  A Virtual Closet",
    status: "Published, 2019",
    description: "A virtual closet helps prevent over-consumption by allowing users to visualize their wardrobe digitally",
    abstract:
      "The goal of this project was to create a user-friendly application capable of providing users with a convenient way to collect, organize and share various articles of clothing in an ever growing market of apparel. Users are presented with collection and sorting functionality in their closets via a GUI.",
    imageUrl: wearPic, // Replace with actual image URLs
    links: [
      { label: "ABS", url: "#" },
      { label: "CODE", url: "https://github.com/clairelin23/What-Do-I-Wear" },
    ],
  },
  // Add more projects as needed
];

const Projects = () => {
  const [openStates, setOpenStates] = useState(projects.map(() => false));

  // Toggle function to handle opening and closing the abstract section for a specific project
  const handleToggle = (index) => {
    setOpenStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <Grid size={9}>
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

        <Grid
          container
          spacing={4}
          style={{ maxHeight: "100vh", overflow: "auto" }}
        >
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
                  <Typography variant="h7" fontWeight="bold" gutterBottom>
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
                  <Box sx={{ display: "flex", gap: 1 }}>
                  {project.links.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      variant="outlined"
                      onClick={(e) => {
                        e.preventDefault();
                        if (link.label === 'ABS') {
                          handleToggle(index); // Toggle the abstract section for this specific project
                        } else if (link.label === 'CODE' || link.label === 'PAGE') {
                          window.open(link.url, '_blank'); // Open the PDF link in a new tab
                        }
                      }}
                      sx={{ color: '#ECEFF4', borderColor: '#ECEFF4' }}
                    >
                      {link.label}
                    </Button>
                  ))}
                  </Box>
                  {/* Collapsible Text Area */}
                  <Collapse in={openStates[index]}>
                  <Box sx={{
                      mt: 2,
                      p: 2,
                      bgcolor: '#2b2b2b', // Darker background for abstract
                      borderRadius: 2,
                      color: '#ffffff', // White font color for contrast
                    }}>
                    <Typography variant="body1">{project.abstract}</Typography>
                  </Box>
                </Collapse>
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
