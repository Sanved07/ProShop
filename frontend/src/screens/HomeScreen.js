import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import Products from "../components/Products";

function HomeScreen() {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((products) => (
          <Col key={products._id} sm={12} md={6} lg={3}>
            <Products products={products} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
