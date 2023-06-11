import React, { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { followHelper, unfollowHelper } from "../utils/utils";

const ProfileDataContext = createContext();
const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });

  const currentUser = useCurrentUser();

  const handleFollow = async (clickedProfile) => {
    try {
      const { data } = await axiosRes.post("/followers/", {
        followed: clickedProfile.id,
      });

      setProfileData((prevState) => {
        return {
          ...prevState,
          pageProfile: {
            results: prevState.pageProfile.results.map((profile) =>
              followHelper(profile, clickedProfile, data.id)
            ),
          },
          popularProfiles: {
            ...prevState.popularProfiles,
            results: prevState.popularProfiles.results.map((profile) =>
              followHelper(profile, clickedProfile, data.id)
            ),
          },
        };
      });
    } catch (err) {
      // Handle error appropriately (e.g., display error message to the user)
      console.error("Failed to follow:", err);
    }
  };

  const handleUnfollow = async (clickedProfile) => {
    try {
      await axiosRes.delete(`/followers/${clickedProfile.following_id}/`);

      setProfileData((prevState) => {
        return {
          ...prevState,
          pageProfile: {
            results: prevState.pageProfile.results.map((profile) =>
              unfollowHelper(profile, clickedProfile)
            ),
          },
          popularProfiles: {
            ...prevState.popularProfiles,
            results: prevState.popularProfiles.results.map((profile) =>
              unfollowHelper(profile, clickedProfile)
            ),
          },
        };
      });
    } catch (err) {
      // Handle error appropriately (e.g., display error message to the user)
      console.error("Failed to unfollow:", err);
    }
  };

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-followers_count"
        );
        setProfileData((prevState) => {
          return {
            ...prevState,
            popularProfiles: data,
          };
        });
      } catch (err) {
        // Handle error appropriately (e.g., display error message to the user)
        console.error("Failed to fetch popular profiles:", err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <ProfileDataContext.Provider value={profileData}>
      <SetProfileDataContext.Provider
        value={{ setProfileData, handleFollow, handleUnfollow }}
      >
        {children}
      </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
  );
};
