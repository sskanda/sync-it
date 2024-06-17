import React from "react";
import { Button, Card, Link, Stack, Typography } from "@mui/material";
import CreatePost from "./CreatePost";
import "./PostBrowser.css";
import Loading from "./Loading";
import PostCard from "./PostCard";
const PostBrowser = () => {
  const posts = [
    { poster: "user1", title: "Title1", content: "content1" },
    { poster: "user2", title: "Title2", content: "content2" },
    { poster: "user3", title: "Title3", content: "content3" },
  ];
  return (
    <>
      <Card className="card">
        <CreatePost></CreatePost>
      </Card>
      <Loading></Loading>

      {posts.map((post) => (
        <PostCard post={post}></PostCard>
      ))}
    </>
  );
};

export default PostBrowser;
