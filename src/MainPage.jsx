import React, { useEffect, useState } from "react";
import CardTab from "./CardTab";
import SearchBox from "./searchbox";

function MainPage() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("mobiles");


  const API_KEY = "da17f57c22034e9c9b442ae0b3c6dffb";
  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;

 
  // Function to fetch news based on query
  async function fetchNews() {
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setArticles(data.articles || []);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }

  // Fetch news whenever `query` changes
  useEffect(() => {
    fetchNews();
  }, [query]);



     const handleSearch = (searchTerm) => {
       setQuery(searchTerm); // Update the query when a new search term is provided
     };
  
  return (
    <div>
      <SearchBox onSearch={handleSearch}/>
      <CardTab articles={articles} />
    </div>
  );
}

export default MainPage;
