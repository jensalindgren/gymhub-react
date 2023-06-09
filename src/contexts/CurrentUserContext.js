// // React and Router
// import { createContext, useContext, useEffect, useMemo, useState } from "react";
// // API
// import axios from "axios";
// import { axiosRes, axiosReq } from "../api/axiosDefaults";
// import { useHistory } from "react-router";
// import { removeTokenTimestamp, shouldRefreshToken } from "../utils/utils";

// // Export the context
// export const CurrentUserContext = createContext();
// export const SetCurrentUserContext = createContext();
// export const useCurrentUser = () => useContext(CurrentUserContext);
// export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

// export const CurrentUserProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const history = useHistory();

//   const handleMount = async () => {
//     try {
//       const { data } = await axiosRes.get("dj-rest-auth/user/");
//       setCurrentUser({ ...data, profile_image: data.profile_image });
//     } catch (err) {
//     }
//   };

//   useEffect(() => {
//     handleMount();
//   }, []);

//   useMemo(() => {
//     axiosReq.interceptors.request.use(
//       async (config) => {
//         if (shouldRefreshToken()) {
//           try {
//             await axios.post("/dj-rest-auth/token/refresh/");
//           } catch (err) {
//             setCurrentUser((prevCurrentUser) => {
//               if (prevCurrentUser) {
//                 history.push("/signin");
//               }
//               return null;
//             });
//             removeTokenTimestamp();
//             return config;
//           }
//         }
//         return config;
//       },
//       (err) => {
//         return Promise.reject(err);
//       }
//     );

//     axiosRes.interceptors.response.use(
//       (response) => response,
//       async (err) => {
//         if (err.response?.status === 401) {
//           try {
//             await axios.post("/dj-rest-auth/token/refresh/");
//           } catch (err) {
//             setCurrentUser((prevCurrentUser) => {
//               if (prevCurrentUser) {
//                 history.push("/signin");
//               }
//               return null;
//             });
//             removeTokenTimestamp();
//           }
//           return axios(err.config);
//         }
//         return Promise.reject(err);
//       }
//     );
//   }, [history]);

//   return (
//     <CurrentUserContext.Provider value={currentUser}>
//       <SetCurrentUserContext.Provider value={setCurrentUser}>
//         {children}
//       </SetCurrentUserContext.Provider>
//     </CurrentUserContext.Provider>
//   );
// };

// React and Router
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router";
// API
import axios from "axios";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
// Utils
import { removeTokenTimestamp, shouldRefreshToken } from "../utils/utils";

/**
 * Create the CurrentUserContext
 */
export const CurrentUserContext = createContext();

/**
 * Create the SetCurrentUserContext
 */
export const SetCurrentUserContext = createContext();

/**
 * Function to retrieve the CurrentUserContext
 */
export const useCurrentUser = () => useContext(CurrentUserContext);

/**
 * Function to retrieve the SetCurrentUserContext
 */
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  /**
   * API request to fetch the users data and set it to the
   * currentUser state
   */
  const handleMount = async () => {
    try {
      const { data } = await axiosRes.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {}
  };

  useEffect(() => {
    handleMount();
  }, []);

  /**
   * axios request interceptors to check local storage for jwt refresh tokens
   */
  useMemo(() => {
    axiosReq.interceptors.request.use(
      async (config) => {
        if (shouldRefreshToken()) {
          try {
            await axios.post("/dj-rest-auth/token/refresh/");
          } catch (err) {
            setCurrentUser((prevCurrentUser) => {
              if (prevCurrentUser) {
                history.push("/signin");
              }
              return null;
            });
            removeTokenTimestamp();
            return config;
          }
        }
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );

    axiosRes.interceptors.response.use(
      (response) => response,
      async (err) => {
        if (err.response?.status === 401) {
          try {
            await axios.post("/dj-rest-auth/token/refresh/");
          } catch (err) {
            setCurrentUser((prevCurrentUser) => {
              if (prevCurrentUser) {
                history.push("/signin");
              }
              return null;
            });
            removeTokenTimestamp();
          }
          return axios(err.config);
        }
        return Promise.reject(err);
      }
    );
  }, [history]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};