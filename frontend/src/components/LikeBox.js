import { IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const LikeBox = (props) => {
  const likeCount = 5;
  const liked = false;
  return (
    <Stack alignItems="center">
      <IconButton sx={{ padding: 0.5 }}>
        {liked ? <AiFillLike /> : <AiOutlineLike />}
      </IconButton>
      <Typography>{likeCount}</Typography>
    </Stack>
  );
};

export default LikeBox;
