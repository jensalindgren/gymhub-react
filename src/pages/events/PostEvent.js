import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosInstance } from "../../api/axiosDefaults";
import appStyles from "../../App.module.css";
import { useParams } from "react-router";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const EventPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axiosInstance.get(`/events/${id}/`);
        setEvent(response.data);
      } catch (error) {
        // Handle error
      }
    };

    fetchEvent();
  }, [id]);

  console.log(event);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles for mobile</p>
        {event ? (
          <Container className={appStyles.Content}>
            <h3>{event.title}</h3>
            <p>{event.content}</p>
            <img src={event.image} alt={event.title} />
          </Container>
        ) : (
          <p>Loading event...</p>
        )}
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
};

export default EventPage;
