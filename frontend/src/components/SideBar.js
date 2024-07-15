import React from "react";
import TrendingPosts from "./TrendingPosts";
import FindUsers from "./FindUsers";
import { Stack } from "@mui/material";

const SideBar = () => {
  return (
    <Stack spacing={2}>
      <TrendingPosts></TrendingPosts>
      <FindUsers></FindUsers>
    </Stack>
  );
};

export default SideBar;
