import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../../products'
import Product from '../components/Product'

// these screens are used like the home screen, about screen, contact screen
const HomeScreen = () => {
  return (
    <>
    <h1>Latest Products</h1>
    <Row>
      {products.map( (product)=>(
        <Col key={product.id} sm={12} md={10} lg ={6} xl={3}>
          <Product product={product}/>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default HomeScreen