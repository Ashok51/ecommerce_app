import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
// import { useGetProductsQuery } from "../slices/productsApiSlice";
import { useGetProductsQuery } from "../slices/productsApiSlice";

// these screens are used like the home screen, about screen, contact screen
const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <div> Loading...</div>
      ) : error ? (
        error?.data?.message || error.message
      ) : (
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
      )}
    </>
  );
};

export default HomeScreen;
