import React, { useEffect, useState } from "react";
import { Stack, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    //navigate("/search?" + new URLSearchParams({ search }));
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Stack mb={2} className="nav">
      <div className="nav-links">
        <span>SocialX</span>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            size="small"
            label="Search for posts..."
            sx={{ flexGrow: 1, maxWidth: 300 }}
            onChange={handleChange}
            value={search}
          />
        </Box>
        <>
          <Button variant="text" sx={{ minWidth: 80 }} href="/signup">
            Sign Up
          </Button>
          <Button variant="text" sx={{ minWidth: 65 }} href="/login">
            Login
          </Button>
        </>
      </div>
    </Stack>
  );
};

export default Navbar;
