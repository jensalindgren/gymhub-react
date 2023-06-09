// React and Router
import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
// API
import axios from "axios";
// Components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Alert } from "react-bootstrap";
// Styles
import styles from "../../styles/SignUp.module.css";
import btnStyles from "../../styles/Button.module.css";
// Contexts
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
// Notifications
import { NotificationManager } from "react-notifications";
import { setTokenTimestamp } from "../../utils/utils";

/**
 * User sign in page
 * @component
 */

const SignIn = () => {
  const setCurrentUser = useSetCurrentUser();
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = signInData;

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      history.push("/home");
      NotificationManager.success("Welcome " + username + "!", "Success!");
    } catch (error) {
      setErrors(error.response?.data);
      NotificationManager.error("There was an issue logging you in", "Error");
    }
  };

  return (
    <Row className={styles.Row}>
    <Col className="my-auto p-2 p-md-2" md={6}>
      <Container className={`${styles.Content} p-6 `}>
        <h1 className={styles.Header}>sign in</h1>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label className="d-none">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              className={styles.Input}
              value={username}
              onChange={handleChange}
            />
          </Form.Group>

          {errors.username?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}

          <Form.Group controlId="password">
            <Form.Label className="d-none">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              className={styles.Input}
              value={password}
              onChange={handleChange}
            />
          </Form.Group>

          {errors.password?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}

          <Button
            className={`${btnStyles.button} ${btnStyles.Wide}`}
            type="submit"
          >
            Sign in
          </Button>

          {errors.non_field_errors?.map((message, idx) => (
            <Alert key={idx} variant="warning" className="mt-3">
              {message}
            </Alert>
          ))}
          
        </Form>
      </Container>
      <Container className={`mt-3 ${styles.Content}`}>
        <Link className={styles.Link} to="/signup">
          Don't have an account? <span>Sign up now!</span>
        </Link>
      </Container>
    </Col>

  </Row>
  );
};

export default SignIn;
