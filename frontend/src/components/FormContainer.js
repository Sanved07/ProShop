import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function FormContainer({ children }) {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export { FormContainer };
