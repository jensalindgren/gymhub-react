// React
import React, { useEffect, useState } from "react";
// Bootstrap
import { Container } from "react-bootstrap";

// API
import { axiosReq } from "../../api/axiosDefaults";
// Styles
import appStyles from "../../App.module.css";
// Components
import Profile from "./Profile";
// Assets
import Asset from "../../components/Asset";
// Contexts
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import PopularPosts from  "../posts/PopularPosts";


/**
 * Popular profiles
 * @component
 */

const PopularProfiles = ({ mobile }) => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
    popularPosts: { results: [] },
  });
  const { popularProfiles, popularPosts } = profileData;
  const currentUser = useCurrentUser();


  /**
   * Fetch popular profiles and posts
   */

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
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {popularProfiles.results.length ? (
        <>
          <p>Most followed profiles.</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularProfiles.results.slice(0, 4).map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            popularProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}

      {popularPosts.results.length ? (
        <>
          <h3>Popular posts.</h3>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularPosts.results.slice(0, 4).map((post) => (
                <PopularPosts key={post.id} post={post} mobile />
              ))}
            </div>
          ) : (
            popularPosts.results.map((post) => (
              <PopularPosts key={post.id} post={post} />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;