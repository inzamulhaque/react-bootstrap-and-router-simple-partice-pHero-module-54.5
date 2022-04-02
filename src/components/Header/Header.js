import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" className='navbarHeight'>
                <Container>
                    <NavLink className="navbar-brand" to="/">MD IH Alif</NavLink>

                    <Nav className="ms-auto">
                        <NavLink className={"nav-link"} to="/">Home</NavLink>
                        <NavLink className={"nav-link"} to="/shop">Shop</NavLink>
                        <NavLink className={"nav-link"} to="/cart">Cart</NavLink>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;