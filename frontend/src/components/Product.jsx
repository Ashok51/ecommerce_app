import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  debugger
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
      </a>
      <Card.Text as="h3">${product.price}</Card.Text>
    </Card>
  );
};

export default Product;
