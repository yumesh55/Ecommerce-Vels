import './Navbar.css'
{/*import { RiSearchLine } from 'react-icons/ri' */}
import logo from './logo.jpg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
<>
    <div className="tn-container container">
    <Navbar fixed= "" style={{backgroundSize: "0", backgroundColor: "var(--color-primary)"}} data-bs-theme="light">
    <Container>
      <Navbar.Brand><img className="logo1" src={logo}></img></Navbar.Brand>
      <Navbar.Brand className="logo" href="#home">Vels Enterprises</Navbar.Brand>
      <Nav className="me-auto">
        <Link to="/Home"><Nav.Link href="#home">Home</Nav.Link></Link>
        <Nav.Link href="#About Us">About Us</Nav.Link>
        <Link to="/Products"><Nav.Link href="#Products">Products</Nav.Link></Link>
        <Nav.Link href="#Contact Us">Contact Us</Nav.Link>
        <Nav.Link href="#Download Brochure">Download Brochure</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  
</div>

    


</>
  )
}

export default navbar
