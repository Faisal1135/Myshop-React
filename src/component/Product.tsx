import React from "react";
import Iproduct from "../interface/productin";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

export const Product: React.FC<Iproduct> = (product) => {
  return (
    <div>
      <Card className="p-3 my-3 rounded">
        <Link to={`product/${product._id}`}>
          <Card.Img src={`${product.image}`} />
        </Link>
        <Card.Body>
          <Link className="plaintext" to={`product/${product._id}`}>
            <div className="card-title">{product.name}</div>
            {/* <Card.Title ></Card.Title> */}
          </Link>

          <Card.Text as="div">
            <Rating
              color="yellow"
              value={product.rating}
              text={`${product.numReviews}`}
            />
          </Card.Text>
          <Card.Text as="h3" className="my-3">
            $ {product.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
