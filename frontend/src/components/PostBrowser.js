import React from "react";
import { Button, Card, Link, Stack, Typography } from "@mui/material";
import CreatePost from "./CreatePost";
import "./PostBrowser.css";
import Loading from "./Loading";
const PostBrowser = () => {
  return (
    <>
      <Card className="card">
        <CreatePost></CreatePost>
      </Card>
      <Loading></Loading>
    </>
  );
};

export default PostBrowser;
