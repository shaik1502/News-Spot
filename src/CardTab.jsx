import React from "react";
import Cards from "./card.jsx"; // Import the Cards component to display articles
import "./cardtab.css";

function CardTab({ articles }) {
  return (
    <div>
      {/* Display the Cards component passing the articles */}
      <Cards articles={articles} />

      {/* Footer section */}
      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          fontSize: "14px",
          backgroundColor: "#f1f1f1",
          marginTop: "20px",
        }}
      >
        <p>
          Done by: <strong>Sameer Shaik</strong> &nbsp;
          <a href="https://gnews.io/" target="_blank" rel="noopener noreferrer">
            Using GNews API
          </a>
        </p>
      </footer>
    </div>
  );
}

export default CardTab;
