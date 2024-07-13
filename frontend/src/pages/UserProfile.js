import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import GridLayout from "../components/GridLayout";
import ProfileTabs from "../components/ProfileTabs";
import GoBack from "../components/GoBack";
import Profile from "../components/Profile";
import { getUser } from "../api/users";

const UserProfile = () => {
  const [tab, setTab] = useState("posts");
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const params = useParams();
  const fetchUser = async () => {
    const data = await getUser(params);

    setProfile(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Container>
      <Navbar />
      <GoBack></GoBack>
      <GridLayout
        left={<ProfileTabs tab={tab} setTab={setTab} />}
        right={<Profile profile={profile}></Profile>}
      />
    </Container>
  );
};

export default UserProfile;
