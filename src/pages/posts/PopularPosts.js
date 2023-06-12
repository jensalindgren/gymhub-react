// React
import React from "react";
// Router
import { Link } from "react-router-dom";
// Styles
import styles from "../../styles/PostInfo.module.css";

/**
 * Post component for displaying popular post and links to the post
 * @component
 */

const Post = (props) => {
  const { post, mobile } = props;
  const { id, image } = post;

  return (
    <div className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}>
      <div>
        <Link className="align-self-center" to={`/posts/${id}`}>
          <div className={`d-flex flex-column align-items-center ${styles.postInfoContainer}`}>
            {image && (
              <img
                src={image}
                alt="Post"
                className={styles.postImage}
              />
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Post;