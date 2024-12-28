
import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/layout/Footer';
import { DecrementQuantity, IncrementQuantity, RemoveProduct } from '../../redux/cartSystem';
import { useDispatch, useSelector } from 'react-redux';
import { FavoriteBorder } from '@mui/icons-material';
import { Box } from '@mui/material';
import { addWish } from '../../redux/wishSystem';
import { Button, Card, Col, Container, Row, Form, Modal } from 'react-bootstrap';

const CartItems = () => {
    const { cart } = useSelector((state) => state.cartsItems); 
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        address: '',
    });

    const handleRemovetocart = (item) => {
        dispatch(RemoveProduct(item));
    };

    const addFav = (item) => {
        dispatch(addWish(item)); 
    };

    const handleBuyClick = () => {
        setShowModal(true); 
    };

    const handleCloseModal = () => {
        setShowModal(false);     };

    const handleCheckout = () => {
        alert('Order Success!');
        setShowModal(false); 
    };

    const handleIncrement = (item) => {
        dispatch(IncrementQuantity({ id: item.id }));
      };
      const handleDecrement = (item) => {
        dispatch(DecrementQuantity({ id: item.id }));
      };
    return (
        <>
            <Header />
            <p className="text-center fs-1" style={{ fontFamily: 'Inter' }}>
                All Add to Cart Items
            </p>

            {cart.length === 0 ? (
                <p className="text-center">No Add to Cart Items</p>
            ) : (
                <section>
                    <Container className="py-5">
                        <Row>
                            {cart.map((item) => {
                                return (
                                    <Col key={item.id} md={4}>
                                        <Card className="mb-4">
                                           <div style={{height:"260px"}}> <Card.Img  variant="top" src={item.Img} height="100%" width="100%" /></div>
                                            <Card.Body>
                                                <Card.Text>{item.description}</Card.Text>
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        margin: '7px',
                                                    }}
                                                >
                                                    <p>{item.tittle}</p>
                                                    <Box sx={{ cursor: 'pointer', marginLeft: '9px' }}>
                                                        <FavoriteBorder onClick={() => addFav(item)} />
                                                    </Box>
                                                </div>

                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        margin: '7px',
                                                    }}
                                                >
                                                    <p>Price: ${item.price}</p>
    <div className="d-flex align-items-center gap-2 justify-content-center">
      
            <button 
                style={{
                    width: '27px',
                    height: '27px',
                    borderRadius: '50%',
                    backgroundColor: 'green',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '20px',
                    marginBottom:"15px",
                    border:"none",
                    paddingBottom:"5px"
                }}
                onClick={() => handleIncrement(item)}
            >
                +
            </button>
           <div style={{
                    paddingBottom:"12px"}}> {item.quantity}</div>
            <button 
                style={{
                    width: '27px',
                    height: '27px',
                    borderRadius: '50%',
                    backgroundColor: 'red',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '20px',
                    marginBottom:"15px",
                    border:"none",
                    paddingBottom:"5px"
                }}
                onClick={() => handleDecrement(item)}
            >
                -
            </button>

          
        </div>
                                                </div>

                                                {/* Quantity input field */}
                                               
                                               

                                                <div className="d-flex">
                                                    <Button
                                                        style={{
                                                            height: '40px',
                                                            width: '100px',
                                                            border: '2px solid green',
                                                            background: 'green',
                                                            color: 'white',
                                                            borderRadius: '10px',
                                                            textAlign: 'center',
                                                            margin: 'auto',
                                                            marginBottom: '10px',
                                                        }}
                                                        onClick={handleBuyClick}
                                                    >
                                                        Buy
                                                    </Button>
                                                    <Button
                                                        onClick={() => handleRemovetocart(item)}
                                                        style={{
                                                            height: '40px',
                                                            width: '100px',
                                                            border: '2px solid red',
                                                            background: 'red',
                                                            color: 'white',
                                                            borderRadius: '10px',
                                                            textAlign: 'center',
                                                            margin: 'auto',
                                                            marginBottom: '10px',
                                                        }}
                                                    >
                                                        X
                                                    </Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Container>
                </section>
            )}

            <Footer />

            {/* Checkout Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Checkout</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={userDetails.name}
                                onChange={(e) =>
                                    setUserDetails({ ...userDetails, name: e.target.value })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={userDetails.email}
                                onChange={(e) =>
                                    setUserDetails({ ...userDetails, email: e.target.value })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your address"
                                value={userDetails.address}
                                onChange={(e) =>
                                    setUserDetails({ ...userDetails, address: e.target.value })
                                }
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCheckout}>
                        Confirm Order
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CartItems;





























