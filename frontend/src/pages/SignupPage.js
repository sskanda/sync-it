import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/users";
import { loginUser } from "../helper/auth";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await signup(formData);

    if (data.error) {
    } else {
      loginUser(data);
      navigate("/");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth={"xs"} sx={{ mt: { xs: 2, md: 6 } }}>
      <Stack alignItems="center">
        <Typography variant="h2" color="text.secondary" sx={{ mb: 6 }}>
          <Link to="/" color="inherit" underline="none">
            SocialX
          </Link>
        </Typography>
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>
        <Typography color="text.secondary">
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            autoFocus
            required
            id="username"
            name="username"
            onChange={handleChange}
          />
          <TextField
            label="Email Address"
            fullWidth
            margin="normal"
            autoComplete="email"
            required
            id="email"
            name="email"
            onChange={handleChange}
          />
          <TextField
            label="Password"
            fullWidth
            required
            margin="normal"
            autoComplete="password"
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ my: 2 }}>
            Sign Up
          </Button>
        </Box>
        <Box sx={{ mt: 3 }}></Box>
      </Stack>
    </Container>
  );
};

export default SignupPage;
