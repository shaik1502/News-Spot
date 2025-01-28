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
          backgroundColor: "#f9f9f9",
          borderTop: "1px solid #ddd",
          marginTop: "30px",
        }}
      >
        <p style={{ margin: "5px 0", fontWeight: "500" }}>
          Developed by&nbsp;
          <a
            href="https://www.linkedin.com/in/sameer-shaik-68317224b/"
            style={{ textDecoration: "none", color: "#0073b1" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sameer Shaik
          </a>
        </p>
        <p style={{ margin: "5px 0", color: "#555" }}>
          Contact:&nbsp;
          <a
            href="mailto:sameer_s@srmap.edu.in"
            style={{ textDecoration: "none", color: "#555" }}
          >
            sameer_s@srmap.edu.in
          </a>
        </p>
        <p style={{ margin: "5px 0", fontSize: "13px", color: "#888" }}>
          Powered by&nbsp;
          <a
            href="https://gnews.io/"
            style={{ textDecoration: "none", color: "#555" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            GNews API
          </a>
        </p>
      </footer>
    </div>
  );
}

export default CardTab;
