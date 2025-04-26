import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './productCard.css';
import ProductCard from './ProductCard/ProductCard';


const products = [
  {
    id: 1,
    title: 'Blue Diamond Almonds Lightly Salted',
    description: 'In Stock',
    discount: '10%',
    organic: true,
    oldPrice: '$11.68',
    newPrice: '$10.58',
    rating: 1,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Organic Cashews',
    description: 'In Stock',
    discount: '15%',
    organic: true,
    oldPrice: '$12.99',
    newPrice: '$11.04',
    rating: 5,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Pistachios Roasted',
    description: 'Out of Stock',
    discount: '5%',
    organic: false,
    oldPrice: '$9.99',
    newPrice: '$9.49',
    rating: 4,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Dry Roasted Peanuts',
    description: 'In Stock',
    discount: '20%',
    organic: true,
    oldPrice: '$8.99',
    newPrice: '$7.19',
    rating: 3,
    image: 'https://via.placeholder.com/150',
  },
];

const ProductCards = () => {
  return (
    <Container className="py-5">
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={3} className="d-flex justify-content-center mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductCards;
