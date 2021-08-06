import { React, useEffect, useState } from "react";
import Ratings from "../components/Ratings";
import axios from "axios";

import { Row, Col, ListGroup, Image, Button } from "react-bootstrap";

function ProductsScreen({ match }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get("/api/products/" + match.params.id);
      setProduct(data);
    };
    fetchProduct();
  }, [match]);

  return (
    <div>
      <Row>
        <Col md={4}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>{product.name}</h4>
            </ListGroup.Item>
            <ListGroup.Item variant="light">
              <Ratings
                value={product.rating}
                text={product.numReviews + " reviews"}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>₹{product.price}</h2>
            </ListGroup.Item>
            <ListGroup.Item variant="light">
              <h6>{product.description}</h6>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col md={6}>
                  <Button
                    variant="warning"
                    size="lg"
                    disabled={product.countInStock === 0}
                  >
                    {product.countInStock > 0 ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default ProductsScreen;
