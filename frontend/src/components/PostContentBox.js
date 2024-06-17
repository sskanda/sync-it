import { Box } from "@mui/material";
import React from "react";
import "react-router-dom";
import { useNavigate } from "react-router-dom";

const PostContentBox = (props) => {
  const { post } = props;
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          width: "92%",
          "&:hover": { backgroundColor: "grey.50", cursor: "pointer" },
        }}
        onClick={() => navigate("/posts/" + post._id)}
      >
        {props.children}
      </Box>
    </>
  );
};

export default PostContentBox;
