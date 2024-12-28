import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Logo from '../../assest/Image/FFF_Ascension_LO 1.png';
import { useSelector } from 'react-redux';

function Header() {
  
  const location = useLocation();
  const { cart } = useSelector((state) => state.cartsItems)


  return (
    <div className="container m-auto">
      <Navbar expand="lg" className="bg-bod" style={{ padding: '0.5rem' }}>
        <Container fluid>
<div className="logo" style={{ maxWidth: '120px' }}>
  <img src={Logo} alt="Logo" style={{ width: '100%', height: 'auto' }} />
</div>
      
          <Navbar.Toggle aria-controls="navbarScroll" />

      
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="navlist  mx-auto my-2 my-lg-0"
              navbarScroll
            >
        
              {[
                { path: '/', label: 'Home' },
                { path: '/Event', label: 'Event Planner Video' },
                { path: '/Shop', label: 'Shop' },
                { path: '/About', label: 'About Us' },
                { path: '/Contact', label: 'Contact Us' },
                { path: '/favourite', label: 'Favourite List' },
              ].map((navItem) => (
                <Link
                  as={NavLink}
                  to={navItem.path}
                  key={navItem.path}
                  className={({ isActive }) => (isActive ? 'text-danger' : '')}
                  style={{
                    margin: 0,
                    textAlign: 'center',
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      color: location.pathname === navItem.path ? 'red' : 'black',
                    }}
                  >
                    {navItem.label}
                  </p>
                </Link>
              ))}

        
              <Link to={"/carts"} style={{ position: 'relative' }}>
                  <svg
                   
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    style={{ marginLeft: '8px', position: 'relative',color:location.pathname === "/carts" ? "#dc3545" : "black"  }}
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
                  </svg>
                  <span
                    style={{
                      position: 'absolute',
                      top: '-5px',
                      right: '-15px',
                      backgroundColor: location.pathname === "/carts" ? '#dc3545' : 'black',
                      color: '#fff',
                      fontSize: '10px',
                      fontWeight: 'bold',
                      borderRadius: '50%',
                      width: '16px',
                      height: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {cart.length}
                  </span>
                
              </Link>

            </Nav>

        
            <Form className="d-flex align-item-center">
              <div className="guardian text-dark">
               <Link to={"https://hnh-test-admin.vercel.app/"}>
               <p style={{cursor:"pointer"}}>
                  <AccountCircleOutlinedIcon /> <span>Guardian</span>
                </p>
               </Link>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
