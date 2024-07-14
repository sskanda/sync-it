import React, { useState, useEffect } from "react";
import { Button, Card, Stack, Typography } from "@mui/material";
import { getUserComments } from "../api/posts";
import SortPosts from "./SortPosts";
import Loading from "./Loading";
import Comment from "./Comment";

const UserComments = (props) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("-createdAt");

  const fetchComments = async () => {
    setLoading(true);

    let comments = await getUserComments({
      id: props.profileUser._id,
      query: { sortBy },
    });

    setComments(comments);
    setLoading(false);
  };

  useEffect(() => {
    fetchComments();
  }, [sortBy]);

  const handleSortBy = (e) => {
    const newSortName = e.target.value;
    let newSortBy;

    Object.keys(sorts).forEach((sortName) => {
      if (sorts[sortName] === newSortName) newSortBy = sortName;
    });

    setComments([]);
    setSortBy(newSortBy);
  };

  const sorts = {
    "-createdAt": "Latest",
    createdAt: "Earliest",
  };

  return (
    <Stack spacing={2}>
      <Card className="card">
        <SortPosts onSortBy={handleSortBy} sortBy={sortBy} sorts={sorts} />
      </Card>
      {loading ? (
        <Loading />
      ) : (
        <>
          {comments &&
            comments.map((comment) => (
              <Comment key={comment._id} comment={comment} profile />
            ))}

          <Stack py={5} alignItems="center">
            <Typography variant="h5" color="text.secondary" gutterBottom>
              {comments.length > 0 ? (
                <>All comments have been viewed</>
              ) : (
                <>No comments available</>
              )}
            </Typography>
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default UserComments;
