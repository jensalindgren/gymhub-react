// React
import React, { useRef, useState } from "react";
// React Router
import { useHistory } from "react-router";
// API
import { axiosInstance } from "../../api/axiosDefaults";
// Bootstrap
import {  Row,  Form,  Alert, Card, Image, Button, Container } from "react-bootstrap";
// Components
import Asset from "../../components/Asset";
// Assets
import Upload from "../../assets/upload.png";
// Styles
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
// Notifications
import { NotificationManager } from "react-notifications";

const CreateEvents = () => {
  const [errors, setErrors] = useState({});

  const [eventData, setEventData] = useState({
    title: "",
    content: "",
    image: "",
  });

  const { title, content, image } = eventData;
  const imageInput = useRef(null);
  const history = useHistory();

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
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosInstance.post("/events/", formData);
      history.push(`/events/${data.id}`);
      NotificationManager.success("Event created", "Success!");
    } catch (error) {
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
        NotificationManager.error("Event not created", "Error!");
      }
    }
  };

  const renderTextFields = (
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

      <Button
        className={`${btnStyles.button} `}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.button} `} type="submit">
        Create
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
                  <div>
                    <Form.Label
                      className={`${btnStyles.button}  btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
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

            <div className="d-md-none">{renderTextFields}</div>

      
          <Container className={appStyles.Content}>{renderTextFields}</Container>
          </Card.Body>
      </Row>
    </Form>
  );
};

export default CreateEvents;
