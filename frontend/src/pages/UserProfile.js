import React, { useState, useEffect } from "react";
import { Container, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import GridLayout from "../components/GridLayout";
import ProfileTabs from "../components/ProfileTabs";
import GoBack from "../components/GoBack";
import Profile from "../components/Profile";
import { getUser } from "../api/users";
import PostBrowser from "../components/PostBrowser";
import Loading from "../components/Loading";
import UserComments from "../components/UserComments";
import FindUsers from "../components/FindUsers";

const UserProfile = () => {
  const [tab, setTab] = useState("posts");
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const params = useParams();
  const fetchUser = async () => {
    const data = await getUser(params);
    setProfile(data);
  };

  let tabs;
  if (profile) {
    tabs = {
      posts: (
        <PostBrowser
          profileUser={profile.user}
          contentType="posts"
          key="posts"
        />
      ),
      liked: (
        <PostBrowser
          profileUser={profile.user}
          contentType="liked"
          key="liked"
        />
      ),
      comments: <UserComments profileUser={profile.user} />,
    };
  }

  useEffect(() => {
    fetchUser();
  }, [params.id]);

  return (
    <Container>
      <Navbar />
      <GoBack></GoBack>
      <GridLayout
        left={
          <Stack spacing={2}>
            {profile ? (
              <>
                <ProfileTabs tab={tab} setTab={setTab} />

                {tabs[tab]}
              </>
            ) : (
              <Loading />
            )}
          </Stack>
        }
        right={
          <Stack spacing={2}>
            <Profile profile={profile}></Profile>
            <FindUsers></FindUsers>
          </Stack>
        }
      />
    </Container>
  );
};

export default UserProfile;
