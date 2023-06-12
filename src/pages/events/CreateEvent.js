// import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { axiosInstance } from "../../api/axiosDefaults";
// import styles from "../../styles/CreateEvent.module.css";

// const CreateEvent = () => {
//     const [eventData, setFormData] = useState({
//       title: "",
//       content: "",
//       image: "",
//     });
//     const history = useHistory();
  
//     const handleChange = (e) => {
//       if (e.target.name === "image") {
//         setFormData({ ...eventData, [e.target.name]: e.target.files[0] });
//       } else {
//         setFormData({ ...eventData, [e.target.name]: e.target.value });
//       }
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         const { title, content, image } = eventData;
  
//         // Create form data object
//         const data = new FormData();
//         data.append("title", title);
//         data.append("content", content);
//         if (image) {
//           data.append("image", image);
//         }
  
//         await axiosInstance.post("/events/", data);
//         history.push("/events");
//       } catch (err) {
//         // Handle create event error
//       }
//     };
  
//     return (
//       <div className={styles.CreateEvent}>
//         <h2>Create Event</h2>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="title">
//             <Form.Label>Title</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter event title"
//               name="title"
//               value={eventData.title}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>
  
//           <Form.Group controlId="content">
//             <Form.Label>Content</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={5}
//               placeholder="Enter event content"
//               name="content"
//               value={eventData.content}
//               onChange={handleChange}
//             />
//           </Form.Group>
  
//           <Form.Group controlId="image">
//             <Form.Label>Image</Form.Label>
//             <Form.Control
//               type="file"
//               accept="image/*"
//               name="image"
//               onChange={handleChange}
//             />
//           </Form.Group>
  
//           <Button type="submit">Create</Button>
//         </Form>
//       </div>
//     );
//   };
  
//   export default CreateEvent;

import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import { axiosInstance } from "../../api/axiosDefaults";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";

import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

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
    } catch (error) {
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
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
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
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

              <Form.File
                id="image-upload"
                accept="image/*"
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
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{renderTextFields}</Container>
        </Col>
      </Row>
    </Form>
  );
};

export default CreateEvents;
