import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";

const PostDataContext = createContext();
const SetPostDataContext = createContext();

export const usePostData = () => useContext(PostDataContext);
export const useSetPostData = () => useContext(SetPostDataContext);

export const PostDataProvider = ({ children }) => {
  const [postData, setPostData] = useState({
    popularPosts: { results: [] },
  });

  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const response = await axiosReq.get("/posts/?ordering=-likes_count");
        setPostData((prevState) => ({
          ...prevState,
          popularPosts: response.data,
        }));
      } catch (error) {
      }
    };

    fetchPopularPosts();
  }, []);

  return (
    <PostDataContext.Provider value={postData}>
      <SetPostDataContext.Provider value={setPostData}>
        {children}
      </SetPostDataContext.Provider>
    </PostDataContext.Provider>
  );
};