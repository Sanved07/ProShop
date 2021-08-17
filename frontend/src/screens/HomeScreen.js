import { React, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions.js";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";

function HomeScreen() {
  const dispatch = useDispatch();
  //productList from the store.js (NO need to import store.js)
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((products) => (
            <Col key={products._id} sm={12} md={6} lg={3} xs={12}>
              <Products products={products} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
