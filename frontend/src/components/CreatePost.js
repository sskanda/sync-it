import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { isLoggedIn } from "../helper/auth";

const CreatePost = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="outlined"
      size="medium"
      onClick={
        isLoggedIn()
          ? () => navigate("/posts/create")
          : () => navigate("/login")
      }
      sx={{
        gap: "0.2rem",
        whiteSpace: "nowrap",
      }}
    >
      <AiOutlinePlus style={{ flexShrink: 0 }} />
      <span>New Post</span>
    </Button>
  );
};

export default CreatePost;
