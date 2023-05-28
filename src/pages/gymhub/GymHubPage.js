// React and Router
import { Link, } from "react-router-dom";
import React from "react";
// Components
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// Styles
import styles from "../../styles/SignUp.module.css";
import btnStyles from "../../styles/Button.module.css";


/**
 * Gym Hub page
 * @component
 * 
 */
 
const GymHubPage = () => {
    return (

        <Row className={styles.Row}>
        <Col className="my-auto p-2 p-md-2" md={4}>
          <Container className={`${styles.Content} p-6 `}>
            <h1 className={styles.Header}>Gym Hub</h1>
            <Link className={styles.Link} to="/signin">
              <Button className={`${btnStyles.button} ${btnStyles.Large}`}>Sign in</Button>
            </Link>
            </Container>
          <Container className={`mt-3 ${styles.Content}`}>
            <Link className={styles.Link} to="/signup">
              Don't have an account? <span>Sign up now!</span>
            </Link>
          </Container>
        </Col>
  
      </Row>
    );
    }
    export default GymHubPage;