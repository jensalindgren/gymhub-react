import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../api/axiosDefaults";
import { Link } from "react-router-dom";
import styles from "../../styles/Events.module.css";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axiosInstance.get("/events/");
        setEvents(response.data.results);
      } catch (error) {
        // Handle error
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className={styles.Events}>
      <h2>Events</h2>
      <div className={styles.EventList}>
        {events.map((event) => (
          <Events key={event.id} {...event} />
        ))}
      </div>
      <Link to="/create-event">Create Event</Link>
    </div>
  );
};

export default Events;