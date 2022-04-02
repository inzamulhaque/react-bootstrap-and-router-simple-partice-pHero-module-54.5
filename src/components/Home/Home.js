import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ProductsContext } from '../../App';
import HomeCart from './HomeCart';
import HomeShop from './HomeShop';

const Home = () => {
    const { products, cart, setCart } = useContext(ProductsContext);

    const handleAddToCart = item => {
        setCart([...cart, item]);
    }
    const handleremove = id => {
        const restItems = cart.filter(item => item.id !== id);
        setCart(restItems);
    }
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col xs="12" md="10" lg="8" className="mx-auto">
                        <Row xs={1} md={2} lg={3} className="g-5">
                            {
                                products.map(product => <HomeShop key={product.id} product={product} handleAddToCart={handleAddToCart} />)
                            }
                        </Row>
                    </Col>
                    <Col xs="12" md="8" lg="4" className="mx-auto">
                        <HomeCart cart={cart} handleremove={handleremove} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;