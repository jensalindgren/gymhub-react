import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { axiosInstance } from "../../api/axiosDefaults";
import styles from "../../styles/CreateEvent.module.css";

const CreateEvent = () => {
    const [formData, setFormData] = useState({
      title: "",
      content: "",
      image: "",
    });
    const history = useHistory();
  
    const handleChange = (e) => {
      if (e.target.name === "image") {
        setFormData({ ...formData, [e.target.name]: e.target.files[0] });
      } else {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const { title, content, image } = formData;
  
        // Create form data object
        const data = new FormData();
        data.append("title", title);
        data.append("content", content);
        if (image) {
          data.append("image", image);
        }
  
        await axiosInstance.post("/events/", data);
        history.push("/events");
      } catch (err) {
        // Handle create event error
      }
    };
  
    return (
      <div className={styles.CreateEvent}>
        <h2>Create Event</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter event title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </Form.Group>
  
          <Form.Group controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter event content"
              name="content"
              value={formData.content}
              onChange={handleChange}
            />
          </Form.Group>
  
          <Form.Group controlId="image">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              name="image"
              onChange={handleChange}
            />
          </Form.Group>
  
          <Button type="submit">Create</Button>
        </Form>
      </div>
    );
  };
  
  export default CreateEvent;