import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Navigation() {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        style={{ position: 'sticky', top: '0', zIndex: 100 }}
      >
        <Container>
          <Navbar.Brand href="/">SG Revium</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/page1">Page 1</Nav.Link>
            <Nav.Link href="/page2">Page 2</Nav.Link>
            <Nav.Link href="/page3">Page 3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
