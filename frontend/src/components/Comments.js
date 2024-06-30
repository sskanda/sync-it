import React from "react";
import CommentEditor from "./CommentEditor";

const Comments = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <CommentEditor label="What are your thoughts on this post?"></CommentEditor>
    </div>
  );
};

export default Comments;
