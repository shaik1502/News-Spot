import React, { useEffect, useState } from "react";
import CardTab from "./CardTab";
import SearchBox from "./searchbox";

function MainPage() {
  const [articles, setArticles] = useState([]); // State for news articles
  const [query, setQuery] = useState("mobiles"); // State for search query

  const API_KEY = "da17f57c22034e9c9b442ae0b3c6dffb";

  // Function to fetch news based on the current query
  async function fetchNews() {
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setArticles(data.articles || []); // Update articles in state
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }

  // Fetch news whenever `query` changes
  useEffect(() => {
    fetchNews();
  }, [query]);

  // Handler for search input
  const handleSearch = (searchTerm) => {
    setQuery(searchTerm); // Update query when the user performs a search
  };

  return (
    <div>
      {/* SearchBox for user input */}
      <SearchBox onSearch={handleSearch} />
      {/* Display fetched articles */}
      <CardTab articles={articles} />
    </div>
  );
}

export default MainPage;
