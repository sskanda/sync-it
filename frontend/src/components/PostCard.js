import React from "react";

import { Box } from "@mui/system";
import {
  Button,
  Card,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import LikeBox from "./LikeBox";
import PostContentBox from "./PostContentBox";
const PostCard = (props) => {
  return (
    <Card
      style={{ marginTop: "2rem" }}
      sx={{ padding: 0 }}
      className="post-card"
    >
      <div>{props.post.poster}</div>
      <div>{props.post.title}</div>
      <div>{props.post.content}</div>
    </Card>
  );
};

export default PostCard;
