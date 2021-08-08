import React from "react";
import { Row, Container, Col } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <footer style={{ marginBottom: "1px" }}>
        <Container>
          <Row>
            <Col className="text-center">Created by Sanved Hambarde</Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
