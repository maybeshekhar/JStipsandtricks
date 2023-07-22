import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nnavbar.css'


const Nnavbar = () => {
  return (
    <>
        <Navbar expand="lg fixed-top">
      <Container className='navbar' >
        <Navbar.Brand href="/"><b>JS helpul tips</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="/" style={{color: 'black'}}>Tips</Nav.Link>
            <Nav.Link href="/tricks" style={{color: 'black'}}>Tricks</Nav.Link>
            <Nav.Link href="/memes" style={{color: 'black'}}>Memes</Nav.Link>
            <Nav.Link href="/doubts" style={{color: 'black'}}>FAIQ</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Nnavbar