import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
import GoBack from "../components/GoBack";
import SideBar from "../components/SideBar";
import GridLayout from "../components/GridLayout";
import PostCard from "../components/PostCard";
import { useParams } from "react-router-dom";
import { getPost } from "../api/posts";
import Loading from "../components/Loading";
import Comments from "../components/Comments";

const PostView = () => {
  // const posts = [
  //   { poster: "user1", title: "Title1", content: "content1" },
  //   { poster: "user2", title: "Title2", content: "content2" },
  //   { poster: "user3", title: "Title3", content: "content3" },
  // ];
  //   const postx = { poster: "user1", title: "Title1", content: "content1" };
  //console.log("data");
  const params = useParams();
  const [post, setPost] = useState(null);

  const fetchPost = async () => {
    const data = await getPost(params.id);
    setPost(data);
  };

  useEffect(() => {
    fetchPost();
  }, [params.id]);
  return (
    <Container>
      <Navbar />
      <GoBack />
      <GridLayout
        left={
          post ? (
            <>
              <PostCard post={post} /> <Comments></Comments>
            </>
          ) : (
            <Loading></Loading>
          )
        }
        right={<SideBar />}
      />
    </Container>
  );
};

export default PostView;
