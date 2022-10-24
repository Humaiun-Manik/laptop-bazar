import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../Product/Product";
// import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container shop">
      <Row className="product-container">
        <Col className="col-9">
          <Row xs={1} md={2} lg={3} className="g-4">
            {products.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </Row>
        </Col>
        <Col className="cart-container col-3">
          <h1>This is Cart</h1>
        </Col>
      </Row>
    </div>
  );
};

export default Shop;
