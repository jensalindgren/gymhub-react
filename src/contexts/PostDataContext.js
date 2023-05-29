// import { createContext, useContext, useEffect, useState } from "react";

// export const PostDataContext = createContext();
// export const SetPostDataContext = createContext();

// export const usePostData = () => useContext(PostDataContext);
// export const useSetPostData = () => useContext(SetPostDataContext);

// export const PostDataProvider = ({ children }) => {
//   const [postData, setPostData] = useState({
//     popularPosts: { results: [] },
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {

//         const response = await fetch("/api/popular-posts");
//         const data = await response.json();

//         setPostData((prevState) => ({
//           ...prevState,
//           popularPosts: data,
//         }));
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <PostDataContext.Provider value={postData}>
//       <SetPostDataContext.Provider value={setPostData}>
//         {children}
//       </SetPostDataContext.Provider>
//     </PostDataContext.Provider>
//   );
// };