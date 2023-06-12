// React
import React, { useEffect, useState } from "react";
// React Router
import { Link, useParams, useHistory } from "react-router-dom";
// API
import { axiosInstance } from "../../api/axiosDefaults";
// Bootstrap
import { Container, Row, Col, Card, Media, Button } from "react-bootstrap";
// Components
import PopularProfiles from "../profiles/PopularProfiles";
// Contexts
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// Styles
import styles from "../../styles/Events.module.css";
import btnStyles from "../../styles/Button.module.css";
// Assets
import Asset from "../../components/Asset";
// Notifications
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
        setLoading(false); // Handle error and update the loading state
      }
    };

    fetchEvent();
  }, [id]);

  const handleDelete = async (eventId) => {
    if (currentUser && currentUser.is_staff) {
      try {
        await axiosInstance.delete(`/events/${eventId}/`);
        NotificationManager.success("Event deleted successfully.");
        history.push("/events");
      } catch (error) {
        // Handle error
      }
    } else {
      NotificationManager.error("You are not authorized to delete this event.");
    }
  };

  const handleEdit = (eventId) => {
    if (currentUser && currentUser.is_staff) {
      history.push(`/events/${eventId}/edit`);
    } else {
      NotificationManager.error("You are not authorized to edit this event.");
    }
  };

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Container>
          {loading ? (
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
                      <strong>Info:</strong> {event.content}
                    </div>
                  </Card.Text>
                )}
                {event.description && (
                  <Card.Text className={styles.EventDescription}>
                    <strong>Description:</strong> {event.description}
                  </Card.Text>
                )}

                {currentUser.is_staff && (
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
                )}
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
