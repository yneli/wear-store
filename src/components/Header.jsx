import React from "react";
import { Navbar, Nav,  Container } from 'react-bootstrap';





function Header() {
    return ( 
  <Navbar collapseOnSelect fixed="top" bg="light" variant="light">
    <Container>
    <Navbar.Brand href="/"><img src="./img/Logo.png" alt="" /></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link  href="/WOMEN">WOMEN</Nav.Link>
      <Nav.Link  href="/MEN">MEN</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link href="/Cart">CART</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
     );
}

export default Header;