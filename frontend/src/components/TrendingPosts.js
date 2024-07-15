import React, { useEffect, useState } from "react";
import { Card, Stack, Typography } from "@mui/material";
import { MdLeaderboard } from "react-icons/md";
import { FiTrendingUp } from "react-icons/fi";
import HorizontalStack from "./util/HorizontalStack";
import "./TrendingPosts.css";
import { isLoggedIn } from "../helper/auth";
import { getPosts } from "../api/posts";
import Loading from "./Loading";
import PostCard from "./PostCard";

const TrendingPosts = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const user = isLoggedIn();

  const fetchPosts = async () => {
    const query = { sortBy: "-likeCount" };

    const data = await getPosts(query);

    const topPosts = [];

    if (data && data.data) {
      for (let i = 0; i < 3 && i < data.data.length; i++) {
        topPosts.push(data.data[i]);
      }
    }

    setPosts(topPosts);

    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Stack spacing={2}>
      <Card className="head">
        <HorizontalStack>
          <FiTrendingUp />
          <Typography>Trending</Typography>
        </HorizontalStack>
      </Card>
      {!loading ? (
        posts &&
        posts.map((post) => (
          <PostCard preview="secondary" post={post} key={post._id} />
        ))
      ) : (
        <Loading />
      )}
    </Stack>
  );
};

export default TrendingPosts;
