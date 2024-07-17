import React, { useState } from "react";
import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import HorizontalStack from "./util/HorizontalStack";
import { Box } from "@mui/system";
import { createComment } from "../api/posts";
import { isLoggedIn, logoutUser } from "../helper/auth";
import { useNavigate, useParams } from "react-router-dom";
const CommentEditor = ({ label, comment, addComments, addCommentsz }) => {
  const [formData, setFormData] = useState({
    content: "",
  });
  const navigate = useNavigate();
  const params = useParams();
  const handleSubmit = async (e) => {
    if (isLoggedIn()) {
      e.preventDefault();
      formData.username = isLoggedIn().username; //temp fix for jwt
      const body = {
        ...formData,
        parentId: comment && comment._id,
      };
      const data = await createComment(body, params, isLoggedIn());

      addComments(data);
      formData.content = "";
    } else {
      navigate("/login");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Card style={{ padding: "15px" }}>
      <Stack spacing={2}>
        <HorizontalStack justifyContent="space-between">
          <Typography variant="h5">
            {comment ? <>Reply</> : <>Comment</>}
          </Typography>
        </HorizontalStack>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            multiline
            fullWidth
            label={label}
            rows={5}
            required
            name="content"
            sx={{
              backgroundColor: "white",
            }}
            onChange={handleChange}
            value={formData.content}
          />

          <Button
            variant="outlined"
            type="submit"
            fullWidth
            sx={{
              backgroundColor: "white",
              mt: 2,
            }}
          >
            <div>Submit</div>
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default CommentEditor;
