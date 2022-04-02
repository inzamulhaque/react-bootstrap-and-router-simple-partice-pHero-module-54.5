import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomeCart = ({ cart, handleremove }) => {
    const navigate = useNavigate();
    return (
        <>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>Added Item(s): {cart.length} </Card.Title>
                    <Card.Text>
                        {cart.map(item => {
                            return (<Row key={item.id}>
                                <Col><img src={item.image} style={{ width: "50px", heigth: "50px", borderRadius: "50%" }} /></Col>
                                <Col><h6>{item.name}</h6></Col>
                                <Col><Button variant="danger" onClick={() => handleremove(item.id)}>Remove</Button></Col>
                            </Row>)
                        })}
                    </Card.Text>
                    <Button variant="primary" onClick={() => navigate("/cart")}>Check Out</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default HomeCart;