import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function SearchBox({onSearch}) {
  const [search, setSearch] = useState("");


  const handleInput = (event) => {
    setSearch(event.target.value);
  };

const handleSearch = (event) => {
  event.preventDefault();
  onSearch(search); 
};


  return (
    <Paper
      component="form"
      onSubmit={handleSearch}
      sx={{
        p: "2px 35px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // Centers the content horizontally
        width: 1200,
        margin: "auto", // Center the Paper itself horizontally
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search news"
        inputProps={{ "aria-label": "search news" }}
        onChange={handleInput}
        value={search}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
