import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { Box, compose } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEdit, AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import Markdown from "./Markdown";
import Moment from "react-moment";
import { grey, red } from "@mui/material/colors";
const Comment = (props) => {
  const theme = useTheme();
  const commentData = props.comment.content;
  let style = {
    backgroundColor: theme.palette.grey[100],
    borderRadius: 1.5,
    mb: theme.spacing(2),
    padding: theme.spacing(0),
    mt: 2,
  };
  return (
    <Box sx={style}>
      <Box>
        <Typography variant="h6">
          <Link underline="hover">titlex</Link>
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          <Moment fromNow>CreatedAt</Moment>{" "}
        </Typography>
      </Box>
      <Box sx={{ mt: 1 }} overflow="hidden">
        <Markdown content="content" />
      </Box>
    </Box>
  );
};

export default Comment;
