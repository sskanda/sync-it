import React, { useState, useEffect } from "react";
import CommentEditor from "./CommentEditor";
import Comment from "./Comment";
import { getComments } from "../api/posts";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [rerender, setRerender] = useState(false);
  const params = useParams();

  const fetchComments = async () => {
    setIsLoading(true); // Set loading to true before fetching
    const data = await getComments(params);
    setComments(data);
    setIsLoading(false); // Set loading to false after fetching
  };

  const addComments = (comment) => {
    setComments(comment);
    setRerender(!rerender); // Toggle rerender state to trigger useEffect
  };

  useEffect(() => {
    fetchComments();
  }, [rerender]);

  return (
    <div style={{ marginTop: "2rem" }}>
      <CommentEditor
        label="What are your thoughts on this post?"
        addComments={addComments}
      />

      {isLoading ? (
        <Loading />
      ) : comments.length > 0 ? (
        comments.map((comment, i) => (
          <Comment
            key={i}
            comment={comment}
            depth={0}
            addComments={addComments}
          />
        ))
      ) : (
        <p>No comments yet. Be the first to comment!</p>
      )}
    </div>
  );
};

export default Comments;
