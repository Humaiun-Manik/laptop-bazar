import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, CardGroup, Col } from "react-bootstrap";
import "./Product.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, handleAddToCart }) => {
  const { id, img, name, price } = product;

  return (
    <Col>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="text-danger mt-4">Price: {price}</Card.Text>
          </Card.Body>
          <Button onClick={() => handleAddToCart(id)} className="py-2 fs-5 text-primary" variant="light">
            Add To Cart
            <FontAwesomeIcon className="px-3" icon={faShoppingCart}></FontAwesomeIcon>
          </Button>
        </Card>
      </CardGroup>
    </Col>
  );
};

export default Product;
