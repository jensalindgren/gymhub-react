// React
import React from "react";
// Bootstrap
import { Container } from "react-bootstrap";
// Styles
import appStyles from "../../App.module.css";
// Components
import Asset from "../../components/Asset";
// Contexts
import { useProfileData } from "../../contexts/ProfileDataContext";
import { usePostData } from "../../contexts/PostDataContext";
// Components
import Profile from "./Profile";
import PopularPosts from "../posts/PopularPosts";
// Styles
import styles from "../../styles/PopularProfiles.module.css";


const PopularProfiles = ({ mobile }) => {
  const { popularProfiles } = useProfileData();
  const { popularPosts } = usePostData();

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {popularProfiles.results.length ? (
        <>
          <h3> Most followed profiles.</h3>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularProfiles.results.slice(0, 4).map((profile) => (
                <Profile className={styles.h3} key={profile.id} profile={profile} mobile />
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

