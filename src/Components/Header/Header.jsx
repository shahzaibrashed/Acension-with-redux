import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Logo from '../../assest/Image/FFF_Ascension_LO 1.png';

function Header() {
  return (
    <div className='container m-auto'>
      <Navbar expand="lg" className="bg-bod">
        <Container fluid>
          <div className='logo'>
            <img src={Logo} height="100%" width='100%' alt="" />
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="nav-list mx-auto my-2 my-lg-0"
              style={{ maxHeight: '100px', alignItems: "center", paddingTop: "05px" }}
              navbarScroll
            >
              <Nav.Link href="/"><p className='text-danger'>Home</p></Nav.Link>
              <Nav.Link href="/Event"><p>Event Planer video</p></Nav.Link>
              <Nav.Link href="/Shop"><p>Shop</p></Nav.Link>
              <Nav.Link href="/About"><p>About Us</p></Nav.Link>
              <Nav.Link href="/Contact"><p>Contact Us</p></Nav.Link>
              <Nav.Link href="#action1"><p>FAQ</p></Nav.Link>
            </Nav>
            <Form className="d-flex">
              <div className='guardian'>
                <p><AccountCircleOutlinedIcon /> <span>Guardian</span></p>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
}

export default Header;
