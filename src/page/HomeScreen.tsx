import React from "react";
import { Col, Row } from "react-bootstrap";
import { Product } from "../component/Product";
import products from "../products";

const HomeScreen: React.FC = () => {
  return (
    <div>
      <h2>Welcome to My shop</h2>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product {...product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default HomeScreen;
