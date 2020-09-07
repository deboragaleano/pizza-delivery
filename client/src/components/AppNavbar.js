import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
    // Container
} from 'reactstrap'; 

const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

        const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Yummy Pizza</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
            </Collapse>
        </Navbar>
        </div>
    )
}

export default AppNavbar; 