import React from "react";
import { Container } from "@mui/material";
import GridLayout from "../components/GridLayout";
import Navbar from "../components/Navbar";
import PostBrowser from "../components/PostBrowser";
import SideBar from "../components/SideBar";
import GoBack from "../components/GoBack";

const SearchView = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <GoBack></GoBack>
      <GridLayout
        left={<PostBrowser createPost contentType="posts"></PostBrowser>}
        right={<SideBar></SideBar>}
      />
    </Container>
  );
};

export default SearchView;
