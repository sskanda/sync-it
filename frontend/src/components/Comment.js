import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Markdown from "./Markdown";
import ContentDetails from "./ContentDetails";
import Loading from "./Loading";
import { BsReply, BsReplyFill } from "react-icons/bs";
import { RiCloseLargeFill } from "react-icons/ri";
import PostEditor from "./PostEditor";

const Comment = (props) => {
  const theme = useTheme();
  const commentData = props.comment;
  const { depth } = props;
  const [comment, setComment] = useState(commentData);
  const [replying, setReplying] = useState(false);

  let style = {
    backgroundColor: depth % 2 === 1 ? "white" : theme.palette.grey[100],
    borderRadius: 1.5,
    mb: theme.spacing(2),
    padding: "1rem",
    mt: 2,
  };
  const handleSetReplying = () => {
    setReplying(!replying);
  };

  return (
    <Box sx={style}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">
          <ContentDetails
            username={comment.commenter.username}
            createdAt={comment.createdAt}
            edited={comment.edited}
          />
        </Typography>
        <div
          style={{
            display: "flex",
            cursor: "pointer",
            color: replying ? "red" : "blue",
          }}
          onClick={handleSetReplying}
        >
          {!replying ? (
            <>
              <BsReplyFill />
              <> Reply</>
            </>
          ) : (
            <RiCloseLargeFill />
          )}
        </div>
      </div>

      <Box sx={{ mt: 1 }} overflow="hidden">
        <Markdown content={comment.content} />
        {replying && (
          <Box sx={{ mt: 2 }}>
            <PostEditor>ReplyTest</PostEditor>
          </Box>
        )}
        {comment.children && (
          <Box sx={{ pt: theme.spacing(2) }}>
            {comment.children.map((reply, i) => (
              <Comment key={reply._id} comment={reply} depth={depth + 1} />
            ))}
            <IconButton variant="text" size="small" />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Comment;
