import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { ProductsContext } from '../../App';

const Cart = () => {
    const { cart, setCart } = useContext(ProductsContext);

    const handleremove = id => {
        const restItems = cart.filter(item => item.id !== id);
        setCart(restItems);
    };
    return (
        <Container className="mt-5">
            <Row>
                <Col xs={12} md={8} ld={6} classname="mx-auto">
                    {cart.map(item => {
                        return (<Row key={item.id}>
                            <Col><img src={item.image} style={{ width: "50px", heigth: "50px", borderRadius: "50%" }} /></Col>
                            <Col><h6>{item.name}</h6></Col>
                            <Col><Button variant="danger" onClick={() => handleremove(item.id)}>Remove</Button></Col>
                        </Row>)
                    })}
                </Col>
            </Row>
        </Container>
    );
};

export default Cart;