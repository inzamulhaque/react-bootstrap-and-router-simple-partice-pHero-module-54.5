import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { ProductsContext } from '../../App';
import Item from './Item';

const Shop = () => {
    const { products, cart, setCart } = useContext(ProductsContext);

    const handleAddToCart = item => {
        setCart([...cart, item]);
    }
    return (
        <Container className="mt-5">
            <Row xs={1} md={2} lg={4} className="g-5">
                {
                    products.map(item => <Item key={item.id} product={item} handleAddToCart={handleAddToCart} />)
                }
            </Row>
        </Container>
    );
};

export default Shop;