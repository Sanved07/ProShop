import { React, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions.js";

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((products) => (
            <Col key={products._id} sm={12} md={6} lg={3}>
              <Products products={products} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
