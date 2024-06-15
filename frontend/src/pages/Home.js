import React from "react";
import { Container } from "@mui/material";
import GridLayout from "../components/GridLayout";

const Home = () => {
  return (
    <Container>
      <GridLayout left={<div>yo</div>} right={<div>lo</div>} />
    </Container>
  );
};

export default Home;
