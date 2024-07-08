import React, { useState, useEffect } from "react";
import CommentEditor from "./CommentEditor";
import Comment from "./Comment";
import { getComments } from "../api/posts";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const Comments = () => {
  const [comments, setComments] = useState(null);
  const [rerender, setRerender] = useState(false);
  const params = useParams();

  const fetchComments = async () => {
    const data = await getComments(params);
    setComments(data);
  };

  const addComments = (comment) => {
    setComments(comment);
  };

  useEffect(() => {
    fetchComments();
  }, [comments]);
  return (
    <div style={{ marginTop: "2rem" }}>
      <CommentEditor
        label="What are your thoughts on this post?"
        addComments={addComments}
      ></CommentEditor>

      {comments !== null && comments.length > 0 ? (
        comments.map((comment, i) => (
          <Comment
            key={i}
            comment={comment}
            depth={0}
            addComments={addComments}
          />
        ))
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default Comments;
