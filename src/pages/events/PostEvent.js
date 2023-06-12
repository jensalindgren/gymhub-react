import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { axiosInstance } from "../../api/axiosDefaults";
import { Container, Row, Col, Card, Media } from "react-bootstrap";
import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Events.module.css"; // Add the import statement for styles

function PostEvent() {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const currentUser = useCurrentUser();
  const history = useHistory();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { data } = await axiosInstance.get(`/events/${id}`);
        setEvent(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchEvent();
  }, [id]);

  const handleDelete = async (eventId) => {
    try {
      await axiosInstance.delete(`/events/${eventId}/`);
      // Perform any additional actions after deletion
    } catch (error) {
      // Handle error
    }
  };
  
  const handleEdit = (eventId) => {
    history.push(`/events/${eventId}/edit`);
  };

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Container>
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
                <Card.Title className="text-center">{event.title}</Card.Title>
              )}
              {event.description && <Card.Text>{event.description}</Card.Text>}
              <div className={styles.PostBar}>
                {currentUser && event.user?.id === currentUser.id && (
                  <>
                    <button
                      onClick={() => handleDelete(event.id)}
                      className={styles.DeleteButton}
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleEdit(event.id)}
                      className={styles.EditButton}
                    >
                      Edit
                    </button>
                  </>
                )}
                {/* Add your other event-related buttons and actions here */}
              </div>
            </Card.Body>
          </Card>
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PostEvent;
