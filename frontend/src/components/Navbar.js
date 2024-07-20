import React, { useEffect, useState } from "react";
import { Stack, TextField, Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logoutUser } from "../helper/auth";
import "./Navbar.css";
import UserAvatar from "./UserAvatar";
const Navbar = () => {
  const user = isLoggedIn();
  const username = user && isLoggedIn().username;
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search?" + new URLSearchParams({ search }));
  };
  const handleLogout = async (e) => {
    logoutUser();
    navigate("/login");
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Stack mb={2} className="nav">
      <div className="nav-links">
        <span className="socialx-title">SocialX</span>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            size="small"
            label="Search for posts..."
            sx={{ flexGrow: 1, maxWidth: 300 }}
            onChange={handleChange}
            value={search}
          />
        </Box>
        {user ? (
          <div>
            <IconButton component={Link} to={"/users/" + username}>
              <UserAvatar width={30} height={30} username={user.username} />
            </IconButton>
            <Button
              onClick={handleLogout}
              variant="text"
              sx={{ minWidth: 65 }}
              href="/login"
            >
              LOGOUT
            </Button>
          </div>
        ) : (
          <>
            <Button variant="text" sx={{ minWidth: 80 }} href="/signup">
              Sign Up
            </Button>
            <Button variant="text" sx={{ minWidth: 65 }} href="/login">
              Login
            </Button>
          </>
        )}
      </div>
    </Stack>
  );
};

export default Navbar;
