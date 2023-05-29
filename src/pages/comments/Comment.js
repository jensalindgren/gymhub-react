// React
import React from "react";
// Components
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
// Styles
import styles from "../../styles/Comment.module.css";
// Context
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// API
import { axiosRes } from "../../api/axiosDefaults";
// Notifications
import { NotificationManager } from "react-notifications";


/**
 * Comment
 * @component
 */

const Comment = (props) => {
    const {
      profile_id,
      profile_image,
      owner,
      updated_at,
      content,
      id,
      setPost,
      setComments,
    } = props;
  
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    /**
     * Delete comment function
     */
  
    const handleDelete = async () => {
        try {
          console.log("Deleting comment with ID:", id); // Log the ID before deletion
          await axiosRes.delete(`/comments/${id}/`);
          // Delay the state update for a short period
          await new Promise(resolve => setTimeout(resolve, 500));
          setPost((prevPost) => ({
            results: [
              {
                ...prevPost.results[0],
                comments_count: prevPost.results[0].comments_count - 1,
              },
            ],
          }));
      
          setComments((prevComments) => {
            const updatedResults = prevComments.results.filter(
              (comment) => comment.id !== id
            );
            console.log("Prev Comments:", prevComments.results);
            console.log("Updated Comments:", updatedResults);
            return {
              ...prevComments,
              results: updatedResults,
            };
          });
      
          NotificationManager.success("Comment deleted successfully");
        } catch (err) {
          console.error(err);
          NotificationManager.error("Failed to delete comment");
        }
      };
  
    return (
        <div>
          <hr />
          <Media>
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_image} />
            </Link>
            <Media.Body className="align-self-center ml-2">
              <span className={styles.Owner}>{owner}</span>
              <span className={styles.Date}>{updated_at}</span>
              <p>{content}</p>
            </Media.Body>
            {is_owner && (
              <MoreDropdown handleEdit={() => {}} handleDelete={handleDelete} />
            )}
          </Media>
        </div>
      );
    };
  
  export default Comment;