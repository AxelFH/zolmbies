import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../../assets/styles/Navbar.css';
import logoImage from '../../assets/images/logo.png';

const scrollToSection = (sectionId) => {
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - navbarHeight - 70,
      behavior: 'smooth'
    });
  }
};

const CustomNavbar = () => {
  return (
    <Navbar expand="md" bg="custom" variant="dark" className='pt-3 fixed-top'>
      <Navbar.Brand href="#" className="mr-auto">
        <img
          src={logoImage}
          className="d-inline-block align-top logo-image"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className='burguer' />
      <Navbar.Collapse id="responsive-navbar-nav" className='links-area'>
        <Nav className="ml-auto links">
          <Nav.Link className='lnk' href="#" target='_blank'>Telegram</Nav.Link>
          <Nav.Link className='lnk' href="#" target='_blank'>X</Nav.Link>
          <Nav.Link className='lnk' href="#">Whitepaper</Nav.Link>
          <Nav.Link className='lnk' href="#">More</Nav.Link>
          <Nav.Link className='lnk' href="#">NFT</Nav.Link>
          <Nav.Link className='lnk' href="#" target='_blank'>Market</Nav.Link>
        </Nav>
        <a href="#" target='_blank'>
          <Button className='p-2' variant="outline-light"><span>Zolmbies</span></Button>
        </a>
        <a href="#" target='_blank' className='btn2'>
          <Button className='p-2' variant="outline-light"><span>Collections</span></Button>
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
