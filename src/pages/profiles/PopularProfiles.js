// React
import React, { useEffect, useState } from "react";
// Bootstrap
import { Container } from "react-bootstrap";
// API
import { axiosReq } from "../../api/axiosDefaults";
// Styles
import appStyles from "../../App.module.css";
// Components
import Asset from "../../components/Asset";
// Contexts
import { useCurrentUser } from "../../contexts/CurrentUserContext";

/**
 * Popular profiles
 * @component
 */

const PopularProfiles = () => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
    popularPosts: { results: [] },
  });
  const { popularProfiles, popularPosts } = profileData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch popular profiles
        const { data: profileData } = await axiosReq.get(
          "/profiles/?ordering=-followers_count"
        );

        // Fetch popular posts
        const { data: postData } = await axiosReq.get(
          "/posts/?ordering=-likes_count"
        );

        setProfileData((prevState) => ({
          ...prevState,
          popularProfiles: profileData,
          popularPosts: postData,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [currentUser]);

  return (
    <Container className={appStyles.Content}>
      {popularProfiles.results.length ? (
        <>
          <h3>Most followed profiles.</h3>
          {popularProfiles.results.map((profile) => (
            <p key={profile.id}>{profile.owner}</p>
          ))}
        </>
      ) : (
        <Asset spinner />
      )}

      {popularPosts.results.length ? (
        <>
          <h3>Popular posts.</h3>
          {popularPosts.results.map((post) => (
            <p key={post.id}>{post.title}</p>
          ))}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;