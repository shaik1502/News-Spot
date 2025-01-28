import React, { useEffect, useState } from "react";
import CardTab from "./CardTab";
import SearchBox from "./SearchBox";
import axios from "axios";

function MainPage() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("mobiles");

  // const API_KEY = import.meta.env.VITE_API_KEY1;
  // const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;

  const API_KEY = import.meta.env.VITE_API_KEY2;
  const url =
    `https://gnews.io/api/v4/search?q=${query}&lang=en&max=10&apikey=` +
    API_KEY;

  async function fetchNews() {
    try {
      const { data } = await axios.get(url);
      setArticles(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }
  useEffect(() => {
    fetchNews();
  }, [query]);

  console.log(articles);
  const handleSearch = (searchTerm) => {
    setQuery(searchTerm); // Update the query when a new search term is provided
  };

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      <CardTab articles={articles} />
    </div>
  );
}

export default MainPage;
