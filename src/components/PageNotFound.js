// React and Router
import React from "react";
// Components
import { Col, Row } from "react-bootstrap";


const PageNotFound = () => {
  return (
    <Row>
      <Col xs={10} md={8} className={`text-center `}>
        <div >Page Not Found</div>
        <div className="mb-5">
          Oh no! We can't seem to find that
          page or you don't have access
        </div>
      </Col>
    </Row>
  );
};

export default PageNotFound;