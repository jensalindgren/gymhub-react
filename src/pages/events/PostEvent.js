import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { axiosInstance } from "../../api/axiosDefaults";
import { Container, Row, Col, Card, Media, Button } from "react-bootstrap";
import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Events.module.css";
import Asset from "../../components/Asset";
import btnStyles from "../../styles/Button.module.css";
import { NotificationManager } from "react-notifications";

function PostEvent() {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true); // Add a loading state
  const currentUser = useCurrentUser();
  const history = useHistory();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { data } = await axiosInstance.get(`/events/${id}`);
        setEvent(data);
        setLoading(false); // Update the loading state once data is fetched
      } catch (err) {
        console.log(err);
        setLoading(false); // Handle error and update the loading state
      }
    };

    fetchEvent();
  }, [id]);

  const handleDelete = async (eventId) => {
    if (currentUser && event.user && event.user.id === currentUser.id) {
      try {
        await axiosInstance.delete(`/events/${eventId}/`);
        // Perform any additional actions after deletion
        history.push("/events");
      } catch (error) {
        // Handle error
      }
    } else {
      NotificationManager.error( "You are not authorized to delete this event.");
    }
  };

  const handleEdit = (eventId) => {
    if (currentUser && event.user && event.user.id === currentUser.id) {
      history.push(`/events/${eventId}/edit`);
    } else {
      NotificationManager.error( "You are not authorized to edit this event.");
    }
  };

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Container>
          {loading ? ( // Render the AssetSpinner while loading
            <Asset spinner />
          ) : (
            <Card>
              <Card.Body>
                <Media className="align-items-center justify-content-between">
                  <div>
                    {event.user && (
                      <Link to={`/profiles/${event.user.profile_id}`}>
                        {event.user.username}
                      </Link>
                    )}
                  </div>
                  <div className="d-flex align-items-center">
                    <span>{event.updated_at}</span>
                  </div>
                </Media>
              </Card.Body>
              <Link to={`/events/${event.id}`}>
                <Card.Img src={event.image} alt={event.title} />
              </Link>
              <Card.Body>
                {event.title && (
                  <Card.Title className="text-center">
                    {event.title}
                  </Card.Title>
                )}
                {event.content && (
                  <Card.Text className={styles.EventDescription}>
                    <div className={styles.EventContent}>
                      <strong>Content:</strong> {event.content}
                    </div>
                  </Card.Text>
                )}
                {event.description && (
                  <Card.Text className={styles.EventDescription}>
                    <strong>Description:</strong> {event.description}
                  </Card.Text>
                )}
                <div className={styles.PostBar}>
                  <Button
                    className={`${btnStyles.button} `}
                    onClick={() => handleDelete(event.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    className={`${btnStyles.button} `}
                    onClick={() => handleEdit(event.id)}
                  >
                    Edit
                  </Button>
                  {/* Add your other event-related buttons and actions here */}
                </div>
              </Card.Body>
            </Card>
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PostEvent;