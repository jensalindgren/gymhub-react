import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { axiosInstance } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import btnStyles from "../../styles/Button.module.css";
// import appStyles from "../../App.module.css";
import styles from "../../styles/PostCreateEditForm.module.css";
import Upload from "../../assets/upload.png";
import Asset from "../../components/Asset";



const ProfileEditForm = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();

  const [profileData, setProfileData] = useState({
    name: "",
    content: "",
    image: "",
  });
  const { name, content, image } = profileData;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosInstance.get(`/profiles/${id}/`);
          const { name, content, profile_image } = data;
          setProfileData({ name, content, image: profile_image });
        } catch (err) {
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("content", content);

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }

    try {
      const { data } = await axiosInstance.put(`/profiles/${id}/`, formData, {
        headers: { "Content-Type": "multipart/form-data" }, // Set content type as multipart/form-data
      });
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      history.goBack();
    } catch (err) {
      setErrors(err.response?.data);
    }
  };


  const textFields = (
    <>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
          name="name"
        />
      </Form.Group>

      <Form.Group controlId="content">
        <Form.Label>Bio</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter your bio"
          value={content}
          onChange={handleChange}
          name="content"
          rows={7}
        />
      </Form.Group>

      {errors?.name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button className={`${btnStyles.button}`} onClick={() => history.goBack()}>
        Cancel
      </Button>
      <Button className={`${btnStyles.button}`} type="submit">
        Save
      </Button>
    </>
  );

  return (
<Form className={styles.CardBody} onSubmit={handleSubmit}>
  <div className={`${styles.FormBody} text-center my-auto py-2 p-md-2`}>
    <div className="text-center">
      <Form.Group>
        {image && (
          <figure>
            <Image src={image} fluid />
          </figure>
        )}

        <div>
          {image ? (
            <Form.Label
              style={{ className: `${btnStyles.button}  btn my-auto` }}
              htmlFor="image-upload"
            >
              Change the image
            </Form.Label>
          ) : (
<Form.Label
  style={{ className: "d-flex justify-content-center" }}
  htmlFor="image-upload"
>
  {currentUser.profile_image ? (
    <Image src={currentUser.profile_image} fluid />
  ) : (
    <Asset src={Upload} message="Click or tap to upload an image" />
  )}
</Form.Label>
          )}
        </div>

        <Form.File
          id="image-upload"
          ref={imageFile}
          accept="image/*"
          onChange={(e) => {
            if (e.target.files.length) {
              setProfileData({
                ...profileData,
                image: URL.createObjectURL(e.target.files[0]),
              });
            }
          }}
        />

        {errors?.image?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>
    </div>

    <div>{textFields}</div>
  </div>
</Form>



  );
};

export default ProfileEditForm;
