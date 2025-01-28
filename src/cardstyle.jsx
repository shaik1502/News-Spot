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

export default function RecipeReviewCard({ article }) {
  // State for managing the like count
  const [likeCount, setLikeCount] = React.useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1); // Increment like count
  };

  return (
    <Card
      sx={{
        maxWidth: 450,
        height: 500,
        margin: "8px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        transition: "transform 0.3s",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      {/* Article Title and Date */}
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
              WebkitLineClamp: 2,
            }}
          >
            {article.title || "No Title Available"}
          </Typography>
        }
        subheader={
          "Published on: " + new Date(article.publishedAt).toLocaleDateString()
        }
      />

      {/* Article Image */}
      <CardMedia
        component="img"
        height="200"
        image={article.image || "https://source.unsplash.com/random"}
        alt={article.title}
        sx={{
          borderRadius: "8px",
          margin: "8px",
          objectFit: "cover",
          width: "100%",
          height: "200px",
        }}
      />

      {/* Article Description */}
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

      {/* Card Actions */}
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Box>
          {/* Like Button */}
          <IconButton
            aria-label="add to favorites"
            onClick={handleLike}
            color={likeCount > 0 ? "error" : "default"}
          >
            <Favorite />
          </IconButton>
          <Typography
            variant="body2"
            sx={{ display: "inline", marginLeft: "4px" }}
          >
            {likeCount}
          </Typography>

          {/* Share Button */}
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </Box>
        {/* Read More Link */}
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
