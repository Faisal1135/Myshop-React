import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";
import products from "../products";
import Rating from "../component/Rating";

export const ProductScreen: React.FC<RouteComponentProps<{ id: string }>> = (
  props
) => {
  const product = products.find((p) => p._id === props.match.params.id)!;

  return (
    <div>
      <Link to="/" className="plaintext btn btn-light">
        {" "}
        GO Back
      </Link>
      <Row>
        <Col md={6}>
          <Image fluid alt={`${product.name}`} src={`${product.image}`}></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4>{product.name}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                color="yellow"
                value={product.rating}
                text={`${product.numReviews}`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description : {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>{product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Quantity:</Col>
                  <Col>
                    <input type="number" className="form-control" value={1} />
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button type="button" className="btn-block">
                  Add to Card
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
