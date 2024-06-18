import React from "react";
import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
import GoBack from "../components/GoBack";
import SideBar from "../components/SideBar";
import GridLayout from "../components/GridLayout";
import PostEditor from "../components/PostEditor";

const CreatePostPage = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <GoBack></GoBack>
      <GridLayout left={<PostEditor />} right={<SideBar />} />
    </Container>
  );
};

export default CreatePostPage;
