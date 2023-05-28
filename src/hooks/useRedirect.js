import axios from "axios";
// React and Router
import { useEffect } from "react";
import { useHistory } from "react-router";

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();

  /**
   * Check the users authentication status and redirects the
   * user to the home page. This will only be called if the useRedirect
   * function is called
   */

  useEffect(() => {
    const handleMount = async () => {
      try {
        await axios.post("/dj-rest-auth/token/refresh/");
        // if user is logged in, the code below will run
        if (userAuthStatus === "loggedIn") {
          history.push("/home");
        }
      } catch (err) {
        // if user is not logged in, the code below will run
        if (userAuthStatus === "loggedOut") {
          history.push("/home");
        }
      }
    };

    handleMount();
  }, [history, userAuthStatus]);
};