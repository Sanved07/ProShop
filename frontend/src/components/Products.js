import React from "react";
import { Card } from "react-bootstrap";
import Ratings from "./Ratings.js";
import { Link } from "react-router-dom";

function Products({ products }) {
  return (
    <div>
      <Card className="my-3 p-3 rounded" key={products._id}>
        <Link to={"/products/" + products._id}>
          <Card.Img src={products.image} variant="top" />
        </Link>

        <Card.Body>
          <Link to={"/products/" + products._id}>
            <Card.Title>
              <strong>{products.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text>
            <Ratings
              value={products.rating}
              text={products.numReviews + " reviews"}
            />
          </Card.Text>
          <Card.Text>
            <h3>₹{products.price}</h3>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Products;
