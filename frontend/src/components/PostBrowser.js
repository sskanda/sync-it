import React, { useEffect, useState } from "react";
import { Card, Box, Typography } from "@mui/material";
import CreatePost from "./CreatePost";
import "./PostBrowser.css";
import Loading from "./Loading";
import PostCard from "./PostCard";
import { getPosts } from "../api/posts";
import { useSearchParams } from "react-router-dom";

const PostBrowser = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [search] = useSearchParams();

  const searchExists =
    search && search.get("search") && search.get("search").length > 0;

  const fetchPosts = async () => {
    setLoading(true);
    try {
      let data,
        query = {};
      if (props.contentType === "SearchPosts" && searchExists) {
        query.search = search.get("search");
      }

      data = await getPosts(query);

      if (!data.error) {
        setPosts(data.data);
        setCount(data.data.length);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <>
      <Card className="card">
        <CreatePost />
      </Card>

      {searchExists && (
        <Box>
          <Typography variant="h5" gutterBottom>
            Showing results for "{search.get("search")}"
          </Typography>
          <Typography color="text.secondary" variant="body2">
            {count} results found
          </Typography>
        </Box>
      )}

      {loading ? (
        <Loading />
      ) : posts.length === 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="20vh"
        >
          <Typography variant="h6" color="text.secondary">
            No posts available
          </Typography>
        </Box>
      ) : (
        posts.map((post) => <PostCard key={post._id} post={post} />)
      )}
    </>
  );
};

export default PostBrowser;
