import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  CardHeader,
  Typography,
  Avatar,
  IconButton,
  Box,
} from "@mui/material";
import { Favorite, Share } from "@mui/icons-material";
import { red } from "@mui/material/colors";

export default function RecipeReviewCard({ article }) {

  return (
    <Card
      sx={{
        maxWidth: 450,
        height: 500, // Set fixed height
        margin: "2px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        transition: "transform 0.3s",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Ensure proper alignment for content
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <CardHeader
        title={
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textOverflow: "ellipsis",
              overflow: "hidden",
              textAlign: "center",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2, // Allows up to 2 lines of text before truncating
            }}
          >
            {article.title || "No Title Available"}
          </Typography>
        }
        subheader={"Date :"+new Date(article.publishedAt).toLocaleDateString()}
      />
      <CardMedia
        component="img"
        height="200"
        image={article.image || "https://source.unsplash.com/random"} // Fallback image in case the article doesn't have an image
        alt={article.title}
        sx={{
          borderRadius: "8px",
          margin: "8px",
          objectFit: "cover", // Ensures image fills the container without distorting
          width: "100%", // Makes sure the image takes full width of the container
          height: "200px", // Fixed height for all images
        }}
      />

      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
          }}
        >
          {article.description || "No description available."}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Box>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </Box>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            color: "#1976d2",
            fontWeight: "bold",
          }}
        >
          Read More
        </a>
      </CardActions>
    </Card>
  );
}
 
