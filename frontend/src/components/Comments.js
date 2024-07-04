import React from "react";
import CommentEditor from "./CommentEditor";
import Comment from "./Comment";

const Comments = () => {
  const comment = [
    { id: 1, content: "conten1" },
    { id: 2, content: "conten2" },
  ];
  return (
    <div style={{ marginTop: "2rem" }}>
      <CommentEditor label="What are your thoughts on this post?"></CommentEditor>

      {comment.map((comment, i) => (
        <Comment key={i} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
