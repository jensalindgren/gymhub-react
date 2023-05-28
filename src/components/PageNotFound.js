// React and Router
import React from "react";
// Components
import { Col, Row } from "react-bootstrap";
// Styles
import styles from "../styles/PageNotFound.module.css"
// Assets
import PageNotFoundImg from "../assets/pagenot.jpg";


const PageNotFound = () => {
  return (
    <Row className={`${styles.RowContainer}`}>
      <Col xs={10} md={8} className={`text-center `}>
        <div >Page Not Found</div>
        <div className="mb-5">
          Oh no! We can't seem to find that
          page or you don't have access
        </div>
        <div className={styles.Page}>
        <img className="img-fluid" src={PageNotFoundImg} alt=""></img>
        </div>
      </Col>
    </Row>
  );
};

export default PageNotFound;