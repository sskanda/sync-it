import React, { useEffect, useState } from "react";
import { Card, Box, Typography } from "@mui/material";
import CreatePost from "./CreatePost";
import "./PostBrowser.css";
import Loading from "./Loading";
import PostCard from "./PostCard";
import { getPosts, getUserLikedPosts } from "../api/posts";
import { useParams, useSearchParams } from "react-router-dom";
import SortPosts from "./SortPosts";

const PostBrowser = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [search] = useSearchParams();
  const [sortBy, setSortBy] = useState("-createdAt");

  const params = useParams();
  const searchExists =
    search && search.get("search") && search.get("search").length > 0;

  const fetchPosts = async () => {
    setLoading(true);
    try {
      let data,
        query = { sortBy };

      if (props.contentType === "posts") {
        if (props.profileUser) query.author = props.profileUser.username;
        if (searchExists) query.search = search.get("search");
        data = await getPosts(query);
      } else if (props.contentType === "liked") {
        data = await getUserLikedPosts(props.profileUser._id, query);
      }

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

  const handleSortBy = (e) => {
    const newSortName = e.target.value;
    let newSortBy;

    Object.keys(sortTypes).forEach((sortName) => {
      if (sortTypes[sortName] === newSortName) newSortBy = sortName;
    });

    setPosts([]);
    setSortBy(newSortBy);
  };

  const sortTypes = {
    "-createdAt": "Latest",
    "-likeCount": "Likes",
    "-commentCount": "Comments",
    createdAt: "Earliest",
  };

  useEffect(() => {
    fetchPosts();
  }, [sortBy, search, params.id]);

  return (
    <>
      <Card className="card">
        {props.createPost && <CreatePost />}
        <SortPosts
          onSortBy={handleSortBy}
          sortBy={sortBy}
          sorts={sortTypes}
        ></SortPosts>
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
