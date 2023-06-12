// React
import React, { useEffect, useRef, useState } from "react";
// React Router
import { useHistory, useParams } from "react-router";
// API
import { axiosInstance } from "../../api/axiosDefaults";
// Notifications
import { NotificationManager } from "react-notifications";
// Bootstrap
import {  Row,  Form,  Alert, Card, Image, Button } from "react-bootstrap";
// Styles
import styles from "../../styles/EventsEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
// Assets
import Upload from "../../assets/upload.png";
// Components
import Asset from "../../components/Asset";



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

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button className={`${btnStyles.button} `} type="submit">
        Edit
      </Button>
    </div>
  );


  return (
<Form className={styles.CardBody} onSubmit={handleSubmit}>
  <Row className={`${styles.FormBody} text-center my-auto py-2 p-md-2`}>
    <Card.Body>
      {image ? (
        <>
          <figure>
            <Image className={appStyles.Image} src={image} rounded />
          </figure>

        </>
      ) : (
        <Form.Label
          className="d-flex justify-content-center"
          htmlFor="image-upload"
        >
          <Asset src={Upload} message="Click or tap to upload an image" />
        </Form.Label>
      )}

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Control
          type="file"
          id="image-upload"
          accept="image/"
          onChange={handleChangeImage}
          ref={imageInput}
        />
      </Form.Group>
      {errors?.image?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Card.Footer className={styles.CardFooter}>
      {textFields}
      </Card.Footer>
    </Card.Body>
  </Row>
</Form>
  );
};

export default EventsEditForm;
