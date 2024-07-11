import React, { useState } from "react";

import { Card, Stack, Typography } from "@mui/material";
import LikeBox from "./LikeBox";
import "./PostCard.css";
import PostContentBox from "./PostContentBox";
import ContentDetails from "./ContentDetails";
import { AiFillMessage } from "react-icons/ai";
import HorizontalStack from "./util/HorizontalStack";
import { isLoggedIn, logoutUser } from "../helper/auth";
import { likePost, unlikePost } from "../api/posts";

const PostCard = (props) => {
  let postData = props.post;

  const [post, setPost] = useState(postData);
  const [likeCount, setLikeCount] = useState(post.likeCount);
  const handleLike = async (liked) => {
    let user = {
      username: isLoggedIn().username,
    };
    if (liked) {
      setLikeCount(likeCount + 1);
      await likePost(post._id, user);
    } else {
      setLikeCount(likeCount - 1);
      await unlikePost(post._id, user);
    }
  };
  return (
    <Card
      style={{ marginTop: "2rem" }}
      sx={{ padding: 0 }}
      className="post-card"
    >
      <Stack
        justifyContent="space-between "
        alignItems="center"
        spacing={1}
        sx={{
          backgroundColor: "grey.100",
          width: "50px",
        }}
      >
        <LikeBox likeCount={likeCount} liked={post.liked} onLike={handleLike} />
      </Stack>
      <PostContentBox post={post}>
        <div style={{ padding: "1rem" }}>
          <ContentDetails username={post.poster.username} />
          <Typography
            variant="h5"
            gutterBottom
            sx={{ overflow: "hidden", mt: 1, maxHeight: 125 }}
            className="title"
          >
            {post.title}
          </Typography>
          <div>{post.content}</div>
          <HorizontalStack sx={{ mt: 2 }} justifyContent="space-between">
            <HorizontalStack>
              <AiFillMessage />
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ fontWeight: "bold" }}
              >
                {post.commentCount}
              </Typography>
            </HorizontalStack>
          </HorizontalStack>
        </div>
      </PostContentBox>
    </Card>
  );
};

export default PostCard;
