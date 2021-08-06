import { React, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Products from "../components/Products";
import axios from "axios";

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

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
