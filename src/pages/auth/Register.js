import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Register.module.css";
import appStyles from "../../App.module.css";
import {   Col, Row, Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Assets
import logo from "../../assets/logo.png";

/**
 * User registration page
 * @component
 */

const SignUpForm = () => {
    return (
      <Row className={styles.Row}>
        <Col className="my-auto py-2 p-md-2" md={6}>
          <Container className={`${styles.Content} p-4 `}>
            <h1 >Register Account</h1>
  
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" /></Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
                <Button className={styles.button}  type="submit">Submit</Button>
            </Form>
  
          </Container>

          <Container className={`mt-3 ${styles.Content}`}>
            <Link className={styles.Link}  to="/signin">Already have an account? <span>Sign in</span></Link>
          </Container>

        </Col>
      </Row>
    );
  };
  
  export default SignUpForm;