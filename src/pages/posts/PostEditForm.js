// React and Router
import React, { useEffect, useRef, useState } from "react";
// Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
// Components
import Asset from "../../components/Asset";
// Assets
import Upload from "../../assets/upload.png";
// Styles
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
// Hooks
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
// Notifications
import { NotificationManager } from "react-notifications";

/**
 * Post Edit form
 * @component
 *  
 */

function PostEditForm() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    image: "",
  });
  const { title, content, image } = postData;

  const imageInput = useRef(null);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/${id}/`);
        const { title, content, image, is_owner } = data;

        is_owner ? setPostData({ title, content, image }) : history.push("/");
      } catch (err) {
      }
    };

    handleMount();
    }, [history, id]);

    /**
     * Handle change
     */


  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * Handle image change
   */

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  /**
   * Submit post function
   */

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);

    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }


    try {
      await axiosReq.put(`/posts/${id}/`, formData);
      history.push(`/posts/${id}`);
      NotificationManager.success(" Post Edit ", "Success!");
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
        if (err.response?.data?.image) {
            NotificationManager.error("There was an issue editing the image", "Error");
          } else {
            NotificationManager.error("There was an issue editing your post", "Error");
          }
      }
    }
  };

  /**
   * Text fields
   * 
   */

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
          <Card.Body >
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
              )
              : (
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
              <Form.Control type="file"
                id="image-upload"
                accept="image/"
                onChange={handleChangeImage}
                ref={imageInput} />
              </Form.Group>

            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

        <Card.Footer className={styles.CardFooter}>{textFields}</Card.Footer>
        </Card.Body>
        </Row>

    </Form>
  );
}

export default PostEditForm;