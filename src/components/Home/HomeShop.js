import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const HomeShop = ({ product, handleAddToCart }) => {
    return (
        <div>
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
        </div>
    );
};

export default HomeShop;