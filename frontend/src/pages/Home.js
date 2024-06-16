import React from "react";
import { Container } from "@mui/material";
import GridLayout from "../components/GridLayout";
import Navbar from "../components/Navbar";
import PostBrowser from "../components/PostBrowser";

const Home = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <GridLayout left={<PostBrowser></PostBrowser>} right={<div>lo</div>} />
    </Container>
  );
};

export default Home;
