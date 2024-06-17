import React from "react";

import { Card, Stack, Typography } from "@mui/material";
import LikeBox from "./LikeBox";
import "./PostCard.css";
import PostContentBox from "./PostContentBox";
import ContentDetails from "./ContentDetails";
import { AiFillMessage } from "react-icons/ai";
import HorizontalStack from "./util/HorizontalStack";
const PostCard = (props) => {
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
        <LikeBox />
      </Stack>
      <PostContentBox post={props.post}>
        <ContentDetails username={props.post.poster} />
        <Typography
          style={{ marginLeft: "10px" }}
          variant="h5"
          gutterBottom
          sx={{ overflow: "hidden", mt: 1, maxHeight: 125 }}
          className="title"
        >
          {props.post.title}
        </Typography>
        <div>{props.post.content}</div>
        <HorizontalStack sx={{ mt: 2 }} justifyContent="space-between">
          <HorizontalStack>
            <AiFillMessage />
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ fontWeight: "bold" }}
            >
              67
            </Typography>
          </HorizontalStack>
        </HorizontalStack>
      </PostContentBox>
    </Card>
  );
};

export default PostCard;
