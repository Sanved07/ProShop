import { React, useEffect, useState } from "react";
import Ratings from "../components/Ratings";
import Message from "../components/Message";
import Loader from "../components/Loader";

import { Row, Col, ListGroup, Image, Button, Form } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions.js";
import { addToCart } from "../actions/cartActions.js";

function ProductsScreen({ history, match }) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const addToCartHandler = () => {
    // history.push("/cart/" + match.params.id + "?qty=" + qty);
    dispatch(addToCart(product._id, qty));
    history.push("/cart");
  };

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [match, dispatch]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
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
                      onClick={addToCartHandler}
                      variant="warning"
                      size="lg"
                      disabled={product.countInStock === 0}
                    >
                      {product.countInStock > 0
                        ? "Add to Cart"
                        : "Out of Stock"}
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col md={1}>Qty</Col>
                    <Col md={2}>
                      <Form.Select
                        size="sm"
                        value={qty}
                        onChange={(e) => {
                          setQty(e.target.value);
                        }}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Select>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
            </ListGroup>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default ProductsScreen;
