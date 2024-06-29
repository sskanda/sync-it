import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import HorizontalStack from "./util/HorizontalStack";
import UserAvatar from "./UserAvatar";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../helper/auth";
import { createPost } from "../api/posts";
import "./PostEditor.css";
const PostEditor = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    username: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.username = isLoggedIn().username; //temp fix for jwt
    const data = await createPost(formData, isLoggedIn());
    navigate("/");
  };
  return (
    <Card className="post_editor_card">
      <Stack spacing={1}>
        <HorizontalStack spacing={2}>
          <UserAvatar width={50} height={50} />
          <Typography variant="h5">
            What would you like to post today ?
          </Typography>
        </HorizontalStack>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Title"
            required
            name="title"
            margin="normal"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Content"
            multiline
            rows={10}
            name="content"
            margin="normal"
            onChange={handleChange}
          />

          <Button
            variant="outlined"
            type="submit"
            fullWidth
            sx={{
              mt: 2,
            }}
          >
            <>Submit</>
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default PostEditor;
