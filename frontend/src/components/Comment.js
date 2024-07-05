import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEdit, AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import Markdown from "./Markdown";
import Moment from "react-moment";
import ContentDetails from "./ContentDetails";
import Loading from "./Loading";

const Comment = (props) => {
  const theme = useTheme();
  const commentData = props.comment;
  const { depth } = props;
  const [comment, setComment] = useState(commentData);

  let style = {
    backgroundColor: depth % 2 === 1 ? "white" : theme.palette.grey[100],
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
        {comment.children && (
          <Box sx={{ pt: theme.spacing(2) }}>
            {comment.children.map((reply, i) => (
              <Comment key={reply._id} comment={reply} depth={depth + 1} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Comment;
