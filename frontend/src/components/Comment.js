import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { Box, compose } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEdit, AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import Markdown from "./Markdown";
import Moment from "react-moment";
import { grey, red } from "@mui/material/colors";
import ContentDetails from "./ContentDetails";
const Comment = (props) => {
  const theme = useTheme();
  const commentData = props.comment;
  const [comment, setComment] = useState(commentData);

  let style = {
    backgroundColor: theme.palette.grey[100],
    borderRadius: 1.5,
    mb: theme.spacing(2),
    padding: "1rem",
    mt: 2,
  };
  return (
    <Box sx={style}>
      <div>
        <Typography variant="h6">
          <ContentDetails
            username={comment.commenter.username}
            createdAt={comment.createdAt}
            edited={comment.edited}
          />
        </Typography>
      </div>
      <Box sx={{ mt: 1 }} overflow="hidden">
        <Markdown content={comment.content} />
      </Box>
    </Box>
  );
};

export default Comment;
