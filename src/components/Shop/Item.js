import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Item = ({ product, handleAddToCart }) => {
    return (
        <Col className="h-100">
            <Card className="h-100">
                <Card.Img variant="top" src={product.image} style={{ height: "267px" }} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        Price: ${product.price}
                    </Card.Text>
                    <Button onClick={() => handleAddToCart(product)} variant="primary">Add To Cart</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Item;