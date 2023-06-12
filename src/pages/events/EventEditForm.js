import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router";
import { axiosInstance } from "../../api/axiosDefaults";
import { NotificationManager } from "react-notifications";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import styles from "../../styles/EventsEditForm.module.css";

const EventsEditForm = () => {
  const [errors, setErrors] = useState({});

  const [eventData, setEventData] = useState({
    title: "",
    content: "",
    image: "",
  });

  const { title, content, image } = eventData;
  const imageInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosInstance.get(`/events/${id}/`);
        const { title, content, image, is_owner } = data;

        is_owner ? setEventData({ title, content, image }) : history.push("/");
      } catch (err) {
        // Handle error
      }
    };

    handleMount();
  }, [history, id]);

  const handleChange = (event) => {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setEventData({
        ...eventData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);

    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      await axiosInstance.put(`/events/${id}/`, formData);
      history.push(`/events/${id}`);
      NotificationManager.success("Event Edited", "Success!");
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
        if (err.response?.data?.image) {
          NotificationManager.error("There was an issue editing the image", "Error");
        } else {
          NotificationManager.error("There was an issue editing your event", "Error");
        }
      }
    }
  };

  return (
    <Container className="h-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Form className={styles.EventsEditForm} onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
              />
              {errors?.title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Form.Group>

            <Form.Group controlId="formContent">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                name="content"
                value={content}
                onChange={handleChange}
              />
              {errors?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Form.Group>

            <Form.Group controlId="formImage">
              <Form.Label>Image</Form.Label>
              {image ? (
                <img src={image} alt="Event" className={styles.EventImage} />
              ) : (
                <Form.Label className={styles.UploadLabel}>
                  <span>Click or tap to upload an image</span>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleChangeImage}
                    ref={imageInput}
                  />
                </Form.Label>
              )}
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Form.Group>

            <Button type="submit" className="w-100">
              Edit Event
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EventsEditForm;
