import { Typography } from "@mui/material";
import React from "react";
import ReactMarkdown from "react-markdown";
import "./markdown.css";

const Markdown = ({ content }) => {
  return (
    <Typography component="span">
      <ReactMarkdown
        className="markdown"
        style={{ "&p": { margin: 0 } }}
        children={content}
      />
    </Typography>
  );
};

export default Markdown;
