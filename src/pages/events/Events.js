// import React, { useState, useEffect } from "react";
// import { axiosInstance } from "../../api/axiosDefaults";
// import { Link } from "react-router-dom";
// import styles from "../../styles/Events.module.css";

// const Events = () => {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axiosInstance.get("/events/");
//         setEvents(response.data.results);
//       } catch (error) {
//         // Handle error
//       }
//     };

//     fetchEvents();
//   }, []);

//   return (
//     <div className={styles.Events}>
//       <h2>Events</h2>
//       <div className={styles.EventList}>
//         {events.map((event) => (
//           <Events key={event.id} {...event} />
//         ))}
//       </div>
//       <Link to="/create-event">Create Event</Link>
//     </div>
//   );
// };

// export default Events;


import React, { useEffect, useState} from "react";
import Event

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosInstance } from "../../api/axiosDefaults";

function Events( { filter = "" }) {
  const [events, setEvents] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const {pathname} = useLocation();


  useEffect(() => {
    const fetchEvents = async () => {
        try {
          const response = await axiosInstance.get(`/events/?${filter}`);
          setEvents(response.data.results);
          setHasLoaded(true);
        }
        catch (error) {
          // Handle error
        }
        };
        setHasLoaded(false);
        fetchEvents();
      }, [filter, pathname]);

  
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles mobile</p>
        {hasLoaded ? ( 
          <>
            {events.results.length  ? (
              events.results.map((event) => (
                <Events />
              ): (
                console.log("Events")
              )}
            </>
        ) : (
          console.log("Loading")
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <p>Popular profiles for desktop</p>
      </Col>
    </Row>
  );
}

export default Events;