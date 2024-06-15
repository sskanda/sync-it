import React from "react";
import { Container } from "@mui/material";
import GridLayout from "../components/GridLayout";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <GridLayout left={<div>yo</div>} right={<div>lo</div>} />
    </Container>
  );
};

export default Home;
