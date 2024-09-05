// NewsSection.jsx
import { Typography, Box, Divider, Link } from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Grid from "@mui/material/Grid2";

const newsItems = [
    {
        date: "May 2024",
        content:
          'We submitted our paper on Monocular Depth Estimation to NeurIPS 2024!',
     
    },
  {
    date: "March 2024",
    content:
      'I will join Veytel as a Machine Learning engineer working on lesion detection and segmentations 🧠',
  },
  {
    date: "May 2023",
    content:
      "I will join Adobe Sign as a software engineer Intern ✍️",
  }

];

const NewsSection = () => {
  return (
    <Grid size={5}>
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
          News <NewspaperIcon />
        </Typography>

        {newsItems.map((item, index) => (
          <Grid key={index} mb={2}>
            <Typography>
              {item.date} ›
            </Typography>
            <Typography>
              {item.content}{" "}
              {item.link && (
                <Link href={item.link.url} target="_blank" rel="noopener">
                  {item.link.text}
                </Link>
              )}
            </Typography>
            {index < newsItems.length - 1 && <Divider sx={{ my: 1 }} />}
          </Grid>
        ))}
      </Box>
    </Grid>
  );
};

export default NewsSection;
