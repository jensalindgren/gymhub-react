import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../api/axiosDefaults";
import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col, Card, Media } from "react-bootstrap";
import styles from "../../styles/Events.module.css";
import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPage, setNextPage] = useState(null);
  const currentUser = useCurrentUser();
  const history = useHistory();

  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("/events/");
      setEvents(response.data.results);
      setNextPage(response.data.next);
      setHasLoaded(true);
    } catch (error) {
      // Handle error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleLoadMore = () => {
    if (nextPage) {
      axiosInstance
        .get(nextPage)
        .then((response) => {
          setEvents([...events, ...response.data.results]);
          setNextPage(response.data.next);
        })
        .catch((error) => {
          // Handle error
        });
    }
  };

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
    <Container className="h-100">
      <Row className="py-2 p-0 p-lg-2" lg={8}>
        <Col lg={8}>
          <div className={styles.Events}>
            <h2 className="text-center">Events</h2>
            <div className={`${styles.EventList} d-flex flex-column align-items-center`}>
              {hasLoaded ? (
                events.length > 0 ? (
                  <ul className={styles.EventContainer}>
                    {events.map((event) => (
                      <li key={event.id} className={styles.EventItem}>
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
                              {/* Add your other event-related buttons and actions here */}
                            </div>
                          </Card.Body>
                        </Card>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No events found.</p>
                )
              ) : (
                <p>Loading events...</p>
              )}
              {isLoading && <p>Loading more events...</p>}
              {nextPage && (
                <button onClick={handleLoadMore} disabled={isLoading}>
                  Load More
                </button>
              )}
            </div>
          </div>
        </Col>
        <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
          <PopularProfiles />
        </Col>
      </Row>
    </Container>
  );
};

export default Events;
