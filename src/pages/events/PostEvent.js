import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosInstance } from "../../api/axiosDefaults";
import PopularProfiles from "../profiles/PopularProfiles";

function PostEvent() {
  const { id } = useParams();
  const [event, setEvent] = useState({});

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

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Container className={appStyles.Content}>
          <h2>Event Details</h2>
          <p>Title: {event.title}</p>
          <p>Content: {event.content}</p>
          {event.image && (
            <img src={event.image} alt="Event" className="img-fluid" />
          )}
          {/* Add more details as needed */}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PostEvent;
