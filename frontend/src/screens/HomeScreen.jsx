import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../../products";
import Product from "../components/Product";
import axios from "axios";
import { useEffect, useState } from "react";

// these screens are used like the home screen, about screen, contact screen
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:5000/api/products");

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={10} lg={6} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
