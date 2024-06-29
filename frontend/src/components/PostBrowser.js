import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";
import CreatePost from "./CreatePost";
import "./PostBrowser.css";
import Loading from "./Loading";
import PostCard from "./PostCard";
import { getPosts } from "../api/posts";
import { isLoggedIn } from "../helper/auth";

const PostBrowser = () => {
  // const posts = [
  //   { poster: "user1", title: "Title1", content: "content1" },
  //   { poster: "user2", title: "Title2", content: "content2" },
  //   { poster: "user3", title: "Title3", content: "content3" },
  // ];
  console.log(isLoggedIn());
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    try {
      let data;

      data = await getPosts();

      if (!data.error) setPosts([...posts, ...data.data]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <Card className="card">
        <CreatePost></CreatePost>
      </Card>
      <Loading></Loading>

      {posts.map((post, i) => (
        <PostCard key={post._id} post={post} />
      ))}
    </>
  );
};

export default PostBrowser;
