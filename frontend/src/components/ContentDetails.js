import { Typography } from "@mui/material";
import React from "react";
import { AiFillMessage } from "react-icons/ai";
import HorizontalStack from "./util/HorizontalStack";
import UserAvatar from "./UserAvatar";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const ContentDetails = ({ username, createdAt, edited, preview }) => {
  return (
    <HorizontalStack sx={{}}>
      <UserAvatar width={30} height={30} username={username} />
      <Typography
        style={{ display: "flex", gap: "1rem" }}
        variant="subtitle2"
        color="text.secondary"
        gutterBottom
      >
        <Link
          color="inherit"
          underline="hover"
          onClick={(e) => {
            e.stopPropagation();
          }}
          to={"/users/" + username}
        >
          {username}
        </Link>
        {createdAt ? <Moment fromNow>{createdAt}</Moment> : <></>}
      </Typography>
    </HorizontalStack>
  );
};

export default ContentDetails;
