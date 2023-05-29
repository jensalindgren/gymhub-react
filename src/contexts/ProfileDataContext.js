// import { createContext, useContext, useEffect, useState } from "react";
// import { useCurrentUser } from "../contexts/CurrentUserContext";

// export const ProfileDataContext = createContext();
// export const SetProfileDataContext = createContext();

// export const useProfileData = () => useContext(ProfileDataContext);
// export const useSetProfileData = () => useContext(SetProfileDataContext);

// export const ProfileDataProvider = ({ children }) => {
//   const [profileData, setProfileData] = useState({
//     pageProfile: { results: [] },
//     popularProfiles: { results: [] },
//   });

//   const currentUser = useCurrentUser();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {

//         const response = await fetch("/api/popular-profiles");
//         const data = await response.json();

//         setProfileData((prevState) => ({
//           ...prevState,
//           popularProfiles: data,
//         }));
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchData();
//   }, [currentUser]);

//   return (
//     <ProfileDataContext.Provider value={profileData}>
//       <SetProfileDataContext.Provider value={setProfileData}>
//         {children}
//       </SetProfileDataContext.Provider>
//     </ProfileDataContext.Provider>
//   );
// };