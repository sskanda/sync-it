import React, { useState, useEffect } from "react";
import CommentEditor from "./CommentEditor";
import Comment from "./Comment";
import { getComments } from "../api/posts";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const Comments = () => {
  const [comments, setComments] = useState(null);
  const params = useParams();

  const fetchComments = async () => {
    const data = await getComments(params);

    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <div style={{ marginTop: "2rem" }}>
      <CommentEditor label="What are your thoughts on this post?"></CommentEditor>

      {comments !== null ? (
        comments.map((comment, i) => <Comment key={i} comment={comment} />)
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default Comments;
