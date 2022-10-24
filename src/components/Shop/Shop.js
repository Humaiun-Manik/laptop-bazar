import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState({});

  // load data
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (id) => {
    const selectedProduct = products.find((product) => product.id === id);
    const cartProduct = cart.find((product) => product.id === id);

    if (cart.length > 3) {
      alert("Oops... Can't Select more then 4!");
    } else if (cartProduct) {
      alert("The product has been selected !!!");
    } else {
      const newCart = [...cart, selectedProduct];
      setCart(newCart);
    }
  };

  //  select random product
  const chooseProduct = () => {
    if (cart.length === 0) {
      document.getElementById("cart").style.display = "none";
    } else {
      const product = cart[Math.floor(Math.random() * cart.length)];
      setProduct(product);
      document.getElementById("cart").style.display = "block";
    }
  };

  //  reset cart product
  const resetCart = () => {
    setCart([]);
    setProduct({});
    document.getElementById("cart").style.display = "none";
  };

  //   remove the product from cart
  const removeProductToCart = (id) => {
    const restProduct = cart.filter((product) => product.id !== id);
    setCart(restProduct);
  };

  return (
    <>
      <div id="cart" className="mx-auto mb-5">
        <h1 className="text-success text-center mb-3">This laptop is perfect for you.</h1>
        <Card>
          <Card.Img variant="top" src={product?.img} />
          <Card.Body>
            <Card.Title>{product?.name}</Card.Title>
            <h2 className="text-danger text-center">Price: {product?.price}</h2>
          </Card.Body>
        </Card>
      </div>

      <div className="container">
        <Row className="g-5">
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
    </>
  );
};

export default Shop;
