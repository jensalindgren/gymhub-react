// React and Router
import React from "react";
import { Link } from "react-router-dom";


/**
 * Post component for displaying popular post and links to the post
 * @component
 */

const Post = (props) => {
    const { post, mobile } = props;
    const { id, title, image, description } = post;
  
    return (
        <div className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}>
          <div>
            <Link className="align-self-center" to={`/posts/${id}`}>
              <div className="d-flex flex-column align-items-center">
                {image && <img src={image} alt="Post" width={70} height={70} />}
                <h5 className="ml-2">{title}</h5>
                <p className="mt-2">{description}</p>
              </div>
            </Link>
          </div>
        </div>
      );
    };
  
  export default Post;