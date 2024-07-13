import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import { isLoggedIn } from "../helper/auth";
import { Card, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import HorizontalStack from "./util/HorizontalStack";
import UserAvatar from "./UserAvatar";

const Profile = (props) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const currentUser = isLoggedIn();
  useEffect(() => {
    if (props.profile) {
      setUser(props.profile.user);
    }
  }, [props.profile]);
  return (
    <Card>
      {user ? (
        <Stack alignItems="center" spacing={2}>
          <Box my={1}>
            <UserAvatar width={150} height={150} username={user.username} />
          </Box>

          <Typography variant="h5">{user.username}</Typography>

          <HorizontalStack>
            <Typography color="text.secondary">
              Likes <b>24</b>
            </Typography>
            <Typography color="text.secondary">
              Posts <b>43</b>
            </Typography>
          </HorizontalStack>
        </Stack>
      ) : (
        <Loading label="Loading profile" />
      )}
    </Card>
  );
};

export default Profile;
