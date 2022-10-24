import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (id) => {
    const selectedProduct = products.find((product) => product.id === id);
    const cartProduct = cart.find((product) => product.id === id);
    if (cart.length > 3) {
      alert("You already select four laptop");
    } else if (cartProduct) {
      alert("The product has been selected !!!");
    } else {
      const newCart = [...cart, selectedProduct];
      setCart(newCart);
    }
  };

  //  select random product
  const chooseProduct = () => {
    const product = cart[Math.floor(Math.random() * cart.length)];
    console.log(product);
  };
  //  reset cart product
  const resetCart = () => {
    setCart([]);
  };

  //   remove the product from cart
  const removeProductToCart = (id) => {
    const restProduct = cart.filter((product) => product.id !== id);
    setCart(restProduct);
  };

  return (
    <div className="container shop">
      <Row>
        <Col className="col-9">
          <Row xs={1} md={2} lg={3} className="g-4">
            {products.map((product) => (
              <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
            ))}
          </Row>
        </Col>
        <Col className="cart-container col-3">
          <h2 className="mb-4">Selected Laptop</h2>
          {cart.map((product) => (
            <div className="cart-info" key={product.id}>
              <img src={product.img} alt="" />
              <h5 className="mx-3">{product.name.slice(0, 16)}</h5>
              <Button onClick={() => removeProductToCart(product.id)} className="p-0 m-0" variant="light">
                <FontAwesomeIcon className="px-3" icon={faTrash}></FontAwesomeIcon>
              </Button>
            </div>
          ))}
          <Button onClick={chooseProduct} className="my-3" variant="outline-success">
            CHOOSE 1 FOR ME
          </Button>
          <br />
          <Button onClick={resetCart} variant="outline-danger">
            CHOOSE AGAIN
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Shop;
