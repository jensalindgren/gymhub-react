// React
import React, { useState } from "react";
// Components
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import CommentEditForm from "./CommentEditForm";
// Styles
import styles from "../../styles/Comment.module.css";
// Context
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// API
import { axiosInstance } from "../../api/axiosDefaults";
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
  
    const [showEditForm, setShowEditForm] = useState(false);
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;

    /**
     * Delete comment function
     */
  
    const handleDelete = async () => {
        try {
          console.log("Deleting comment with ID:", id); // Log the ID before deletion
          await axiosInstance.delete(`/comments/${id}/`);
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
            return {
              ...prevComments,
              results: updatedResults,
            };
          });
      
          NotificationManager.success("Comment deleted");
        } catch (err) {
          NotificationManager.error("Failed to delete comment");
        }
      };
  
      return (
        <>
          <hr />
          <Media>
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_image} />
            </Link>
            <Media.Body className="align-self-center ml-2">
              <span className={styles.Owner}>{owner}</span>
              <span className={styles.Date}>{updated_at}</span>
              {showEditForm ? (
                <CommentEditForm
                  id={id}
                  profile_id={profile_id}
                  content={content}
                  profileImage={profile_image}
                  setComments={setComments}
                  setShowEditForm={setShowEditForm}
                />
              ) : (
                <p>{content}</p>
              )}
            </Media.Body>
            {is_owner && !showEditForm && (
              <MoreDropdown
                handleEdit={() => setShowEditForm(true)}
                handleDelete={handleDelete}
              />
            )}
          </Media>
        </>
      );
    };
  
  export default Comment;