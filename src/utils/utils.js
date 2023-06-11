// API
import { axiosReq } from "../api/axiosDefaults";
// JWT
import jwtDecode from "jwt-decode";

/**
 * Function to retrieve additional data
 */
export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {}
};

export const followHelper = (profile, clickedProfile, following_id) => {
  if (!profile || !clickedProfile) {
    // Handle error: Invalid input, either profile or clickedProfile is undefined or null
    return profile;
  }

  if (profile.id === clickedProfile.id) {
    // This is the profile I clicked on
    // Update its followers count and set its following id
    return {
      ...profile,
      followers_count: profile.followers_count + 1,
      following_id,
    };
  } else if (profile.is_owner) {
    // This is the profile of the logged in user
    // Update its following count
    return {
      ...profile,
      following_count: profile.following_count + 1,
    };
  } else {
    // This is not the profile the user clicked on or the profile the user owns
    // Return it unchanged
    return profile;
  }
};

export const unfollowHelper = (profile, clickedProfile) => {
  if (!profile || !clickedProfile) {
    // Handle error: Invalid input, either profile or clickedProfile is undefined or null
    return profile;
  }

  if (profile.id === clickedProfile.id) {
    // This is the profile I clicked on
    // Update its followers count and set its following id
    return {
      ...profile,
      followers_count: profile.followers_count - 1,
      following_id: null,
    };
  } else if (profile.is_owner) {
    // This is the profile of the logged in user
    // Update its following count
    return {
      ...profile,
      following_count: profile.following_count - 1,
    };
  } else {
    // This is not the profile the user clicked on or the profile the user owns
    // Return it unchanged
    return profile;
  }
};


/**
 * Function to set a new jwt token timestamp in the local storage
 */
export const setTokenTimestamp = (data) => {
  const refreshTokenTimestamp = jwtDecode(data?.refresh_token).exp;
  localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
};

/**
 * Function to check if there is a refresh token in the local storage
 */
export const shouldRefreshToken = () => {
  return !!localStorage.getItem("refreshTokenTimestamp");
};

/**
 * Function to remove to token from the local storage
 */
export const removeTokenTimestamp = () => {
  localStorage.removeItem("refreshTokenTimestamp");
};